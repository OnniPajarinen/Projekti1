// Tässä on "close" nappi ja myös tämä localstorage komento, 
// jolla tieto saadaan poistettua localstorage järjestelmästä.
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        removeFromLocalStorage(div.textContent.slice(0, -1));
        div.style.display = "none";
    };
}

// Nämä komennot tekevät käyttäjän klikkaamasta kohteesta "Tehdyn" veetämällä viivan yli ja värjäämällä tekstin ja laatikon taustan.
var list = document.querySelector("ul");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// Tämä funktio lisää uuden asian, jonka käyttäjä kirjoittanut kenttään.
// Myös, jos kenttä on jätetty tyhjäksi ja painetaan "Add" painiketta, ei tule uutta riviä eikä se siirry muistiin,
// ja tulee ilmoitus "The field cannot be empty".
function addNew() {
    var muisti = document.getElementById("muisti").value;
    if (muisti === "") {
        alert("The field cannot be empty!");
        return;
    }

    // Tässä tehdään kyseisestä asiasta listan osa, jonka käyttäjä on kirjoittanut kirjoituskenttään.
    var li = document.createElement("li");
    var okei = document.createTextNode(muisti);
    li.appendChild(okei);

    // Tässä lisätään asiaan X painike, josta saa suljettua kyseisen asian, jonka siten valitsee.
    var kohta = document.createElement("span");
    var teksti = document.createTextNode("X");
    kohta.className = "close";
    kohta.appendChild(teksti);
    li.appendChild(kohta);

    // Tämä tulostaa syötteen kyseiselleen rivilleen ja näyttää sen käyttäjälleen sulkemis painikkeen kera.
    document.getElementById("ul").appendChild(li);

    // Tämä komento tallentaa kyseisen syötteen koneen paikallismuistiin, jotta sivu voi kaivaa sen esiin ja näyttää sen,
    // kun käyttäjä vierailee uudestaan kyseisellä sivulla.
    saveToLocalStorage(muisti);

    // Tämä komento on sellainen, että kun sulkemispainikkeesta "X" painetaan, poistaa se kyseisen syötteen näytöltä sekä
    // koneen paikallismuistista, jotta sitä ei ladata uudestaan enää koskaan.
    kohta.onclick = function () {
        var div = this.parentElement;
        removeFromLocalStorage(div.textContent.slice(0, -1));
        div.style.display = "none";
    };

    // Tämä komento tyhjentää kirjoituskentän sen jälkeen, kun on painettu "Add" painiketta ja muut komennot ovat suoritettu, jotta
    // käyttäjä voi kirjoittaa kentään uudelleen, ilman edellisen poispyyhintää.
    document.getElementById("muisti").value = "";
}

// Tämä on funktio, joka nähtiin edellisen funktion sisällä.
// Tämä funktio siis tallentaa syötteen samaan riviin, muiden syötteiden kanssa mitä käyttäjä on lisännyt. Tottakai pois lukien ne,
// jotka ovat käyttäjä poistanut, sillä niitä ei muistissa enää.
function saveToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Tämä on funktio, joka nähtiin myös edellisen funktion sisällä.
// Tämä funktio siis poistaa syötteen, josta käyttäjää painaa sulkemisnappia tai "aluetta" eli tässä tapauksessa "X"-nappia.
// Ensimmäisenä kyseinen funktio poistaa sanan sanajonosta, joka muodostetaan käyttämällä JSON.stringify komentoa.
// Sen jälkeen tallennetaan uusi sanajono, josta kyseinen syöte on poistettu.
function removeFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(item => item !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Tämä funktio tekee sen, kun käyttäjän sivu latautuu, tulee hänen jättämänsä muistettavat asiat takaisin näytölle sulkunapin kera.
function ladattu() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    // ForEach komento tulostaa tallennetun tiedon, jotka on erotettu pilkulla.
    // Sanajonosta tulostetaan muistossa olevat syötteet siten omiin laatikkoihinsa X:n kera.
    tasks.forEach(task => {
        // Tässä tehdään kyseisestä asiasta listan osa, jonka käyttäjä on kirjoittanut kirjoituskenttään.
        var li = document.createElement("li");
        var okei = document.createTextNode(task);
        li.appendChild(okei);

        // Tässä lisätään asiaan X painike, josta saa suljettua kyseisen asian, jonka siten valitsee.
        var kohta = document.createElement("span");
        var teksti = document.createTextNode("X");
        kohta.className = "close";
        kohta.appendChild(teksti);
        li.appendChild(kohta);

        // Tämä tulostaa tallennetun ja uudelleen ladattavan syötteen kyseiselleen rivilleen ja näyttää
        // sen käyttäjälleen sulkemis painikkeen kera.
        document.getElementById("ul").appendChild(li);

        // Kyseinen komento poistaa nappia painamalla ladatun asian.
        kohta.onclick = function () {
            var div = this.parentElement;
            removeFromLocalStorage(div.textContent.slice(0, -1));
            div.style.display = "none";
        };
    });
}