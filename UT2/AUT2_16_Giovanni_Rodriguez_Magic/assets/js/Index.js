const urls = {
    ugins: 'https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints',
    wd2016: 'https://api.scryfall.com/cards/search?order=set&q=e%3Aw16&unique=prints',
    wd2017: 'https://api.scryfall.com/cards/search?order=set&q=e%3Aw17&unique=prints',
    zendikar: 'https://api.scryfall.com/cards/search?order=set&q=e%3Azne&unique=prints',
    two: 'https://api.scryfall.com/cards/search?order=set&q=e%3Aitp&unique=prints'
}
let currentDeck;

/**
 * Función que recoge la lista de cartas desde la API
 * @param url para recoger las cartas
 * @returns {Promise<*>}
 */
async function fetchData(url) {
    const response = await (fetch(url));
    const data = await response.json();
    return data.data;
}

async function createSet(set) {
    const url = urls[set];
    let arrayCards = [];
    await fetchData(url).then(cards => {
        cards.forEach(card => {
            if (card.type_line.toLowerCase().includes('creature')) {
                arrayCards.push(new CreatureCard(card.id, card.name, card.prices['eur'], card.set_name, card.color, card.type_line, card.cmc, card.image_uris.png, card.scryfall_uri, card.rarity, card.power, card.toughness));
            } else {
                arrayCards.push(new Card(card.id, card.name, card.prices['eur'], card.set_name, card.color, card.type_line, card.cmc, card.image_uris.png, card.scryfall_uri, card.rarity))
            }
        });
    });
    return new Set(arrayCards);
}

async function createSets() {
    let arrayCards = [];
    for (const url in urls) {
        await fetchData(urls[url]).then(cards => {
            cards.forEach(card => {
                if (card.type_line.toLowerCase().includes('creature')) {
                    arrayCards.push(new CreatureCard(card.id, card.name, card.prices.eur, card.set_name, card.color, card.type_line, card.cmc, card.image_uris.png, card.scryfall_uri, card.rarity, card.power, card.toughness));
                } else {
                    arrayCards.push(new Card(card.id, card.name, card.prices.eur, card.set_name, card.color, card.type_line, card.cmc, card.image_uris.png, card.scryfall_uri, card.rarity))
                }
            });
        });
    }
    let sets = new Set(arrayCards);
    localStorage.setItem('sets', JSON.stringify(sets));
}

function checkEmpty(cards) {
    if (cards.length > 0) {
        document.getElementById('empty').style.display = 'none';
    } else {
        document.getElementById('empty').style.display = 'flex';
    }
}

function drawPage(set) {
    createSet(set).then(set => {
        let cards = set.getCards();
        let cardsContainer = document.getElementById('cards');
        cardsContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        cards.forEach(card => {
           let templateCards = document.querySelector('#template-card').content;
            templateCards.querySelectorAll('h3')[0].textContent = card.name;
            templateCards.querySelectorAll('p')[0].textContent = card.price + '€';
            templateCards.querySelectorAll('img')[0].src = card.image;
            templateCards.querySelectorAll('img')[0].setAttribute('value', card.id);
            templateCards.querySelectorAll('a')[0].setAttribute('value', card.id);
            const clone = templateCards.cloneNode(true);
            fragment.appendChild(clone);
        });
        cardsContainer.appendChild(fragment);
        localStorage.setItem('currentSet', JSON.stringify(set));
    });
}

function drawDeck() {
    let cardsContainer = document.getElementById('items');
    cardsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const cards = currentDeck.getCards();
    checkEmpty(cards);
    cards.forEach(card => {
       let templateTable = document.querySelector('#template-table').content;
        templateTable.querySelectorAll('td')[0].textContent = card.card.name;
        templateTable.querySelectorAll('td')[1].textContent = card.card.price;
        templateTable.querySelectorAll('td')[2].textContent = card.amount;
        templateTable.querySelectorAll('td')[3].querySelectorAll('button')[0].setAttribute('value', card.card.id);
        templateTable.querySelectorAll('td')[3].querySelectorAll('button')[1].setAttribute('value', card.card.id);
        templateTable.querySelectorAll('td')[4].textContent = (card.card.price * card.amount).toFixed(2);
        const clone = templateTable.cloneNode(true);
        fragment.appendChild(clone);
    });
    let tableTemplateFinal = document.querySelector('#table-template-final').content;
    tableTemplateFinal.querySelectorAll('td')[0].textContent = 'Total: ';
    tableTemplateFinal.querySelectorAll('td')[3].textContent = currentDeck.getDeckLength();
    tableTemplateFinal.querySelectorAll('td')[5].textContent = currentDeck.getTotalPrice().toFixed(2);
    const clone = tableTemplateFinal.cloneNode(true);
    fragment.appendChild(clone);
    cardsContainer.appendChild(fragment);
}

function drawHome() {
    let data = localStorage.getItem('currentDeck');
    if (data == null) {
        currentDeck = new Deck();
    } else {
        currentDeck = new Deck();
        currentDeck.deserialize(data);
    }
    drawDeck();
}

function drawDetail() {
    let data = localStorage.getItem('currentDeck');
    currentDeck = new Deck();
    currentDeck.deserialize(data);
    drawDeckDetail();
}

function drawDeckDetail() {
    let cards = currentDeck.getCards();
    let cardsContainer = document.getElementById('cards-detail');
    cardsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    cards.forEach(card => {
        let templateCards = document.querySelector('#template-card').content;
        templateCards.querySelectorAll('h3')[0].textContent = card.card.name;
        templateCards.querySelectorAll('p')[0].textContent = card.card.price;
        templateCards.querySelectorAll('img')[0].src = card.card.image;
        templateCards.querySelectorAll('a')[0].href = card.card.url;
        templateCards.querySelectorAll('p')[1].textContent = card.amount;
        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
    });
    cardsContainer.appendChild(fragment);
}

function drawSetFilter(cards) {
    let cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    cards.forEach(card => {
        let cardTemplate = document.querySelector('#template-card').content;
        cardTemplate.querySelectorAll('h3')[0].textContent = card.name;
        cardTemplate.querySelectorAll('p')[0].textContent = card.price;
        cardTemplate.querySelectorAll('img')[0].src = card.image;
        cardTemplate.querySelectorAll('img')[0].setAttribute('value', card.id);
        cardTemplate.querySelectorAll('a')[0].setAttribute('value', card.id);
        const clone = cardTemplate.cloneNode(true);
        fragment.appendChild(clone);
    });
    cardsContainer.appendChild(fragment);
}

function drawDeckFilter(cards) {
    let cardsContainer = document.getElementById('cards-detail');
    cardsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    cards.forEach(card => {
       let templateCards = document.querySelector('#template-card').content;
        templateCards.querySelectorAll('h3')[0].textContent = card.card.name;
        templateCards.querySelectorAll('p')[0].textContent = card.card.price;
        templateCards.querySelectorAll('img')[0].src = card.card.image;
        templateCards.querySelectorAll('a')[0].href = card.card.url;
        templateCards.querySelectorAll('p')[1].textContent = card.amount;
        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
    });
    cardsContainer.appendChild(fragment);
}

function addCard(id) {
    const data = JSON.parse(localStorage.getItem('currentSet'));
    console.log(data)
    const set = new Set(data.cards);
    console.log(set.getCard(id));
    currentDeck.add(set.getCard(id));
    localStorage.setItem('currentDeck', currentDeck.serialize());
    drawDeck();
}

function removeCard(id)  {
    const data = JSON.parse(localStorage.getItem('sets'));
    const set = new Set(data.cards);
    currentDeck.remove(set.getCard(id));
    localStorage.setItem('currentDeck', currentDeck.serialize());
    drawDeck();
}

function colorFilterSet(filter) {
    const data = JSON.parse(localStorage.getItem('currentSet'));
    const set = new Set(data.cards);
    let cardFilter;
    if (filter === 'A') {
        cardFilter = set.getCards();
    } else {
        cardFilter = set.colorFilter(filter);
    }
    drawSetFilter(cardFilter);
}

function manaCostFilterSet(filter) {
    const data = JSON.parse(localStorage.getItem('currentSet'));
    const set = new Set(data.cards);
    let cardFilter;
    if (filter === 'A') {
        cardFilter = set.getCards();
    } else {
        cardFilter = set.manaCostFilter(filter);
    }
    drawSetFilter(cardFilter);
}

function colorFilterDeck(filter) {
    let data = localStorage.getItem('currentDeck');
    let deck;
    let cardFilter;
    if (data === null) {
        deck = new Deck();
        cardFilter = deck.getCards();
    } else {
        deck = new Deck();
        deck.deserialize(data);
        if (filter === 'A') {
            cardFilter = deck.getCards();
        } else {
            cardFilter = deck.colorFilter(filter);
        }
        drawDeckFilter(cardFilter);
    }
}

function manaCostFilterDeck(filter) {
    let data = localStorage.getItem('currentDeck');
    let deck;
    let cardFilter;
    if (data === null) {
        deck = new Deck();
        cardFilter = deck.getCards();
    } else {
        deck = new Deck();
        deck.deserialize(data);
        if (filter === 'A') {
            cardFilter = deck.getCards();
        } else {
            cardFilter = deck.manaCostFilter(filter);
        }
        drawDeckFilter(cardFilter)
    }
}

function rarityFilterDeck(filter) {
    let data = localStorage.getItem('currentDeck');
    let deck;
    let cardFilter;
    if (data === null) {
        deck = new Deck();
        cardFilter = deck.getCards();
    } else {
        deck = new Deck();
        deck.deserialize(data);
        if(filter === 'A') {
            cardFilter = deck.getCards();
        } else {
            cardFilter = deck.rarityFilter(filter);
        }
        drawDeckFilter(cardFilter);
    }
}