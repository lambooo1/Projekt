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
        deleteButton.innerText = "löschen"  

        tableRow.append(createCell(task.id), createCell(task.title), createCell(task.completed))
        tableBody.appendChild(tableRow)
        tableRow.appendChild(deleteButton) 
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
     indextasks(); 
     //alert(`${task} wurde hinzugefügt.`)
     indextasks.id
}

function deleteTask() {
    const allTaskId = document.querySelector("tbody") 
    const deletedTask = {id: allTaskId.value}
    fetch(`http://localhost:3000/tasks`, {
    method: 'DELETE',
    headers: {
   'Content-Type':'application/json'
    },
    body: JSON.stringify(deletedTask)
    })
    .then((response) => response.json())
    .then((deletedTask) => {
    console.log(deletedTask); 
    })
}

document.addEventListener("DOMContentLoaded", () => {
    
    const submit = document.getElementById("submit")
    const taskId = document.getElementById("taskId")
    const deleteId = document.getElementById("deleteId")  

    const newExerciseForm = document.getElementById("newExerciseForm")
    const updateExercise = document.getElementById("updateExercise")
    const deleteExercise = document.getElementById("deleteExercise") 

    taskId.addEventListener("click", () => {
        /*
        while(tableId.rows.length>0)
        {
            tableId.deleteRow(0);
        }

        */
        indextasks(); 
    })

    submit.addEventListener("submit", () => {
        createTask(); 
    }); 

    deleteId.addEventListener("submit", () => {
        deleteTask(); 
    });

    updateExercise.addEventListener("click", () => {
        alert("updaten")
    });

    deleteExercise.addEventListener("click", () => {
        
    });
});