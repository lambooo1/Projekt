const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
  }
/*
const createButton = () => {
    const cellButton = document.createElement("button");
    cell.innerText = "Löschen"
    return cellButton
}
*/

function renderTasks(tasks){
    const tableBody = document.querySelector("tbody"); 
    tasks.forEach((task) => { 
        const tableRow = document.createElement("tr")  
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Löschen"

        const updateButton = document.createElement("input")
        updateButton.setAttribute(`type`, `text`)
        updateButton.placeholder = "bearbeiten"

        const submitUpdate = document.createElement("button")
        submitUpdate.setAttribute(`type`, `submit`)
        submitUpdate.setAttribute(`value`, `Bearbeitung übernehmen`)
        submitUpdate.setAttribute(`for`, `updateButton`)  
        
        deleteButton.addEventListener("click", () => {
            deleteTask(task.id); 
        })
        
        submitUpdate.addEventListener("click", () => {
            updateTask(); 
        })
        

        tableRow.append(createCell(task.id), createCell(task.title), createCell(task.completed))
        tableBody.appendChild(tableRow)
        tableRow.appendChild(deleteButton)  
        tableRow.appendChild(updateButton)
        tableRow.appendChild(submitUpdate)
        }
        )}

function indextasks(){
    fetch(`http://localhost:3000/tasks`) 
    .then((response) => {
        return response.json()})

    .then((data) => {
        return renderTasks(data)}); 
}

function createTask() {
    const addNewExercise = document.getElementById("addNewExercise");
    const task = {title: addNewExercise.value}
    fetch(`http://localhost:3000/tasks`, {
    method: 'POST',
    headers: {
   'Content-Type':'application/json'
    },
    body: JSON.stringify(task)
    })
    .then((response) => response.json())
    .then((task) => {
    console.log(task);
    })
     //indextasks(); 
     //alert(`${task} wurde hinzugefügt.`)
     //indextasks.id
     /*
     if (task === ""){ 
        alert("Bitte etwas eingben.") 
    } 
    */ 
}

function deleteTask(id) {
    fetch(`http://localhost:3000/task/${id}`,{
    method: 'DELETE'
    })
    location.reload(); 
}

function updateTask(id){
    const updateTaskData = document.getElementsByTagName("input") 
    fetch(`http://localhost:3000/tasks/${id}`,{
    method: 'PUT',
    headers: {
    'Content-Type':'application/json'
    },
    body: JSON.stringify(updateTaskData)
    })
    .then((response) => response.json())
    .then((updateTaskData) => {
    console.log(updateTaskData);
    })
    }

document.addEventListener("DOMContentLoaded", () => { 



    const submit = document.getElementById("submit")
    const taskId = document.getElementById("taskId")

    const updateExercise = document.getElementById("updateExercise")

    //taskId.addEventListener("click", () => {
        /*
        while(tableId.rows.length>0) 
            {tableId.deleteRow(0);}
        */
        indextasks();  
        
    //})

    submit.addEventListener("submit", () => {
        createTask(); 
    }); 
    
    /*
    const deleteButton2 = document.getElementsByTagName("button")
    deleteButton2.addEventListener("click", () => {    
    if (deleteButton2.innerText == "Löschen"){
        deleteTask(task.id)} 
    else {console.log()} 
    }) 
    */

});