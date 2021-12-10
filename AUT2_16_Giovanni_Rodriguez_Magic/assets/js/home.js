const fragment = document.createDocumentFragment();
const DOM = {
    templateDeck: document.getElementById("deck-template").content,
    templateTable: document.getElementById("table-template").content,
    cards: document.getElementById("cards"),
    table: document.getElementById("table-cards"),
    imgCard: document.getElementById("imgCard"),
    logout: document.getElementById("logout"),
}
let arrayDeck = [];
let urls = {
    wel16: 'https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints',
    wel17: 'https://api.scryfall.com/cards/search?order=set&q=e%3Aw17&unique=prints',
    ugins: 'https://api.scryfall.com/cards/search?order=set&q=e%3Aw16&unique=prints',
    zendikar: 'https://api.scryfall.com/cards/search?order=set&q=e%3Azne&unique=prints',
    two: 'https://api.scryfall.com/cards/search?order=set&q=e%3Aitp&unique=prints'
};

window.onload = () => {
    drawCard(urls['wel16']);
    DOM['logout'].style.display = "none";
}

/**
 * Funcion que recoge los datos de las cartas
 * @param url para realizar el fetch
 * @returns {Promise<*>} con los datos
 */
async function fetchCard(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

/**
 * Funcion que crea los elementos con los datos
 */
function drawCard(url) {
    DOM['cards'].innerHTML = "";
    fetchCard(url)
        .then(cards => {
            cards.forEach(card => {
                if (card.type_line.toLowerCase().includes('creature')) {
                    let newCard = new CriatureCard(card.name, card.prices.eur, card.set, card.color_identity, card.type_line, card.cmc, card.rarity, card.power, card.toughness);
                    arrayDeck.push(newCard);
                } else {
                    let newCard = new Card(card.name, card.prices.eur, card.set, card.color_identity, card.type_line, card.cmc, card.rarity);
                    arrayDeck.push(newCard);
                }
                DOM['templateDeck'].querySelector("img").setAttribute("src", card.image_uris.normal);
                DOM['templateDeck'].querySelector("img").setAttribute("alt", card.name);
                DOM['templateDeck'].querySelector("h5").textContent = card.name;
                DOM['templateDeck'].querySelector("p").textContent = card.prices.eur + "€";
                DOM['templateDeck'].querySelector("button").setAttribute("value", card.name);
                DOM['templateDeck'].querySelector("button").textContent = "Add to deck";
                DOM['templateDeck'].querySelector("button").id = card.id;
                const addNode = document.importNode(DOM['templateDeck'], true);
                fragment.appendChild(addNode);
            })
            DOM['cards'].append(fragment);
    });
}

/**
 * Funcion que añade una carta al mazo
 */
function addToDeck(id) {
    let found = arrayDeck.find(card => card = id);
    console.log(found);
    let deck = [];
    let card = JSON.stringify({
        name: found.name,
        deck: found.deck,
        price: found.price,
        amount: found.amount
    });
    console.log(card);
    deck.push(card);
    if (arrayDeck.includes(card)) {
        if (found.amount < 4) {
            found.amount + 1;
        } else {
            alert("No se puede añadir más de cuatro(4) cartas");
        }
    }
    deck.forEach(card => {
        DOM['templateTable'].querySelectorAll("td")[0].textContent = found.name;
        DOM['templateTable'].querySelectorAll("td")[1].textContent = found.price;
        DOM['templateTable'].querySelectorAll("td")[4].textContent = found.amount;
        const addNode = document.importNode(DOM['templateTable'], true);
        fragment.appendChild(addNode);
    });
    DOM['table'].append(fragment);
}