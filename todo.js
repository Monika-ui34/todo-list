var inputBox = document.getElementById("taskInput");
var listContainer = document.getElementById("taskList");

function addTask() {

    if (inputBox.value === "") {
        alert("Please write something!");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        var span = document.createElement("span");
        span.innerHTML = "×";
        li.appendChild(span);
    }

    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }

}, false);