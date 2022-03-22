import React, { useState, useRef, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Toast } from 'primereact/toast'
import axios from 'axios'
import { Card } from "primereact/card";
import {ListBox} from 'primereact/listbox'
import {Button} from 'primereact/button'

export const Lessons = (props) => {
    let choosenMaterial = null;
    const [lessons, setLessons] = useState(null)
    const datasource = useRef(null);
    const [layout, setLayout] = useState('grid');
    const [loading, setLoading] = useState(true)
    const toasts = useRef()
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = useRef(6)
    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current) {
                setLoading(false);
        }
    }, [loading]);

    useEffect(()=>{
        axios.get('assets/data/lessons.json')
        .then((response) => {
            datasource.current = response.data
            setLessons(datasource.current.slice(0, rows.current))
            setTotalRecords(response.data.size)
            setLoading(false)
        })
        .catch((err)=>{
            toasts.current.show({severity: 'error', summary: 'Error Message', detail: err.status})
        })
    }, [])

    const renderListItem = (lesson) => {
        return<div></div>
    }

    const downloadMaterial = (material, lesson) => {
        toasts.current.show({severity:'info', summary:material.fileLink + " " + lesson.comment})        
    } 

    const openLesson = (lesson) => {
        //this.props.history.push({pathname: '/employee-edit', state: {id: rowData.id, orgUnitList: orgUnitList}});
        props.history.push({pathname: '/lesson', state: {id: lesson.id}})
        toasts.current.show({severity:'info', summary:lesson.comment})        
    }
    
    const renderGridItem = (lesson) => {
        const cardHeader = () =>{
            return(<div className="p-d-flex p-jc-between p-mr-5">
                <span className="p-card-title p-m-2" style={{'fontSize': '1.25em'}}>{lesson.start}</span>
                <i className="pi pi-cog p-m-2" style={{color:'var(--primary-color)'}} tooltip="Нажмите, чтобы изменить"
                    onClick={()=>openLesson(lesson)}></i>
            </div> 
        )}

        return <div className="p-col-12 p-md-4 p-sm-1">
            <Card header={cardHeader} subTitle={lesson.group} id={lesson.number} key={lesson.number} className="p-shadow-2 p-my-2">
                <div className="p-grid">
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

    const cardsViewHeader = () =>{
        return <div className="p-d-flex p-jc-between">
            <span className="">Материалы занятий</span>
            <Button className="p-button-rounded" icon="pi pi-plus" tooltip="Нажмите, чтобы добавить запись о занятии" tooltipOptions={{position: 'left'}}
                    onClick={()=>props.history.push({pathname: '/lesson', state: {id:1}})}
            />
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
                        totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} />
            </div>
        </div>
    </div>)
}