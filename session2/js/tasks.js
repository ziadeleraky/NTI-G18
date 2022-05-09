const addForm = document.querySelector("#addForm")
const allTasks = []
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    task = {
        title : this.elements.title.value,
        content : this.elements.content.value,
        dueDate : this.elements.dueDate.value,
        status:false,
        id: Date.now()
    }
    allTasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(allTasks))
    this.reset()
    window.location.href="index.html"
})