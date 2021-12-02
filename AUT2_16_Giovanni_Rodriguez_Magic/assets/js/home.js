/**
 * Clase Login
 */
class Login {
    /**
     * Constructor de la clase Login
     * @param user a logear
     * @param password a logear
     */
    constructor(user, password) {
        this._user = user;
        this._password = password;
    }

    /**
     * Getters y Setters
     */
    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

let inputUser = document.getElementById("username").value;
let inputPassword = document.getElementById("password").value;
let login = new Login(inputUser, inputPassword);
let user = login.user;
let password = login.password;
const fragment = document.createDocumentFragment();
const DOM = {
    template: document.getElementById("deck-template").content,
    cards: document.getElementById("cards"),
}

window.onload = () => {
    createElement();
}

function checkLogin() {
    if (user === 'daw' || password === 'admin') {
        alert('Already in');
    } else {
        document.getElementById('errorLogin').style.display = 'block';
    }
}

/**
 * Funcion que recoge los datos de las cartas
 * @param url para realizar el fetch
 * @returns {Promise<*>} con los datos
 */
async function fetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

/**
 * Funcion que crea los elementos con los datos
 */
function createElement() {
    fetch("https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints")
        .then(cards => {
            cards.forEach(card => {
                DOM['template'].querySelector("img").setAttribute("src", card.image_uris.small);
                DOM['template'].querySelector("img").setAttribute("alt", card.name);
                DOM['template'].querySelector("h5").textContent = card.name;
                DOM['template'].querySelector("p").textContent = card.prices.eur + "€";
                DOM['template'].querySelector("button").setAttribute("value", card.name);
                DOM['template'].querySelector("button").textContent = "Add to deck";
                DOM['template'].querySelector("button").dataset.id = card.id;
                const addNode = document.importNode(DOM['template'], true);
                fragment.appendChild(addNode);
            })
            DOM['cards'].append(fragment);
    });
}