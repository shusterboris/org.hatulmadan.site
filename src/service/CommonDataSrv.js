import { axinst, processError } from "../axInst";


//  *******************  GROUPS SERVICE **********************************
export const fetchGroups = (setter, toast) => {
    axinst.get('dictionary/group/getAll')
    .then((response) => 
        setter(response.data)
    )
    .catch((err) => {
        if (toast){
            const errMsg = processError(err)
            toast.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        }
    })
} 

export const fetchGroupsOfUser = (user) => {
    if (!user){
        return []
    }  
}

export const saveGroup = (group, updateData, toasts) => {
    axinst.put('dictionary/group/save', group)
    .then(() => {
        updateData()
        toasts.current.show({severity:'success', summary:'Успешно!', detail:'Информация о группе сохранена'})
    })
    .catch((err) => {
        if (toasts){
            const errMsg = processError(err)
            toasts.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        }
    })
}

//  **********************************************************************
//  *******************  GROUPS SERVICE **********************************

export const fetchCourses = (setter, toasts) => {
    axinst.get('dictionary/course/getActive')
    .then((response) => 
        setter(response.data)
    )
    .catch((err) => {
        if (toasts){
            const errMsg = processError(err)
            toasts.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        }
    })
}

export const saveCourse = (course, updateData, toasts) => {
    axinst.put('dictionary/course/save', course)
    .then(() => {
        updateData()
        toasts.current.show({severity:'success', summary:'Успешно!', detail:'Информация о курсе сохранена'})
    })
    .catch((err) => {
        if (toasts){
            const errMsg = processError(err)
            toasts.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        }
    })
}
