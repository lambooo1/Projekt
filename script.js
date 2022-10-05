const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
  }

  const listTask = (task) => {
    const display = document.getElementById("display");
    const tableRow = document.createElement("tr");

    tableRow.append(
      createCell(task.id), 
      createCell(task.completed), 
      createCell(task.title), 
    );
    display.appendChild(tableRow); 
    }


document.addEventListener("DOMContentLoaded", () => {
    const taskId = document.getElementById("taskId")
    const addNewExercise = document.getElementById("addNewExercise")
    const updateExercise = document.getElementById("updateExercise")
    const deleteExercise = document.getElementById("deleteExercise") 

    taskId.addEventListener("click", () => {
        alert("alles anzeigen")
        //event.preventDefault(); 
        //const taskIdData = new FormData(taskId);

        fetch(`http://127.0.0.1:3002/m294-lb-backend-main/m294-lb-backend-main/index.html#taskTaskIdGet`)  
            .then((response) => {
                return response.json(); 
            }) 
            .then((data) => {
                listTask(data); 
            }) 
    }); 

    addNewExercise.addEventListener("click", () => {
        alert("neu hinzufügen")
    });

    updateExercise.addEventListener("click", () => {
        alert("updaten")
    });

    deleteExercise.addEventListener("click", () => {
        alert("löschen")
    });
})