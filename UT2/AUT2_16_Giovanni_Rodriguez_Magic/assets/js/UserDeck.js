drawMyDeck(myDeck.getDeck);
checkRaritys();

/**
 * Función que se encarga de comprobar las rarezas y añadirlas
 */
function checkRaritys() {
    let raritys = [];
    myDeck.getDeck.forEach(element => {
        if (!raritys.includes(element[0].rarity)) {
            raritys.push(element[0].rarity);
        }
    });
    raritys.forEach(element => {
        let name = element.charAt(0).toUpperCase() + element.slice(1);
        document.getElementById("select-rarity").innerHTML += "<option value="+element+">"+name+"</option>";
    });
}

const filters = document.getElementById("filters");
filters.getElementsByTagName("select")[0].getElementsByTagName("option")[0].selected = "selected";
filters.getElementsByTagName("input")[0].value = "";
filters.getElementsByTagName("select")[1].getElementsByTagName("option")[0].selected = "selected";
filters.addEventListener("change", (e) => {
    let color = filters.getElementsByTagName("select")[0].value;
    let cost = filters.getElementsByTagName("input")[0].value;
    let rarity = filters.getElementsByTagName("select")[1].value;
    if (rarity !== "all") {
        filterRarity(rarity);
    } else {
        if (color === "all" && cost === "") {
            drawMyDeck(myDeck.getDeck);
        } else {
            filterDeck(color, cost);
        }
    }
    e.stopPropagation();
});

/**
 * Función que cierra la sesión
 */
function logout() {
    if (localStorage.getItem("daw")) {
        localStorage.removeItem("daw");
    }
}

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", (e) => {
    logout();
    window.location.replace("index.html");
    e.stopPropagation();
});