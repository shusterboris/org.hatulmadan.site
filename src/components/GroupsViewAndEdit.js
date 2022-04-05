import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react"
import { fetchGroups } from "../service/CommonDataSrv";

export const GroupsViewAndEdit = () =>{
    const [groups, setGroups] = useState()
    const [selectedGroup, setSelectedGroup] = useState()
    const [groupName, setGroupName] = useState()
    const toasts = useRef()

    useEffect(()=>{
        fetchGroups(setGroups, toasts)
    },[])

    const onGroupSelect = (value) => {
        setSelectedGroup(value)
    }

    return(<div className="card p-grid">
        <Toast ref={toasts} position = {"top-left"} life='5000'></Toast>
        <div className="p-col-2">
            <DataTable value={groups} selection={selectedGroup} selectionMode="single" 
                onSelectionChange={e=>onGroupSelect(e.value)}
                dataKey="id" responsiveLayout="scroll">
                <Column field="name" />
            </DataTable>
        </div>
        <div className="p-col-10 p-md-2">
            форма
        </div>
    </div>)
}