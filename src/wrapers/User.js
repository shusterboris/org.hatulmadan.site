export default class User{
    constructor(data){
        if (!data)
            data = {username:'', isEnabled: false, authorities:[], groups:[]}
        this.username = data.username;
        this.isEnabled = data.isEnabled;
        this.authorities = data.authorities ? data.authorities : [];
        this.groups = data.groups ? data.groups : [];
    }

    hasAuthorities(authName){
        return this.authorities.some(auth=>auth.name === authName)
    }

    inGroup(groupName){
        return this.groups.some(group=>group.name === groupName)
    }
    
    store(){
        sessionStorage.setItem("user", JSON.stringify(this))
    }

    static load(){
        const data = JSON.parse(sessionStorage.getItem("user"))
        return new User(data)
    }

    isExists(){
        return this.username !== ''
    }
}