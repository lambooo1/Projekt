const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
  }

function renderTasks(tasks){
    const tableBody = document.querySelector("tbody"); 
    tasks.forEach((task) => { 
        const tableRow = document.createElement("tr")  
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Löschen"
        deleteButton.className = "deleteButton"
 
        const updateButton = document.createElement("button") 
        updateButton.innerText = "verändern" 
        updateButton.className = "updatebutton"

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);  
        })
        
        updateButton.addEventListener("click", () => {
            //event.preventDefault();
            updateTask(task.id); 
             
        })
        
        tableRow.append(createCell(task.id), createCell(task.title), createCell(task.completed))
        tableBody.appendChild(tableRow)
        tableRow.appendChild(deleteButton)  
        tableRow.appendChild(updateButton)
        }
        )}

function indextasks(){
    fetch(`http://127.0.0.1:3000/auth/cookie/tasks`, {
    credentials:"include"}) 
    .then((response) => {
        return response.json()})

    .then((data) => {
        return renderTasks(data)}); 
}

function createTask() {
    const addNewExercise = document.getElementById("addNewExercise");
    const task = {title: addNewExercise.value}
    fetch(`http://127.0.0.1:3000/auth/cookie/tasks`, {
    method: 'POST',
    credentials:"include",
    headers: {
   'Content-Type':'application/json'
    },
    body: JSON.stringify(task)
    })
    .then((response) => response.json())
    .then((task) => {
    console.log(task);
    })
}

function deleteTask(id) {
    fetch(`http://127.0.0.1:3000/auth/cookie/task/${id}`,{
    method: 'DELETE',
    credentials:"include"
    })
    location.reload(); 
}

function updateTask(id){
    const updateTaskData = prompt("Task verändern") 
    //const title = {title: updateTaskData.value} 
    fetch(`http://127.0.0.1:3000/auth/cookie/tasks`,{ 
    method: 'PUT', 
    credentials:"include",
    headers: {
    'Content-Type':'application/json'
    },
    body: JSON.stringify({id: id, title: updateTaskData})  
    })
    location.reload();
    }

document.addEventListener("DOMContentLoaded", () => { 

    const submit = document.getElementById("submit")
    const taskId = document.getElementById("taskId")


    // taskId.addEventListener("click", () => {
        /*
        while(tableId.rows.length>0) 
            {tableId.deleteRow(0);}
        */
        indextasks(); 
    // })

    submit.addEventListener("submit", () => {
        createTask(); 
    }); 
});