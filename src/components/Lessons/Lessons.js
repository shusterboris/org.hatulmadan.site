import React, { useState, useRef, useEffect } from "react";
import { DataView } from 'primereact/dataview';
import { Toast } from 'primereact/toast'
import { Card } from "primereact/card";
import { ListBox } from 'primereact/listbox'
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button'
import { apiUrl, axinst } from "../../axInst";
import { fetchGroups } from "../../service/CommonDataSrv";
import { InputText } from "primereact/inputtext";
import User from "../../wrapers/User";

export const Lessons = (props) => {
    let choosenMaterial = null;
    const [lessons, setLessons] = useState(null)
    const datasource = useRef(null);
    const [layout ] = useState('grid');
    const [loading, setLoading] = useState(true)
    const toasts = useRef()
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState(sessionStorage.getItem("choosenGroup") ? JSON.parse(sessionStorage.getItem("choosenGroup")) : null)
    const [groups, setGroups] = useState()
    const [filteredGroups, setFilteredGroups] = useState()
    const [user] = useState(User.load())
    const rows = useRef(6)
    const isMounted = useRef(false)
    const moment = require('moment');

    useEffect (()=>{
        if (user.hasAuthorities('super')){
            fetchGroups(setGroups)
        }else{
            setGroups(user.groups)
            if (user.groups && user.groups.length === 1){
                const usersGroup = user.groups[0];
                setSelectedGroup(usersGroup)
            }
        }
    },[])

    useEffect(() => {
        if (isMounted.current) {
            setLoading(false);
        }
    }, [loading]);

    useEffect(()=>{
        let url
        if (!user.hasAuthorities("super") || selectedGroup){
            url = 'lesson/getByGroupId'+(selectedGroup ? ("/"+selectedGroup.id) : "")
        }else {
            url = 'lesson/getAll'
        }
        axinst.get(url)
        .then((response) => {
            datasource.current = response.data
            setLessons(datasource.current.slice(0, rows.current))
            setTotalRecords(response.data.length)
            sessionStorage.setItem("choosenGroup", JSON.stringify(selectedGroup))
            setLoading(false)
        })
        .catch((err)=>{
            toasts.current.show({severity: 'error', summary: 'Error Message', detail: err.status})
        })
    }, [selectedGroup])

    const renderListItem = (lesson) => {
        return<div></div>
    }

    const showVideo = (material) => {
        props.history.push({pathname: '/videoviewer', state: {...material}})
    }

    const downloadFile = (material) => {
        if (!material.srvFileLink){
            toasts.current.show({severity:'error', summary:'Невозможно открыть!', detail:'Нет данных о файле'})
            return
        }
        let errMsg = "";
        const url = apiUrl + "lesson/materials/getAttFile/" + material.srvFileLink
        return axinst.get(url, {
            responseType: 'arraybuffer',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response=>{
            const type = response.headers['content-type'];
            const blob = new Blob([response.data], { type: type, encoding: 'UTF-8' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = material.fileLink;
            link.click()
          })
          .catch(err=>{
            if (err.response){
                let status = err.response.status
                if (status === 404){
                    errMsg = "Запрошенный файл отсутствует в хранилище!"
                }else if (status === 204){
                    errMsg = "Ошибка чтения запрошенного файла, возможно, он заблокирован или поврежден.!"
                }else{
                    errMsg = "Непредусмотренная ошибка при попытке получить файл!";
                }
            }else{
                errMsg = "Сервер не отвечает или проблемы с Интернетом"
            }
            toasts.current.show({severity:'error', summary: "Невозможно", detail: errMsg});
        });            
    }

    const getMaterial = (material) => {
        if (!material.youtubeLink){
            //если этот материал содержит вложенный файл, а не ссылку
            downloadFile(material)
        }else{
            showVideo(material)
        }
    } 

    const openLesson = (lesson) => {
        props.history.push({pathname: '/lesson', state: {...lesson}})      
    }
    
    const renderGridItem = (lesson) => {
        const cardHeader = () =>{
            return(<div className="p-d-flex p-jc-between p-mr-5">
                <span className="p-card-title p-m-2" style={{'fontSize': '1.25em'}}>
                    {moment(lesson.start).format("DD/MM/YY HH:mm") + ", " + (lesson.group ? lesson.group.name : "Общедоступный")}
                </span>
                {user.hasAuthorities('super') && 
                    <i className="pi pi-cog p-m-2" style={{color:'var(--primary-color)'}} tooltip="Нажмите, чтобы изменить"
                    onClick={()=>openLesson(lesson)}></i>}
            </div> 
        )}

        return <div className="p-col-12 p-md-4 p-sm-1">
            <Card header={cardHeader} id={lesson.number} key={lesson.number} className="p-shadow-2 p-my-2">
                <div className="p-grid">
                    <div className="p-col-6"><span style={{fontSize:'1rem', color:'#614200', fontStyle:'oblique'}}>Список материалов</span></div>
                    <div className="p-col-6"><span style={{fontSize:'1rem', color:'#614200', fontStyle:'oblique'}}>Описание</span></div>
                    <div className="p-col-6">
                        <ListBox value={choosenMaterial} options={lesson.materials} 
                            itemTemplate={materialItemTemplate}
                            onChange = {(e) => getMaterial(e.value, lesson)} 
                            listStyle={{maxHeight:'250px', minHeight:'250px'}}></ListBox>
                    </div>
                    <div className="p-col-6">{lesson.comment}</div>
                </div>
            </Card>
        </div>
    }

    const showItemTemplate = (lesson, layout) => {
        if (!lesson) {
            return;
        }

        if (layout === 'list')
            return renderListItem(lesson);
        else if (layout === 'grid')
            return renderGridItem(lesson);
    }

    const materialItemTemplate = (material) =>{
        return <div style={{borderBottom: '1px solid gray'}}>
            {material.comment ? material.comment : (material.youtubeLink ? material.youtubeLink : material.fileLink)}
        </div>
    }

    const searchGroup = (event) =>{
        const filteredItems = []
        const input = event.query
        if (input){
            for(let i=0; i < groups.length; i++){
                let item = groups[i]
                if (item.name.toLowerCase().includes(input.toLowerCase())){
                    filteredItems.push(item)
                }
            }
        }else{
            Array.prototype.push.apply(filteredItems,groups)
        }
        setFilteredGroups(filteredItems)
    }

    const clearGroupSelection = () => {
        setSelectedGroup(null)
        setFilteredGroups(groups)
    }

    const isCompact = () => {
        return window.innerWidth >= 1024
    }

    const cardsViewHeader = () =>{
        return    <div className="p-d-flex p-jc-between p-m-0 p-p-0">           
            {user.hasAuthorities('super') && 
                <Button className="p-button-rounded p-mr-3" icon="pi pi-plus" tooltip="Нажмите, чтобы добавить запись о занятии" tooltipOptions={{position: 'left'}}
                    onClick={()=>props.history.push({pathname: '/lesson', state: {id:null}})} />}
            <div className="p-inputgroup" >
                {isCompact() && <div>                    
                    <span className="p-col-fixed p-card-title" style={{width:'10rem'}}> Материалы</span>
                </div>}
                <AutoComplete field="name" dropdown placeholder="Выберите название группы" 
                    disabled = {!user.hasAuthorities('super') && groups && groups.length === 1}
                    value={selectedGroup} suggestions={filteredGroups} completeMethod={(e)=>searchGroup(e)}
                    onSelect={(e)=>setSelectedGroup(e.value)}/>
                <Button className="p-button-danger" icon="pi pi-times" onClick={clearGroupSelection}></Button>
                <span style={{width:'2rem'}}></span>
                <InputText tooltip="Введите строку для поиска"/>
                <Button  icon="pi pi-search"></Button>
            </div>
        </div>
       
    }

    const onPage = (event) => {
        const startIndex = event.first;
        const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
        const newLessons = startIndex === endIndex ? datasource.current.slice(startIndex) : datasource.current.slice(startIndex, endIndex);

        setFirst(startIndex);
        setLessons(newLessons);
        setLoading(false);
    }

    const header = cardsViewHeader()
    return(<div className="p-m-0">
            
            <div className="p-col-12">            
                <Toast ref={toasts} position = {"top-left"} life='10000'/> 
                 <div className="dataview-demo">                                 
                    <DataView value={lessons} layout={layout} header = {header}
                            itemTemplate={showItemTemplate} lazy paginator paginatorPosition={'top'} 
                            rows={rows.current}
                            totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} 
                            emptyMessage="Нет данных"/>   
                </div>
            </div>
   </div>
  )
}