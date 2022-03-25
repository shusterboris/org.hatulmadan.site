import React, {useEffect, useState, useRef} from "react"
import { useLocation } from 'react-router-dom'
import { InputText } from "primereact/inputtext"
import { InputNumber } from 'primereact/inputnumber'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { FileUpload } from 'primereact/fileupload'
import { DataTable } from 'primereact/datatable';
import { ProgressSpinner } from 'primereact/progressspinner'
import { Toast } from 'primereact/toast'
import {axinst, timeout, processError} from '../../axInst'
import { ProxyLesson } from './ProxyLesson'
import axios from "axios"
import { Column } from "primereact/column"


export const Lesson = (props) => {
    const location = useLocation();
    const [id, setId] = useState(1)
    const [fldComment, setFldComment] = useState()
    const [fldGroup, setFldGroup] = useState()
    const [fldDateTime, setFldDateTime] = useState()
    const [fldLsnOrder, setFldLsnOrder] = useState(0)
    const [fldMtrlUrl, setFldMtrlUrl] = useState()
    const [fldMtrlFile, setFldMtrlFile] = useState()
    const [fldMtrlComment, setFldMtrlComment] = useState()
    const [groups, setGroups] = useState()
    const [pleaseWait, setPleaseWait] = useState(false)
    const [materials, setMaterials] = useState([])
    const [addMtrlMode, setAddMtrlMode] = useState(false)
    const toast = useRef()
    const lessonDataChanged = useRef(false)

    useEffect(()=>{
        fetchGroups()
        fetchMaterials()
    },[location])

    useEffect(()=>{
        fetchMaterials()
    },addMtrlMode)

    const fetchMaterials = () => {
        axios.get('assets/data/lessons.json')
        .then((response) => {
            setMaterials(response.data[0].materials)
        })
        .catch((err)=>
            console.log(err)
        )
    }

    const fetchGroups = () => {
        axinst.get('dictionary/group/getAll')
        .then((response) => 
            setGroups(response.data)
        )
        .catch((err) => {
            const errMsg = processError(err)
            toast.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        })
    }

    const onGroupChoose = (value) => {
        setFldGroup(value)
    }

    const uploadMtrlFile = (file) => {
        const config = {headers: { 'Content-Type': 'image/png', timeout:  timeout}}
        axinst.post('/files/materials/save', file, config)
            .then(res => {
                    if (!res.data.startsWith("Ошибка")){
                    }else{
                    }
            })
            .finally(setPleaseWait(false))            
    }       


    const saveLesson = async () => {
        const proxy = new ProxyLesson(id, fldGroup, fldDateTime, fldComment, materials, fldLsnOrder)
        axinst.put("/lesson/save", proxy)
        .then((response) => {
            setId(response.data)
            toast.current.show({severity:"success", summary:'Готово', detail: "Успешно сохранено"})
            lessonDataChanged.current = false
            props.history.goBack()
        })
        .catch(err=>{
            const errMsg = processError(err)
            toast.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        })
    }


    const displayLesson = () => {
        return <div className="p-card">
            <div className="p-col-12">
                <div className="p-float-label p-my-3">
                    <Dropdown options={groups} optionLabel="name" id="fldGroup" style={{width:'40%'}}
                        value = {fldGroup}
                        onChange={(e)=>{onGroupChoose(e.target.value); lessonDataChanged.current = true}}/>
                    <label htmlFor="fldGroup"> Группа</label>
                </div>
                <div className="p-float-label">
                    <Calendar id="fldDate" showIcon mask="99/99/9999  99:99" showTime showSeconds={false} style={{width:'40%'}}
                        value={fldDateTime}  
                        onChange={(e)=>{setFldDateTime(e.target.value); lessonDataChanged.current = true}} ></Calendar>
                    <label htmlFor="fldDate">Дата и время занятия</label>
                </div>
                <div className="p-float-label p-my-3">
                        <InputText id="fldComment" value={fldComment} maxLength={255} style={{ width: '100%' }}
                                    onChange = {(e)=>{setFldComment(e.target.value); lessonDataChanged.current = true}}/>
                        <label htmlFor="fldComment">Информация о занятии</label>
                </div>
                <div className="p-float-label p-my-3">
                        <InputNumber id="flgLsnOrder"  value={fldLsnOrder} size={3}  
                                    onChange = {(e)=>{setFldLsnOrder(e.target.value); lessonDataChanged.current = true}}/>
                        <label htmlFor="fldComment">№ пп</label>
                </div>
                <div className="p-d-flex p-jc-around">
                    <Button label="Выйти" onClick={props.history.goBack}></Button>
                    {(lessonDataChanged.current && fldGroup && fldDateTime) && 
                        <Button label="Сохранить" onClick={saveLesson}></Button>}
                </div>
            </div>
        </div>
    }

    //********************************   material components    *******************/

    const mtrlBodyTemplate = (rowData) => {
        if (rowData.youtubeLink){
            return <a href={rowData.youtubeLink} target="_blank" rel="noreferrer noopener">
                {rowData.comment ? rowData : rowData.youtubeLink}
            </a>
        } else{
            return rowData.comment ? rowData.comment : rowData.fileLink
        }
    }

    const mtrlActionDelTemplate = (rowData) => {
        return(
            <Button type="button" icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text"
                tooltip="Удалить этот материал"
                onClick={()=>this.onRemoveMtrlRow(rowData)}>
            </Button>
        )
    }

    const mtrlTableHeaderTemplate = () => {
        return(<div className="p-d-flex ">
            {id && 
            <Button icon="pi pi-plus" className="p-button-rounded p-button-info p-ml-5" 
                onClick={()=>setAddMtrlMode(true)}></Button>
            }
            <span style={{margin:'1rem 0 0 1rem'}}>Материалы занятия</span> 
        </div>)
    }

    const onRemoveMtrlRow = (rowData) => {

    }

    const onMtrlRowClick = (rowData) =>{
        if (rowData.youtubeLink){
            return
        }
    }

    const dismissAddMtrl= () => {
        setFldMtrlComment(null)
        setFldMtrlFile(null)
        setFldMtrlUrl()
        setAddMtrlMode(false)
    }

    const saveNewMaterial = async  () => {
        setPleaseWait(true)
        if (lessonDataChanged.current){
            await saveLesson()
        }

    }

    const uploadHandler = (files) => {
        for (const file in files){
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                uploadMtrlFile(e.target.result);
            };
            fileReader.readAsDataURL(file);
        }
    }

    const displayAddMaterialForm = () =>{
        return(<Card>
            <div className="p-grid">
                <div className="p-col-4">
                    <div className="p-inputgroup">
                        <InputText id="fldMtrlFile" value={fldMtrlFile} placeholder="Файл" style={{width:'100px'}} />
                        <FileUpload mode="basic" name="document"  style={{width:'5rem', marginLeft:'1rem', marginTop:'0.5rem'}}
                            accept="image/*" 
                            onBeforeUpload={()=>setPleaseWait(true)}
                            onClick= {()=>setPleaseWait(true)}
                            customUpload={true} uploadHandler={uploadHandler}
                            auto chooseLabel=" ">
                        </FileUpload>
                    </div>
                </div>
                <div className="p-col-8">
                    <div className = "p-float-label" >
                        <InputText id="fldMtrlUrl" value={fldMtrlUrl} style={{width:'100%'}}
                            onChange={(e)=>setFldMtrlUrl(e.target.value)}></InputText>
                        <label htmlFor="fldMtrlUrl">Ссылка на ресурс</label>
                    </div>
                </div>
                <div className="p-col-12">
                    <div className="p-float-label">
                        <InputText id="fldMtrlComment" value={fldMtrlComment} style={{width:'100%'}}
                            onChange={setFldMtrlComment}></InputText>
                        <label htmlFor="fldMtrlComment">Описание материалов (файла)</label>
                    </div>
                </div>
                <div className="p-col-12 p-d-flex p-d-column p-jc-around">
                    <Button className="p-button-warning" label="Отменить" onClick={()=>dismissAddMtrl()}></Button>
                    {(fldMtrlFile || fldMtrlUrl) && 
                        <Button className="p-button-info" label="Добавить" onClick={saveNewMaterial}></Button>}
                </div>
            </div>
        </Card>            
    )}

    const displayMaterials = () => {
        return <div>
            <div className="p-col-12">
                {(!addMtrlMode) ? 
                    <DataTable value={materials} 
                        scrollable scrollHeight='800px' showGridlines
                        onRowClick={e=>onMtrlRowClick(e.data)}
                        emptyMessage="Нет записей">
                            <Column field={mtrlBodyTemplate} header={mtrlTableHeaderTemplate()}
                                bodyStyle={{marginLeft: '1rem'}} headerStyle={{textAlign: 'center'}}
                                />
                            <Column field={mtrlActionDelTemplate} 
                                bodyStyle={{padding: '0 0 2px 0'}} headerStyle={{width:'4rem'}}></Column>
                    </DataTable> :
                    displayAddMaterialForm()
                }
            </div>
        </div>
    }
    /*  ***********************  end of materials block    ********************** */

    return(<div className="p-card">
        <Toast ref = {toast} position = "top-left"></Toast>
        <div className="p-grid">
            <div className="p-col-4"> {displayLesson()} </div>
            <div className="p-col-7"> {displayMaterials()} </div>
        </div>
    </div>)
}