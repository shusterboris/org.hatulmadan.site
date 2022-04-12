import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
import { Card } from "primereact/card";
import { AutoComplete } from 'primereact/autocomplete'
import React, { useEffect, useRef, useState } from "react"
import { fetchCourses, fetchGroups, saveGroup, fetchUsersOfGroup, fetchActiveUsers } from "../service/CommonDataSrv";

export const GroupsViewAndEdit = (props) =>{
    const [groups, setGroups] = useState()
    const [selectedGroup, setSelectedGroup] = useState()
    const [groupName, setGroupName] = useState()
    const [groupId, setGroupId] = useState()
    const [groupSchedule, setGroupSchedule] = useState()
    const [groupSortOrder, setGroupSortOrder] = useState()
    const [courses, setCourses] = useState()
    const [selectedCourse, setSelectedCourse] = useState()
    const [filteredCourses, setFilteredCourses] = useState()
    const [groupUsers, setGroupUsers] = useState()
    const allMembers = useRef()
    const [filteredMembers, setFilteresMembers] = useState()
    const [newMember, setNewMember] = useState()
    const toasts = useRef()
    const isEdited = useRef(false)

    useEffect(()=>{
        fetchGroups(setGroups, toasts)
        fetchCourses(setCourses, toasts)
        fetchActiveUsers(allMembers, toasts)
    },[])

    const clearGroupFields =(value) => {
        setGroupName('')
        setGroupId(null)
        setGroupSchedule('')
        setGroupSortOrder(1)
        setSelectedCourse(null)
        setGroupUsers([])
        setSelectedGroup(value)
    }

    const onGroupSelect = (value) => {
        setGroupName(value.name)
        setGroupId(value.id)
        setGroupSchedule(value.schedule)
        setGroupSortOrder(value.sortOrder)
        const course = courses.find(cur => cur.id === value.course)
        setSelectedCourse(course)
        setSelectedGroup(value)
        fetchUsersOfGroup(value, setGroupUsers, toasts)
    }


    const onChangeGroupName = (value) => {
        setGroupName(value)
        isEdited.current = true
    }

    const onChangeOrder = (value) => {
        setGroupSortOrder(value)
        isEdited.current = true
    }

    const onChangeSchedule = (value) => {
        setGroupSchedule(value)
        isEdited.current = true
    }

    const searchCourse = (event) => {
        const filteredItems = []
        const input = event.query
        if (input){
            for(let i=0; i < courses.length; i++){
                let item = courses[i]
                if (item.name.toLowerCase().includes(input.toLowerCase())){
                    filteredItems.push(item)
                }
            }
        }else{
            Array.prototype.push.apply(filteredItems, courses)
        }
        setFilteredCourses(filteredItems)
    }

    const updateGroupsList = () =>{
        fetchGroups(setGroups, toasts)
    }

    const onClickSave = () => {
        const group = {'id': groupId, 'name': groupName, 'sortOrder': groupSortOrder, 
            'schedule': groupSchedule, 'course': selectedCourse.id, 'courseName': selectedCourse.name}
        saveGroup(group, updateGroupsList, toasts)
        clearGroupFields()
        isEdited.current = true
    }

    const isSaveButtonVisible = () => {
        if (!(groupName && groupSortOrder && groupSchedule)){
            return false
        }else if (groupName && groupSortOrder && groupSchedule && !isEdited.current){
            return false
        }
        return true
    }

    const searchUsers = (event) => {
        const filteredItems = []
        const input = event.query
        if (input){
            for(let i=0; i < allMembers.current.length; i++){
                let item = allMembers.current[i]
                if (item.username.toLowerCase().includes(input.toLowerCase())){
                    filteredItems.push(item)
                }
            }
        }else{
            Array.prototype.push.apply(filteredItems,groups)
        }
        setFilteresMembers(filteredItems);
    }
    
    const userListTableHeader = (
        <div className="p-inputgroup p-pt-0">
            <AutoComplete value={newMember} field="username" 
                suggestions={filteredMembers} completeMethod={e=>searchUsers(e)}
                onChange= {e=>setNewMember(e.value)}
            />
            <Button icon="pi pi-plus" />
        </div>
    )

    const cardHeader = () => {
        return <div className="p-d-flex p-d-column" style={{padding:'5px'}}>
            <Button className="p-button-rounded p-ml-5" icon="pi pi-arrow-left" tooltip="Вернуться на предыдущую страницу"
                onClick={()=>props.history.goBack()}></Button>
            <div className="p-card-title p-ml-5 p-my-2">Список групп</div>
        </div>
    }

    return(<Card header={cardHeader}>
        <div className="p-grid">
            <Toast ref={toasts} position = {"top-left"} life='5000'></Toast>
            <div className="p-col-2">
                <DataTable value={groups} selection={selectedGroup} selectionMode="single" 
                    onSelectionChange={e=>onGroupSelect(e.value)}
                    dataKey="id" responsiveLayout="scroll"
                    emptyMessage="Нет данных">
                    <Column field="name" header="Название групп"/>
                </DataTable>
            </div>
            <div className="p-col-3 p-pt-3">
                <div className="p-float-label">
                    <InputText id="groupName" value={groupName} maxLength={255} style={{width:'100%'}}
                        onChange={e=>onChangeGroupName(e.target.value)}></InputText>
                    <label htmlFor="groupName">Название группы</label>
                </div>
                <div className="p-float-label p-my-3">
                    <AutoComplete field="name" dropdown placeholder="Выберите курс" style={{width:'100%'}}
                    value={selectedCourse} suggestions={filteredCourses} completeMethod={(e)=>searchCourse(e)}
                    onSelect={(e)=>setSelectedCourse(e.value)}/>
                </div>
                <div className="p-float-label p-my-3">
                    <InputText id="groupSchedule" value={groupSchedule} maxLength={255} style={{width:'100%'}}
                        onChange={e=>onChangeSchedule(e.target.value)}></InputText>
                    <label htmlFor="groupSchedule">Расписание</label>
                </div>
                <div className="p-float-label p-my-3">
                    <InputNumber id="groupSortOrder" value={groupSortOrder} size={3} max={999}
                        onChange={(e)=>onChangeOrder(e.value)}> </InputNumber>
                    <label htmlFor="groupSortOrder">№</label>
                </div>
                <Button className="p-button-danger" icon="pi pi-times" label="Отменить"
                    tooltip="Отменить изменения в выбраной группе"
                    onClick={()=>clearGroupFields()}/>
                {isSaveButtonVisible() &&
                    <Button className="p-ml-5" icon="pi pi-check" label="Сохранить"
                        tooltip="Сохранить изменения"
                        onClick={()=>onClickSave()}/>}
            
            </div>
            <div className="p-col-4 p-pt-0 p-pl-3">
                {selectedGroup && 
                <DataTable value={groupUsers}  header = {userListTableHeader}
                    tooltip="Введите пользователя и нажмите +"
                    dataKey = "id" responsiveLayout="scroll" 
                    selectionMode="multi"
                    emptyMessage="Нет данных">
                        <Column columnKey="id" emptyMessage="Нет данных" field="username" header="Участники группы"/>
                </DataTable>}
            </div>
        </div>
    </Card>)
}