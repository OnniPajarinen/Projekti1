var lista = document.getElementsByTagName("li");
var i;
for (i = 0; i < lista.length; i++) {
    var kohta = document.createElement("span");
    var teksti = document.createTextNode("X");
    button.className ="close";
    button.appendChild(teksti);
    lista[i].appendChild(button);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div= this.parentElement;
        div.style.display = "none";
    }
}