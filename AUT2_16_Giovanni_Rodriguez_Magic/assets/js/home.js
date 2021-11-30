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
const url = "https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints";
const DOM = {
    template: document.getElementById("deck-template").content,
    cards: document.getElementById("cards"),
}

window.onload = () => {
    fetch2016();
    fetch2017();
    fetchUgins();
    fetchZendikar();
    fetchIntroductory();
}

function checkLogin() {
    if (user === 'daw' || password === 'admin') {
        alert('Already in');
    } else {
        document.getElementById('errorLogin').style.display = 'block';
    }
}

/**
 * Fetch del mazo
 * @returns {Promise<void>}
 */
const fetch2016 = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const card = await data.data;
        createElement(card);
        console.log(card);
    } catch (error) {
        alert(error);
    }
}

const fetchUgins = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const card = await data.data;
        createElement(card);
        console.log(card);
    } catch (error) {
        alert(error);
    }
}

const fetchZendikar = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const card = await data.data;
        createElement(card);
        console.log(card);
    } catch (error) {
        alert(error);
    }
}

const fetchIntroductory= async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const card = await data.data;
        createElement(card);
        console.log(card);
    } catch (error) {
        alert(error);
    }
}

const fetch2017 = async() => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const card = await data.data;
        createElement(card);
        console.log(card);
    } catch (error) {
        alert(error);
    }
}

const createElement = cards => {
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
}