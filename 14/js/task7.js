function add() {
    let time = document.createElement("li");
    time.innerHTML = document.getElementById("list").value;
    document.getElementById("toDo").appendChild(time);
}

