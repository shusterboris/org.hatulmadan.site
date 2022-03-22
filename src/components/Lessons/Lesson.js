import React, {useEffect, useState, useRef} from "react"
import { useLocation } from 'react-router-dom'
import { InputText } from "primereact/inputtext"
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { FileUpload } from 'primereact/fileupload';
import { ProgressSpinner } from 'primereact/progressspinner';
import {axinst, timeout} from '../../axInst'
import { ProxyLesson } from './ProxyLesson'
import axios from "axios"

export const Lesson = (props) => {
    const location = useLocation();
    const [id, setId] = useState()
    const [fldComment, setFldComment] = useState()
    const [fldGroup, setFldGroup] = useState()
    const [fldDateTime, setFldDateTime] = useState()
    const [flgLsnOrder, setFldLsnOrder] = useState()
    const [fldLsnUrl, setFldLsnUrl] = useState()
    const [groups, setGroups] = useState()
    const [pleaseWait, setPleaseWait] = useState(false)
    const [materials, setMaterials] = useState([])


    useEffect(()=>{
        fetchGroups()
    },[location])

    const fetchGroups = () => {
        axios.get('assets/data/groups.json')
        .then((response) => 
            setGroups(response.data)
        )
        .catch((err) => 
            console.dir(err)
        )
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

    const uploadHandler = (files) => {
        for (const file in files){
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                uploadMtrlFile(e.target.result);
            };
            fileReader.readAsDataURL(file);
        }
    }

    const saveLesson = () => {
        const proxy = new ProxyLesson(id, fldGroup, fldDateTime, fldComment, materials)
        axinst.put("/lesson/save", proxy)
        .then((response) => 
            {console.log(response.data)}
        )
        .catch(err=>console.dir(err))

    }

    const displayLesson = () => {
        return <div className="p-card">
            <div className="p-col-12">
                <div className="p-float-label p-my-3">
                    <Dropdown options={groups} optionLabel="name" id="fldGroup" style={{width:'40%'}}
                        value = {fldGroup}
                        onChange={(e)=>onGroupChoose(e.target.value)}/>
                    <label htmlFor="fldGroup"> Группа</label>
                </div>
                <div className="p-float-label">
                    <Calendar id="fldDate" showIcon mask="99/99/9999  99:99" showTime showSeconds={false} style={{width:'40%'}}
                        value={fldDateTime}  onChange={(e)=>setFldDateTime(e.target.value)} ></Calendar>
                    <label htmlFor="fldDate">Дата и время занятия</label>
                </div>
                <div className="p-float-label p-my-3">
                        <InputText id="fldComment" value={fldComment} maxLength={255} style={{ width: '100%' }}
                                    onChange = {(e)=>setFldComment(e.target.value)}/>
                    <label htmlFor="fldComment">Информация о занятии</label>
                </div>
                <div className="p-d-flex p-jc-around">
                    <Button label="Отменить" ></Button>
                    <Button label="Сохранить" onClick={saveLesson}></Button>
                </div>
            </div>
        </div>

    }

    const materialsCardHeader = () => {
        return <div className="p-d-flex p-jc-alive p-mr-5">
            <div className="p-card-title" style={{fontSize:'large', marginLeft:'5rem', marginTop:'1rem'}}>Материалы занятий</div>
            <FileUpload mode="basic" name="document"  style={{marginLeft:'5rem', marginTop:'1rem'}}
                accept="image/*" 
                onBeforeUpload={x=>this.showSpinner(x)}
                onClick= {()=>setPleaseWait(true)}
                customUpload={true} uploadHandler={uploadHandler}
                auto chooseLabel="Загрузить">
            </FileUpload>
            {pleaseWait && <ProgressSpinner/>}
        </div>
    }

    const displayMaterials = () => {
        return <div className="p-col-12">
        <Card header={materialsCardHeader}>

        </Card>
        </div>
    }

    return(<div className="p-card">
        <div className="p-grid">
            <div className="p-col-4"> {displayLesson()} </div>
            <div className="p-col-7"> {displayMaterials()} </div>
        </div>
    </div>)
}