import React, { useState, useRef, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Toast } from 'primereact/toast'
import { Card } from "primereact/card";
import { ListBox } from 'primereact/listbox'
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button'
import { axinst } from "../../axInst";
import { fetchGroups } from "../../service/CommonDataSrv";

export const Lessons = (props) => {
    let choosenMaterial = null;
    const [lessons, setLessons] = useState(null)
    const datasource = useRef(null);
    const [layout, setLayout] = useState('grid');
    const [loading, setLoading] = useState(true)
    const toasts = useRef()
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState()
    const [groups, setGroups] = useState()
    const [filteredGroups, setFilteredGroups] = useState()
    const rows = useRef(6)
    const isMounted = useRef(false)
    const moment = require('moment');


    useEffect (()=>{
        fetchGroups(setGroups)
    },[])

    useEffect(() => {
        if (isMounted.current) {
            setLoading(false);
        }
    }, [loading]);

    useEffect(()=>{
        if (!selectedGroup) {
            setLessons([])
            setLoading(false);
            return
        }
        axinst.get('lesson/getAll/'+selectedGroup.id)
        .then((response) => {
            datasource.current = response.data
            setLessons(datasource.current.slice(0, rows.current))
            setTotalRecords(response.data.size)
            setLoading(false)
        })
        .catch((err)=>{
            toasts.current.show({severity: 'error', summary: 'Error Message', detail: err.status})
        })
    }, [selectedGroup])

    const renderListItem = (lesson) => {
        return<div></div>
    }

    const downloadMaterial = (material, lesson) => {
        toasts.current.show({severity:'info', summary:material.fileLink + " " + lesson.comment})        
    } 

    const openLesson = (lesson) => {
        props.history.push({pathname: '/lesson', state: {id: lesson.id}})
        toasts.current.show({severity:'info', summary:lesson.comment})        
    }
    
    const renderGridItem = (lesson) => {
        const cardHeader = () =>{
            return(<div className="p-d-flex p-jc-between p-mr-5">
                <span className="p-card-title p-m-2" style={{'fontSize': '1.25em'}}>{moment(lesson.start).format("DD/MM/YY HH:mm")}</span>
                <i className="pi pi-cog p-m-2" style={{color:'var(--primary-color)'}} tooltip="Нажмите, чтобы изменить"
                    onClick={()=>openLesson(lesson)}></i>
            </div> 
        )}

        return <div className="p-col-12 p-md-4 p-sm-1">
            <Card header={cardHeader} id={lesson.number} key={lesson.number} className="p-shadow-2 p-my-2">
                <div className="p-grid">
                    <div className="p-col-6"><span style={{fontSize:'1rem', color:'#614200', fontStyle:'oblique'}}>Список материалов</span></div>
                    <div className="p-col-6"><span style={{fontSize:'1rem', color:'#614200', fontStyle:'oblique'}}>Описание</span></div>
                    <div className="p-col-6">
                        <ListBox value={choosenMaterial} options={lesson.materials} itemTemplate={materialItemTemplate}
                            onChange = {(e) => downloadMaterial(e.value, lesson)} 
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
        if (!input){
            setFilteredGroups(groups)
        }else{
            for(let i=0; i < groups.length; i++){
                let item = groups[i]
                if (item.name.toLowerCase().includes(input.toLowerCase())){
                    filteredItems.push(item)
                }
            }
            setFilteredGroups(filteredItems)
        }

    }

    const clearGroupSelection = () => {
        setSelectedGroup(null)
        setFilteredGroups(groups)
    }

    const cardsViewHeader = () =>{
        return <div className="p-d-flex p-jc-between">
            <Button className="p-button-rounded" icon="pi pi-plus" tooltip="Нажмите, чтобы добавить запись о занятии" tooltipOptions={{position: 'left'}}
                    onClick={()=>props.history.push({pathname: '/lesson', state: {id:1}})} />

            <div className="p-inputgroup" >
                <Button label="Материалы занятий для группы" disabled></Button>
                <AutoComplete field="name" dropdown forceSelection placeholder="Выберите название группы" style={{width:'30%'}}
                    value={selectedGroup} suggestions={filteredGroups} 
                    onSelect={(e)=>setSelectedGroup(e.value)}/>
                <Button className="p-button-danger" icon="pi pi-times" onClick={clearGroupSelection}></Button>
            </div>
        </div>
    }

    const onPage = (event) => {
        const startIndex = event.first;
        const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
        const newLessons = startIndex === endIndex ? datasource.slice(startIndex) : datasource.slice(startIndex, endIndex);

        setFirst(startIndex);
        setLessons(newLessons);
        setLoading(false);
    }

    const header = cardsViewHeader()
    return(
    <div>
        <div className="dataview-demo">
            <Toast ref={toasts} position = {"top-left"} life='10000'/>
            <div className="card">
                <DataView value={lessons} layout={layout} header={header}
                        itemTemplate={showItemTemplate} lazy paginator paginatorPosition={'both'} rows={rows.current}
                        totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} 
                        emptyMessage="Нет данных"/>
            </div>
        </div>
    </div>)
}