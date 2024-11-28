var lista = document.getElementsByTagName("li");
var i;

for (i = 0; i < lista.length; i++) {
    var kohta = document.createElement("span");
    var teksti = document.createTextNode("X");
    kohta.className = "close";
    kohta.appendChild(teksti);
    lista[i].appendChild(kohta);
}

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

var list = document.querySelector("ul");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
}, false);

function addNew() {
    var li = document.createElement("li");
    var muisti = document.getElementById("muisti").value;
    var okei = document.createTextNode(muisti);
    li.appendChild(okei);

    if (muisti === "") {
        alert("The field cannot be empty!");
    } else {
        document.getElementById("ul").appendChild(li);
    }

    var kohta = document.createElement("span");
    var teksti = document.createTextNode("X");
    kohta.className = "close";
    kohta.appendChild(teksti);
    li.appendChild(kohta);

    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
