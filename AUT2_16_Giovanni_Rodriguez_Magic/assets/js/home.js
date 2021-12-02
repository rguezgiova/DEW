const fragment = document.createDocumentFragment();
const DOM = {
    template: document.getElementById("deck-template").content,
    cards: document.getElementById("cards"),
}
let urls = [
    'https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints',
    'https://api.scryfall.com/cards/search?order=set&q=e%3Aw17&unique=prints',
    'https://api.scryfall.com/cards/search?order=set&q=e%3Aw16&unique=prints',
    'https://api.scryfall.com/cards/search?order=set&q=e%3Azne&unique=prints',
    'https://api.scryfall.com/cards/search?order=set&q=e%3Aitp&unique=prints'
];

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
                DOM['template'].querySelector("img").setAttribute("src", card.image_uris.normal);
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