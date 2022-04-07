import React, {useState, useRef, useEffect} from "react";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
import { fetchCourses, saveCourse } from "../service/CommonDataSrv";

export const CourseList = (props) =>{
    const toasts = useRef()
    const [courses, setCourses] = useState()
    const [selectedCourse, setSelectedCourse] = useState()
    const [courseId, setCourseId] = useState()
    const [courseName, setCourseName] = useState()
    const [courseSortOrder, setCourseSortOrder] = useState(1)
    const isEdited = useRef(false)

    useEffect(()=>{
        updateCourseList(setCourses, toasts)
    }, [])


    const clearCourse = () => {
        setCourseName('')
        setCourseSortOrder(1)
        setCourseId(null)
        setSelectedCourse(null)
    }

    const onCourseSelect = (value) => {
        setCourseName(value.name)
        setCourseSortOrder(value.sortOrder)
        isEdited.current = false
        setSelectedCourse(value)
    }

    const updateCourseList = () => {
        fetchCourses(setCourses, toasts)
    }

    const onClickSave = () => {
        const course = {'id': courseId, 'name': courseName, 'sortOrder': courseSortOrder}
        saveCourse(course, updateCourseList, toasts)
        clearCourse()        
        isEdited.current = false
    }

    const onChangeCourseName = (value) => {
        setCourseName(value)
        isEdited.current = true
    }

    const onChangeOrder = (value) => {
        setCourseSortOrder(value)
        isEdited.current = true
    }

    const isSaveButtonVisible = () => {
        if (!courseName || !courseSortOrder){
            return false
        }else if (courseName && courseSortOrder && !isEdited.current){
            return false
        }
        return true
    }

    const cardHeader = () => {
        return <div className="p-d-flex p-d-column" style={{padding:'5px'}}>
            <Button className="p-button-rounded p-ml-5" icon="pi pi-arrow-left" tooltip="Вернуться на предыдущую страницу"
                onClick={()=>props.history.goBack()}></Button>
            <div className="p-card-title p-ml-5 p-my-2">Список курсов</div>
        </div>
    }

    return <Card header={cardHeader}>
        <div className="p-grid">
            <Toast ref={toasts} position = {"top-left"} life='5000'></Toast>
            <div className="p-col-2">
                <DataTable value={courses} selection={selectedCourse} selectionMode="single" scrollable
                    scrollHeight={(document.documentElement.scrollHeight * 0.65)+'px'}
                    onSelectionChange={e=>onCourseSelect(e.value)}
                    dataKey="id" responsiveLayout="scroll"
                    emptyMessage="Нет данных">
                    <Column field="name" header="Название курса"/>
                </DataTable>
            </div>
            <div className="p-col-10">
                <div className="p-float-label">
                    <InputText id="courseName" value={courseName} maxLength={255} style={{width:'80%'}}
                        onChange={e=>onChangeCourseName(e.target.value)}></InputText>
                    <label htmlFor="courseName">Название курса</label>
                </div>
                <div className="p-float-label p-my-3">
                    <InputNumber id="courseSortOrder" value={courseSortOrder} size={3} max={999}
                        onChange={(e)=>onChangeOrder(e.value)}> </InputNumber>
                    <label htmlFor="courseSortOrder">№</label>
                </div>
                <Button className="p-button-danger" icon="pi pi-times" label="Отменить"
                    tooltip="Отменить изменения в выбраном курсе"
                    onClick={()=>clearCourse()}/>
                {isSaveButtonVisible() &&
                    <Button className="p-ml-5" icon="pi pi-check" label="Сохранить"
                        tooltip="Сохранить изменения"
                        onClick={()=>onClickSave()}/>}
            </div>
        </div>
    </Card>
}