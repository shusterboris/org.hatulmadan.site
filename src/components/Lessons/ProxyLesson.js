export class ProxyLesson{
    constructor (id, group, datetime, comment, materials, sortOrder = 1000){
        this.id = id
        this.group = group
        this.datetime = datetime
        this.comment = comment
        this.materials = materials
        this.sortOrder = sortOrder
    }
}