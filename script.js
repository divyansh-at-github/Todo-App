const input = document.querySelector(".todo-input input");
const addTaskBtn = document.querySelector(".add-task");
const listWrapper = document.querySelector(".list-wrapper");
const clearAllBtn=document.querySelector('.clear-all')
const deleteTaskBtn=document.querySelector('.delete-task')
addTaskBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener('click',clearTask);
listWrapper.addEventListener('click',(e)=>{
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    const matchedListItem=tasks.filter((currList)=>{
        return !(currList==e.target.textContent)
    })
    deleteTask(matchedListItem)
    e.target.remove()
})
loadTasks()
function addTask(){
const task=input.value.trim()
    if(!(task==="")){
        displayListItem(task)
        input.value=""
    }
    else{
        alert('Please Enter Text First')
    }
    
}
function displayListItem(task){
    let listItem=document.createElement('li')
    let text=document.createTextNode(task)
    listItem.appendChild(text)
    listWrapper.appendChild(listItem)
    addTasksToLocalStorage()
}

function addTasksToLocalStorage() {
  const tasks = []
  document.querySelectorAll("li").forEach((item) => {
    tasks.push(item.textContent.trim());
  });
  localStorage.setItem("task", JSON.stringify(tasks));
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    tasks.forEach(displayListItem)
}

function clearTask(){
    localStorage.clear()
    document.querySelectorAll('li').forEach((item)=>{
        item.remove()
    })
}

function deleteTask(matchedListItem){
  localStorage.setItem("task", JSON.stringify(matchedListItem));
}

