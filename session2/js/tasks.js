const addForm = document.querySelector("#addForm")
const tableHeads = [
    {el: "id", viewEl: "ID", hasDeafult:true, default: Date.now()},
    {el: "status", viewEl: "Is Finished", hasDeafult:true, default:false},
    {el: "title", viewEl: "Title", hasDeafult:false},
    {el: "content", viewEl: "Content", hasDeafult:false},
    {el: "dueDate", viewEl: "Deadline", hasDeafult:false},
    {el: "age", viewEl: "Age", hasDeafult:false},
    {el: null, viewEl: "Actions",hasDeafult:false}
]
const readFromStorage = () => {
    let data
    try{
        data = JSON.parse(localStorage.getItem("tasks")) || []
        if(!Array.isArray(data)) throw new Error("no data")
    }
    catch(e){
        data = []
    }
    return data
}
const writeToStorage = (data) => localStorage.setItem("tasks", JSON.stringify(data))
// if(addForm){
//     addForm.addEventListener("submit", function(e){
//         e.preventDefault()
//         task = {
//             title : this.elements.title.value,
//             content : this.elements.content.value,
//             dueDate : this.elements.dueDate.value,
//             status:false,
//             id: Date.now()
//         }
//         const allTasks = readFromStorage()
//         allTasks.push(task)
//         writeToStorage(allTasks)
//         this.reset()
//         window.location.href="index.html"
//     })
    
// }
const createMyOwnElements = (parent, element, classes, txt, attributes=[]) =>{
    let myEle = document.createElement(element)
    if(classes) myEle.classList=classes
    parent.appendChild(myEle)
    myEle.innerText = txt
    attributes.forEach(attr => myEle[attr.attrName]= attr.attrVal)
    return myEle
}
const dataWrap = document.querySelector("#dataWrap")
const showData = () => {
    const data = readFromStorage()
    const thead = createMyOwnElements(dataWrap, "thead", null, null)
    const tr = createMyOwnElements(thead, "tr", null, null)
    tableHeads.forEach( h => createMyOwnElements(tr, "th", null, h.viewEl))
    const tbody = createMyOwnElements(dataWrap, "tbody", null, null)
    
    data.forEach(task=>{
        const tr = createMyOwnElements(tbody, "tr", null, null)
        tableHeads.forEach( h => {
            if(h.el) createMyOwnElements(tr, "td", null, task[h.el])
        })
    })
}
if(dataWrap) showData()
if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        let task = {}
        tableHeads.forEach(head=>{
            if(head.hasDeafult && head.el) task[head.el] = head.default
            else if(head.el) task[head.el] = addForm.elements[head.el].value
        })
        console.log(task)
        const allTasks = readFromStorage()
        allTasks.push(task)
        writeToStorage(allTasks)
        this.reset()
        window.location.href="index.html"
    })
    
}
