const addForm = document.querySelector("#addForm")
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
if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        task = {
            title : this.elements.title.value,
            content : this.elements.content.value,
            dueDate : this.elements.dueDate.value,
            status:false,
            id: Date.now()
        }
        const allTasks = readFromStorage()
        allTasks.push(task)
        writeToStorage(allTasks)
        this.reset()
        window.location.href="index.html"
    })
    
}

