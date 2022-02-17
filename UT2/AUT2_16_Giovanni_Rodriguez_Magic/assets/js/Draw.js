/**
 * Función que se encarga de mostrar el mazo con sus cartas
 * @param deck a mostrar
 */
function drawDeck(deck) {
    var content = document.querySelector('#cards');
    content.innerHTML = "";
    deck.forEach(card => {
        const fragment = document.createDocumentFragment();
        const template = document.querySelector("#template-card").content;
        template.querySelectorAll("img")[0].src = card[0].getImg;
        template.querySelectorAll("h5")[0].textContent = card[0].getName;
        template.querySelectorAll("p")[0].textContent = card[0].getPrice + "€";
        template.querySelectorAll("a")[0].id = card[0].getId;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        content.appendChild(fragment);
    });
}

/**
 * Función que muestra el mazo del usuario
 * @param deck a mostrar
 */
function drawMyDeck(deck) {
    let div = document.querySelector('#cards');
    div.innerHTML = "";
    deck.forEach(element => {
        let card = element[0];
        let count = element[1];
        const fragment = document.createDocumentFragment();
        const template = document.querySelector("#template-card").content;
        for (let i = 0; i < count; i++) {
            template.querySelectorAll("img")[0].src = card.getImg;
            template.querySelectorAll("h5")[0].textContent = card.getName;
            template.querySelectorAll("p")[0].textContent = card.getPrice + "€";
            template.querySelectorAll("a")[0].href = card.getUrl;
            template.querySelectorAll("a")[1].id = card.getId;
            const clone = template.cloneNode(true);
            fragment.appendChild(clone);
        }
        div.appendChild(fragment);
    });
}

/**
 * Función encargada de mostrar las cartas que va seleccionando el usuario
 * @param deck a mostrar
 */
function drawChosen(deck) {
    let div = document.querySelector('#items');
    div.innerHTML = "";
    let totalPrice = 0;
    let totalCards = 0;
    deck.forEach(element => {
        let card = element[0];
        let count = element[1];
        let sum = parseFloat(card.getPrice * count);
        totalPrice += sum;
        totalCards += count;
        const fragment = document.createDocumentFragment();
        const template = document.querySelector("#template-chosen").content;
        template.querySelectorAll("th")[0].textContent = card.getName;
        template.querySelectorAll("td")[0].textContent = card.getPrice;
        template.querySelectorAll("td")[1].textContent = count;
        template.querySelectorAll("td")[2].id = card.getId;
        template.querySelectorAll("span")[0].textContent = sum.toFixed(2);
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        div.appendChild(fragment);
    });
    if (document.getElementById("items").childElementCount > 0) {
        document.getElementById("empty").style.display = "none";
        document.getElementById("totalCards").style.display = "table-cell";
        document.getElementById("totalCards").innerHTML = "<strong>Cards:</strong>&nbsp;&nbsp; " + totalCards;
        document.getElementById("totalPrice").style.display = "table-cell";
        document.getElementById("totalPrice").getElementsByTagName("span")[0].innerHTML = "<strong>Total:</strong>&nbsp;&nbsp;" + totalPrice.toFixed(2) + "€";
    } else {
        document.getElementById("empty").style.display = "table-cell";
        document.getElementById("totalPrice").style.display = "none";
        document.getElementById("totalCards").style.display = "none";
    }
}

/**
 * Función que alerta de que se han elegido un máximo de cartas del mismo tipo
 * @param name de la carta
 */
function alertMaxCardsChosen(name) {
    let alert = "<div class='alert alert-danger alert-dismissible fade show' role='alert'></br><strong>Error!</strong> Only 4 " + name + " are allowed.</br><button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></br></div></br>";
    document.getElementById("alert").innerHTML += alert;
}

/**
 * Función que alerta que se han elegido todas las cartas de un mazo
 */
function alertMaxCards() {
    document.getElementById("alert").innerHTML = "<div class='alert alert-danger alert-dismissible fade show' role='alert'></br><strong>Error!</strong> Max 60 cards.</br><button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></br></div></br>";
}