function pelottava() {
    const asia = localStorage.getItem("asia");
    const paiva = localStorage.getItem("paiva");

    document.getElementById("sessionData").innerHTML = 
    "Asia: " + 
    asia + "<br></br>" + 
    "Päivämäärä: " + paiva +

    console.log("Vanha data:");
    console.log("Asia:", asia);
    console.log("Päivämäärä:", paiva);
}


function insertRows() {
    var table = document.getElementById("data");
    var row = table.insertRow(1);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell1.appendChild(checkbox); 

    cell2.innerHTML = document.getElementById("asia").value;
    cell3.innerHTML = document.getElementById("paiva").value;

    localStorage.setItem("asia", asia);
    localStorage.setItem("päivämäärä", paiva)
}

function deleteRows() {
    var table = document.getElementById("data");
    var rows = table.rows;

    for (var i = rows.length - 1; i > 0; i--) {
        var checkbox = rows[i].cells[0].querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            table.deleteRow(i);
        }
    }
}

function markDone() {
    var table = document.getElementById("data");
    
}