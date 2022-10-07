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
        
        /*
        const updateButton = document.createElement("input")
        updateButton.setAttribute(`type`, `text`)
        //updateButton.setAttribute(`id`, `updateButton`) 
        updateButton.placeholder = "bearbeiten"
        updateButton.id = "updateButton"
        */
        const updateButton = document.createElement("button") 
        updateButton.innerText = "verändern" 

        /*
        const submitUpdate = document.createElement("button")
        submitUpdate.setAttribute(`type`, `submit`)
        submitUpdate.innerText = "Bearbeitung übernehmen"
        //submitUpdate.setAttribute(`value`, `Bearbeitung übernehmen`)
        submitUpdate.setAttribute(`for`, `updateButton`)  
        */

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
        //tableRow.appendChild(submitUpdate)
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
    const updateTaskData = prompt("Task verändern") 
    //const title = {title: updateTaskData.value} 
    fetch(`http://localhost:3000/tasks`,{ 
    method: 'PUT', 
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