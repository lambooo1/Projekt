document.addEventListener("DOMContentLoaded", () => {
    const listAllExercises = document.getElementById("listAllExercises")
    const addNewExercise = document.getElementById("addNewExercise")
    const updateExercise = document.getElementById("updateExercise")
    const deleteExercise = document.getElementById("deleteExercise") 

    listAllExercises.addEventListener("click", () => {
        alert("alles anzeigen")
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