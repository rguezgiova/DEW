let lang = 'en';
let url = 'https://api.scryfall.com/cards/search?order=set&q=lang%3A' + lang + '+e%3Augin&unique=prints';
let id = 'ugins';
let deck;

checkLogin();
createDeck();
drawChosen(myDeck.getDeck);

/**
 * Función que se encarga de verificar si el usuario ha iniciado sesión
 * @returns {boolean} según si ha iniciado o no
 */
function checkLogin() {
    if (!localStorage.getItem("user")) {
        document.getElementById("logout").style.display = "none";
        document.getElementById("selected").style.visibility ="hidden";
        document.getElementById("myDeckA").style.display ="none";
        return false;
    } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("selected").style.visibility ="visible";
        document.getElementById("myDeckA").style.display ="block";
        return true;
    }
}

/**
 * Función que se encarga de modificar la vista cuando se cierra la sesión
 * Función que se encarga de modificar la vista cuando se cierra la sesión
 */
function logout() {
    if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
        document.getElementById("logout").style.display = "none";
        document.getElementById("login").style.display = "inline";
        document.getElementById("login").style.visibility = "visible";
        document.getElementById("selected").style.visibility ="hidden";
        document.getElementById("myDeckA").style.display ="none";
    }
}

/**
 * Función que se encarga de comprobar el idioma de las cartas
 * @param lang seleccionado
 */
function checkLanguage(lang) {
    changeDeck(lang);

    if (lang === "es") {
        fetchCards(url).then(data => {
            data.forEach(carData => {
                let id = carData.oracle_id;
                let name = carData.printed_name;
                let img = carData.image_uris.normal;
                deck.deck.forEach(element => {
                    if (element[0].getId === id) {
                        console.log(name, img);
                        element[0].setName = name;
                        element[0].setImg = img;
                    }
                });
            });
            drawDeck(deck.getDeck);
        })
    } else if (lang === "en") {
        fetchCards(url).then(data => {
            data.forEach(carData => {
                let id = carData.oracle_id;
                let name = carData.name;
                let img = carData.image_uris.normal;
                deck.deck.forEach(element => {
                    if (element[0].getId === id) {
                        element[0].setName = name;
                        element[0].setImg = img;
                    }
                });
            });
            drawDeck(deck.getDeck);
        })
    }
}

/**
 * Función que se encarga de ir construyendo un mazo
 * @param lang seleccionado
 */
function createDeck(lang = "en") {
    let cardList = [];
    fetchCards(url).then(data => {
        data.forEach(cardData => {
            let id = cardData.oracle_id;
            let name = cardData.name;
            let price = cardData.prices.eur;
            let set = cardData.set_name;
            let color;
            if (cardData.color_identity.length === 0) {
                color = "X";
            } else {
                color = cardData.color_identity[0];
            }
            let type = cardData.type_line;
            let cost = cardData.cmc;
            let power;
            let toughness;
            if (type.includes("Creature")) {
                power = cardData.power;
                toughness = cardData.toughness;
            } else {
                power = null;
                toughness = null;
            }
            let img = cardData.image_uris.normal;
            let url = cardData.scryfall_uri;
            let rarity = cardData.rarity;

            let card = new Card(id, name, price, set, color, type, cost, power, toughness, img, url, rarity);
            cardList.push([card, 1]);
        });
        deck = new Deck(cardList);
        checkLanguage(lang);
    })
}

/**
 * Función que se encarga de ir cambiando el mazo seleccionado
 * @param lang seleccionado
 */
function changeDeck(lang) {
    switch (id) {
        case "wd16":
            url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Aw16&unique=prints";
            break;
        case "ugins":
            url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Augin&unique=prints";
            break;
        case "wd17":
            url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Aw17&unique=prints";
            break;
        case "zendikar":
            url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Azne&unique=prints";
            break;
        case "two":
            url ="https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Aitp&unique=prints";
            break;
    }
}

const dropdown = document.getElementById("decks");
dropdown.addEventListener("click", (e) => {
    id = e.target.id;
    if (e.target.id === "aw16") {
        url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Aw16&unique=prints";
        createDeck();
    }
    if (e.target.id === "augin") {
        url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Augin&unique=prints";
        createDeck();
    }
    if (e.target.id === "aw17") {
        url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Aw17&unique=prints";
        createDeck();
    }
    if (e.target.id === "azne") {
        url = "https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Azne&unique=prints";
        createDeck();
    }
    if (e.target.id === "aitp") {
        url ="https://api.scryfall.com/cards/search?order=set&q=lang%3A" + lang + "+e%3Aitp&unique=prints";
        createDeck();
    }
    e.stopPropagation();
});

const cards = document.getElementById("cards");
cards.addEventListener("click", (e) => {
    if (e.target.nodeName === "A") {
        if (checkLogin()) {
            addMyDeck(e.target.id);
        } else {
            alert("Login please.")
        }
    }
    e.stopPropagation();
});

const items = document.getElementById("items");
items.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        if (e.target.className.includes("info")) {
            addMyDeck(e.target.parentNode.id);
        }
        if (e.target.className.includes("danger")) {
            removeMyDeck(e.target.parentNode.id);
        }
    }
    e.stopPropagation();
});

const language = document.getElementById("language");
language.addEventListener("click", (e) => {
    lang = e.target.id;
    checkLanguage(e.target.id);
    console.log(e.target.id);
    e.stopPropagation();
});

const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", (e) => {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    console.log("datos->", user, password);
    if (user !== "" && user != null && password !== "" && password != null) {
        login(user, password);
    }
    e.stopPropagation();
});

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", (e) => {
    logout();
    e.stopPropagation();
});