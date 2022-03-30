import { axinst, processError } from "../axInst";

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