let taskList = document.getElementById("taskList");

function addTask(){
    let taskInput = document.getElementById("taskInput");
    if(taskInput.value ===""){
        alert("Please enter a task");
        return;
    }
}
let li = document.createElement("li");
li.innerHTML = `
    <span onclick="completeTask(this)">${taskInput.value}</span>
    <button onclick="deleteTask(this)">X</button>
`;
taskList.appendChild(li);
taskInput.value = "";

function completeTask(task){
    task.classList.toggle("completed");
}

function deleteTask(btn){
    btn.parentElement.remove();
}