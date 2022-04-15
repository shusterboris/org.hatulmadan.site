import React, {useEffect, useState, useRef} from "react"
import { useLocation } from 'react-router-dom'
import { InputText } from "primereact/inputtext"
import { InputNumber } from 'primereact/inputnumber'
import { InputMask } from 'primereact/inputmask'
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { FileUpload } from 'primereact/fileupload'
import { DataTable } from 'primereact/datatable';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast'
import { axinst, timeout, processError } from '../../axInst'
import { fetchGroups } from "../../service/CommonDataSrv"
import { ProxyLesson } from './ProxyLesson'
import { Column } from "primereact/column"
import axios from "axios"


export const Lesson = (props) => {
    const location = useLocation();
    const moment = require('moment');
    const state = props.location.state;
    const startDateTime = state ? state.start : new Date();
    const [id, setId] = useState(state ? state.id : null)
    const [fldComment, setFldComment] = useState(state ? state.comment : '')
    const [fldGroup, setFldGroup] = useState(state ? state.group : null)
    const [fldDate, setFldDate] = useState(startDateTime ? moment(startDateTime).toDate() : (new Date()))
    const [fldTime, setFldTime] = useState(startDateTime ? moment(startDateTime).format("HH:mm") : null)
    const [fldLsnOrder, setFldLsnOrder] = useState(state ? props.location.state.sortOrder : 0)
    const [fldMtrlUrl, setFldMtrlUrl] = useState()
    const [fldMtrlFile, setFldMtrlFile] = useState()
    const fldMtrlStoredFile = useRef()
    const [fldMtrlComment, setFldMtrlComment] = useState()
    const [groups, setGroups] = useState()
    const [pleaseWait, setPleaseWait] = useState(false)
    const [materials, setMaterials] = useState([])
    const [addMtrlMode, setAddMtrlMode] = useState(false)
    const toast = useRef()
    const lessonDataChanged = useRef(false)
    let choosenFileName

    useEffect(()=>{
        fetchGroups(setGroups, toast)
        fetchMaterials()
    },[location])

    useEffect(()=>{
        fetchMaterials()
    },[addMtrlMode])

    const fetchMaterials = () => {
        if (!id){
            setMaterials(null)
        }
        axinst.get('lesson/materials/getByLessonId/' + id)
        .then((response) => {
            setMaterials(response.data)
        })
        .catch((err)=>
            console.log(err)
        )
    }

    const onGroupChoose = (value) => {
        setFldGroup(value)
    }

    const isLessonValid = () => {
        let result = true
        if (!( fldDate && fldTime)){
            toast.current.show({severity:'warn', summary:'Неполные данные', detail:"Все поля информации о занятии должны быть заполнены"})
            return false
        }else{
            if (!moment(fldDate).isValid()){
                toast.current.show({severity:'warn', summary:'Неправильные данные', detail:"Введенная дата - неправильная"})
                result = false
            }
            if (!moment(fldTime,"HH:mm").isValid()){
                toast.current.show({severity:'warn', summary:'Неправильные данные', detail:"Введенная дата - неправильная"})
                result = false
            }
        }
        return result
    }

    const saveLesson = async () => {
        if (!isLessonValid()) 
            { return }
        //convert entered date & time values and includes current timezone
        let lessonDateTime = moment(moment(fldDate).format("DD/MM/YYYY")+" "+fldTime,"DD/MM/YYYY HH:mm").utcOffset((new Date()).getTimezoneOffset(), false)
        const proxy = new ProxyLesson(id, fldGroup, lessonDateTime.toISOString(), fldComment, materials, fldLsnOrder)
        axinst.put("/lesson/save", proxy)
        .then((response) => {
            setId(response.data)
            toast.current.show({severity:"success", summary:'Готово', detail: "Успешно сохранено"})
            lessonDataChanged.current = false
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
                    <Calendar id="fldDate" showSeconds={false} style={{width:'40%'}} required
                        value={fldDate}  dateFormat="dd/mm/yy"
                        onChange={(e)=>{setFldDate(e.target.value); lessonDataChanged.current = true}} ></Calendar>
                    <label htmlFor="fldDate">Дата занятия</label>
                </div>
                <div className="p-float-label p-my-3">
                    <InputMask id="fldTime" mask="99:99" required
                        value={fldTime} onChange={e=>setFldTime(e.target.value)}></InputMask>
                    <label htmlFor="fldTime">Время занятия</label>
                </div>
                <div className="p-float-label p-my-3">
                        <InputText id="fldComment" value={fldComment} maxLength={255} style={{ width: '100%' }}
                                    onChange = {(e)=>{setFldComment(e.target.value); lessonDataChanged.current = true}}/>
                        <label htmlFor="fldComment">Информация о занятии</label>
                </div>
                <div className="p-float-label p-my-3">
                        <InputNumber id="flgLsnOrder"  value={fldLsnOrder} size={3}  
                                    onChange = {(e)=>{setFldLsnOrder(e.value); lessonDataChanged.current = true}}/>
                        <label htmlFor="fldLsnOrder">№ пп</label>
                </div>
                <div className="p-d-flex p-jc-around">
                    <Button label="Выйти" onClick={props.history.goBack}></Button>
                    {(lessonDataChanged.current && fldDate && fldTime) && 
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
            <Button icon="pi pi-plus" className="p-button-rounded p-button-warning p-ml-5" 
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
        const mtrl = {"comment":fldMtrlComment, "lesson":id, "youtubeLink": fldMtrlUrl, "fileLink":fldMtrlFile, "srvFileLink":fldMtrlStoredFile.current}
        axinst.post('lesson/materials/save/'+id, mtrl)
        .then(response=>{
            toast.current.show({severity:'success', summary:'Готово!', detail: "Новый материал добавлен в список!"})
            setMaterials(response.data)
        })
        .catch(err=>{
            const errMsg = processError(err)
            toast.current.show({severity:'error', summary:'Ошибка записи!', detail: errMsg})
        })
        .finally(
            setPleaseWait(false)
        )
    }

    const uploadMtrlFile = (file) => {
        const longTimeout =  timeout * 5
        axinst.post('file/save', {"fileName":choosenFileName, "blob": file.result}, {timeout: longTimeout})
            .then(res => {
                    if (!res.data.startsWith("Ошибка")){
                        fldMtrlStoredFile.current = res.data
                        toast.current.show({severity:'success',summary:'Отлично!', detail:"Файл отправлен на сервер. Заполните остальные данные по материалу и сохраните их"})
                    }else{
                        toast.current.show({severity:'error',summary:'Ошибка', detail:res.data})
                    }
            })
            .catch(err=>{
                const errMsg = processError(err)
                toast.current.show({severity:'error',summary:'Ошибка', detail:errMsg})
            })
            .finally(setPleaseWait(false))            
    }

    const uploadHandler = (files) => {
            setPleaseWait(true)
            const file = files.files.shift();
            const fileReader = new FileReader();
            choosenFileName =  file.name
            setFldMtrlFile(choosenFileName)
            fileReader.onload = (e) => {
                uploadMtrlFile(e.target);
            };
            fileReader.onloadstart = () => {setPleaseWait(true)}
            fileReader.readAsDataURL(file);
    }

    const displayAddMaterialForm = () =>{
        return(<Card>
            <div className="p-grid">
                <div className="p-col-4">
                    <div className="p-inputgroup">
                        <InputText id="fldMtrlFile" value={fldMtrlFile} placeholder="Файл" style={{width:'100px'}} />
                        <FileUpload mode="basic" name="document"  style={{width:'5rem', marginLeft:'1rem', marginTop:'0.5rem'}}
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
                            onChange={e=>setFldMtrlComment(e.target.value)}></InputText>
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
        if (!id) return null;
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

    if (!state){
        props.history.push({path:"/error"})
        return
    }
    return(<div className="p-card" style={{width:'99%'}}>
        <Toast ref = {toast} position = "top-left"></Toast>
        <div className="p-grid">
            <div className="p-col-4"> {displayLesson()} </div>
            <div className="p-col-7"> {displayMaterials()} </div>
            <div className="p-col-12">
                {pleaseWait && <ProgressBar mode="indeterminate" style={{ height: '6px' }} />}
            </div>
        </div>
    </div>)
}