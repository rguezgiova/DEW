var myDeck = loadDeck();

/**
 * Función que busca una determinada carta por su id y la agrega al mazo
 * @param id
 */
function addMyDeck(id) {
    deck.getCards.forEach(card => {
        if (card[0].getId == id) {
            myDeck.addCard(card[0]);
            saveDeck(myDeck);
        }
    });
    drawChosen(myDeck.getCards);
}

/**
 * Función que elimina una carta del mazo
 * @param id de la carta
 */
function removeMyDeck(id) {
    console.log(id);

    myDeck.removeCard(id);
    saveDeck(myDeck);

    drawChosen(myDeck.getCards);
}

/**
 * Función que guarda el mazo
 * @param deck a guardar
 */
function saveDeck(deck) {
    localStorage.setItem("MyDeck", JSON.stringify(deck));
}

/**
 * Función que carga el mazo
 * @returns {Deck} cargado
 */
function loadDeck() {
    let loadData = JSON.parse(localStorage.getItem("MyDeck"));

    let deck = new Deck();
    if (loadData != null) {
        if (loadData.cards.length == 0) {
            saveDeck(deck);
        } else {
            let cards = loadData['cards'];
            deck = jsonToDeck(cards);
        }
    } else {
        saveDeck(deck);
    }
    return deck;
}

/**
 * Función que transforma el Json al objeto Deck
 * @param cards json de las cartas
 * @returns {Deck} objeto con las cartas
 */
function jsonToDeck(cards) {
    let tmpCards = [];
    cards.forEach(element => {
        let id = element[0].id;
        let name = element[0].name;
        let price = element[0].price;
        let set = element[0].set;
        let color = element[0].color;
        let type = element[0].type;
        let cost = element[0].cost;
        let power = element[0].power;
        let toughness = element[0].toughness;
        let img = element[0].img;
        let url = element[0].url;
        let rarity = element[0].rarity;
        let card = new Card(id, name, price, set, color, type, cost, power, toughness, img, url, rarity);
        let count = element[1];

        tmpCards.push([card, count]);
    });
    return new Deck(tmpCards);
}

/**
 * Función que filtra el mazo según su color
 * @param color a filtrar
 * @param cost a filtrar
 */
function filterDeck(color, cost) {
    let filteredDeck = [];

    console.log(color);
    if (color != "all" && cost != "") {
        myDeck.getCards.forEach(element => {
            if (element[0].getColor == color && element[0].getCost == cost) {
                filteredDeck.push(element);
            }
        });
    } else if (color != "all") {
        myDeck.getCards.forEach(element => {
            if (element[0].getColor == color) {
                filteredDeck.push(element);
            }
        });
    } else if (cost != "") {
        myDeck.getCards.forEach(element => {
            if (element[0].getCost == cost) {
                filteredDeck.push(element);
            }
        });
    }

    drawMyDeck(filteredDeck);
}