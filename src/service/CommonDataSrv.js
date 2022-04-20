import { Redirect } from "react-router-dom";
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

export const fetchGroupsOfUser = (user) => {
    if (!user){
        return []
    }  
}

export const fetchUsersOfGroup = (group, setter, toast) => {
    if (!group){
        return null;
    }
    const groupId = group.id
    axinst.get('dictionary/group/getById/' + groupId)
    .then((response) => 
        setter(response.data.users)
    )
    .catch((err) => {
        if (toast){
            const errMsg = processError(err)
            toast.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        }
    })
}
//  *******************  END OF GROUPS SERVICE **********************************
//  **********************************************************************
//  *******************  USER SERVICE **********************************

export const fetchActiveUsers = (ref, toasts) => {
    axinst.get('/users/getActive')
    .then((response)=>{
        ref.current = response.data
    })
    .catch(err=>{
        if (toasts){
            const errMsg = processError(err)
            toasts.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        }
    })
}


// *************************** COURSES    *******************************
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
//  *******************  QUIZ SERVICE **********************************
export const saveSurvey = (course, updateData, toasts) => {
    axinst.post('survey/surveysave', course)
    .then(() => {
        updateData()
        toasts.current.show({severity:'success', summary:'Успешно!', detail:'Информация сохранена'})
    })
    .catch((err) => {
        if (toasts){
            const errMsg = processError(err)
            toasts.current.show({severity:"error", summary:"Ошибка", detail: errMsg})
        }
    })

} 
