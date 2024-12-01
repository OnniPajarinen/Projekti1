var lista = document.getElementsByTagName("li");
for (let i = 0; i < lista.length; i++) {
    var kohta = document.createElement("span");
    var teksti = document.createTextNode("X");
    kohta.className = "close";
    kohta.appendChild(teksti);
    lista[i].appendChild(kohta);
}

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        removeFromLocalStorage(div.textContent.slice(0, -1));
        div.style.display = "none";
    };
}

var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    },
    false
);

function addNew() {
    var muisti = document.getElementById("muisti").value.trim();
    if (muisti === "") {
        alert("The field cannot be empty!");
        return;
    }

    var li = document.createElement("li");
    var okei = document.createTextNode(muisti);
    li.appendChild(okei);

    var kohta = document.createElement("span");
    var teksti = document.createTextNode("X");
    kohta.className = "close";
    kohta.appendChild(teksti);
    li.appendChild(kohta);

    document.getElementById("ul").appendChild(li);

    saveToLocalStorage(muisti);

    kohta.onclick = function () {
        var div = this.parentElement;
        removeFromLocalStorage(div.textContent.slice(0, -1));
        div.style.display = "none";
    };

    document.getElementById("muisti").value = "";
}

function saveToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(item => item !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        var li = document.createElement("li");
        var okei = document.createTextNode(task);
        li.appendChild(okei);

        var kohta = document.createElement("span");
        var teksti = document.createTextNode("X");
        kohta.className = "close";
        kohta.appendChild(teksti);
        li.appendChild(kohta);

        document.getElementById("ul").appendChild(li);

        kohta.onclick = function () {
            var div = this.parentElement;
            removeFromLocalStorage(div.textContent.slice(0, -1));
            div.style.display = "none";
        };
    });
}

document.addEventListener("DOMContentLoaded", loadTasks);