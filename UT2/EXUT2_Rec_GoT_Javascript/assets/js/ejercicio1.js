var itemCost = [];
var itemName = [];

/**
 * Función que añade un item seleccionado (nombre y precio) a la cesta
 */
function addItem() {
    let item1 = document.getElementById("item1").checked;
    let item2 = document.getElementById("item2").checked;
    let item3 = document.getElementById("item3").checked;
    let item4 = document.getElementById("item4").checked;
    let item5 = document.getElementById("item5").checked;
    if (item1) {
        let price = document.getElementById("element1").getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById("element1").getElementsByTagName("span")[0].firstChild.nodeValue;
        itemCost.push(parseFloat(price));
        itemName.push(name);
        console.log(itemName);
    }
    if (item2) {
        let price = document.getElementById("element2").getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById("element2").getElementsByTagName("span")[0].firstChild.nodeValue;
        itemCost.push(parseFloat(price));
        itemName.push(name);
    }
    if (item3) {
        let price = document.getElementById("element3").getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById("element3").getElementsByTagName("span")[0].firstChild.nodeValue;
        itemCost.push(parseFloat(price));
        itemName.push(name);
    }
    if (item4) {
        let price = document.getElementById("element4").getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById("element4").getElementsByTagName("span")[0].firstChild.nodeValue;
        itemCost.push(parseFloat(price));
        itemName.push(name);
    }
    if (item5) {
        let price = document.getElementById("element5").getElementsByTagName("span")[1].firstChild.nodeValue;
        let name = document.getElementById("element5").getElementsByTagName("span")[0].firstChild.nodeValue;
        itemCost.push(parseFloat(price));
        itemName.push(name);
    }
    calcularIgic(itemCost);
    calcularTotal(itemCost);
    pintarNombre(itemName);
}

/**
 * Función que calcula el IGIC de una array de items
 * @param itemCost array con los items a calcular
 */
function calcularIgic(itemCost) {
    let igicPrice = 0;
    for (let i = 0; i < itemCost.length; i++) {
        let igic = (itemCost[i] * 7) / 100;
        igicPrice += itemCost[i] - igic;
    }
    document.getElementById("cesta").getElementsByTagName("p")[0].innerHTML = "IGIC (7%): " + igicPrice + "€";
}

/**
 * Función que calcula el precio total de una array de items
 * @param itemCost array con los items a calcular
 */
function calcularTotal(itemCost) {
    let totalPrice = 0;
    for (let i = 0; i < itemCost.length; i++) {
        totalPrice += itemCost[i];
    }
    document.getElementById("cesta").getElementsByTagName("p")[1].innerHTML = "Importe Total: " + totalPrice + "€";
}

/**
 * Función que pinta los nombres de los items de una array
 * @param itemName array con los nombres de los items
 */
function pintarNombre(itemName) {
    let nodoPintar = document.getElementById("elementos");
    const fragment = document.createDocumentFragment();
    const template = document.querySelector('#template-elemento').content;
    for (let i = 0; i < itemName.length; i++) {
        template.querySelector("p").textContent = itemName[i];
    }
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    nodoPintar.appendChild(fragment);
}