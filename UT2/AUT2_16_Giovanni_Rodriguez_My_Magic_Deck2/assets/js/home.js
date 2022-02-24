var userDeck = new Deck();

window.onload = () => {
    getSet('https://api.scryfall.com/cards/search?order=set&q=e%3Aw16&unique=prints');
    let sets = document.querySelectorAll('#sets li');
    const getLink = (e) => {
        e.preventDefault();
        getSet(e.target.href);
    }
    sets.forEach(set => {
        set.addEventListener('click', getLink)
    });

    function getSet(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { drawCard(data.data);  });
    }
    drawTable();
    removeFromDeck();
}

/**
 * Función que crea los elementos con los datos
 */
function drawCard(data) {
    var cardsPack = new Deck();
    let cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    const fragment = document.createDocumentFragment();
    let templateCards = document.querySelector('#template-card').content;
    data.forEach(card => {
        let newCard = new Card(card.id, card.name, card.prices.eur, card.set_name, card.colors, card.type_line, card.cmc, card.rarity, card.power, card.toughness, card.image_uris.normal, 1);
        templateCards.querySelectorAll('h3')[0].textContent = newCard.name;
        templateCards.querySelectorAll('p')[0].textContent = newCard.price + '€';
        templateCards.querySelectorAll('img')[0].src = newCard.image;
        templateCards.querySelectorAll('img')[0].setAttribute('value', newCard.id);
        templateCards.querySelectorAll('button')[0].setAttribute('id', newCard.id);
        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
        cardsPack.addCard(newCard);
    })
    document.getElementById('cards').append(fragment);
    addToDeck(cardsDiv, cardsPack);
}

/**
 * Función que pinta las cartas seleccionadas
 */
function drawTable() {
    if (localStorage.getItem('userDeck')) {
        let tmpUserDeck = new Deck(JSON.parse(localStorage.getItem('userDeck')));
        let items = document.getElementById('items');
        let totalPrice = 0;
        items.innerHTML = '';
        const fragment = document.createDocumentFragment();
        let templateTable = document.querySelector('#table-template').content;
        tmpUserDeck.getDeck().forEach(card => {
            totalPrice = (card.price * card.quantity);
            templateTable.querySelectorAll('tr')[0].id = card.id;
            templateTable.querySelectorAll('td')[0].textContent = card.name;
            templateTable.querySelectorAll('td')[1].textContent = card.price;
            templateTable.querySelectorAll('td')[3].textContent = card.quantity;
            templateTable.querySelectorAll('td')[4].textContent = totalPrice.toFixed(2);
            const clone = templateTable.cloneNode(true);
            fragment.appendChild(clone);
        });
        items.appendChild(fragment);
        localStorage.setItem('userDeck', JSON.stringify(tmpUserDeck.getDeck()));
    }
}

/**
 * Función que añade una carta al mazo
 * @param cardsDiv con las cartas
 * @param cardsPack mazo
 */
function addToDeck(cardsDiv, cardsPack){
    if(localStorage.getItem('userDeck')){
        userDeck = new Deck(JSON.parse(localStorage.getItem('userDeck')));
    }
    let buttonList = cardsDiv.querySelectorAll('button.btn');
    buttonList.forEach(button => {
        button.addEventListener('click', function(){
            let foundCard = getCard(this.id, cardsPack.getDeck());
            if (getDeckLength() < 60) {
                if (!foundCard) {
                    userDeck.addCard(foundCard);
                } else {
                    userDeck.removeCard(foundCard);
                    userDeck.quantity += 1;
                    userDeck.addCard(foundCard);
                }
                localStorage.setItem('userDeck', JSON.stringify(userDeck.getDeck()));
                drawTable();
            } else {
                alert('Has llegado al número máximo de cartas');
            }
        });
    });
}

/**
 * Función para eliminar una carta del mazo
 */
function removeFromDeck() {
    let dataStorage = new Deck(JSON.parse(localStorage.getItem('userDeck')));
    let items = document.getElementById('items');
    let arrayButton = items.querySelectorAll('.menos');
    arrayButton.forEach(button => {
        button.addEventListener('click', function () {
            let row = button.parentElement.parentElement;
            let cardId = button.parentElement.parentElement.id;
            let foundCard = getCard(cardId, dataStorage.getDeck());
            dataStorage.removeCard(foundCard);
            row.innerHTML = '';
            localStorage.setItem('userDeck', JSON.stringify(dataStorage.getDeck()));
            drawTable();
        });
    });
}

/**
 * Función que recoge una carta según su id
 * @param id de la carta
 * @param cardsPack mazo seleccionado
 */
function getCard(id, cardsPack) {
    var foundCard = null;
    cardsPack.forEach(card => {
        if (card.id == id) {
            foundCard = card;
        }
    });
    return foundCard;
}

/**
 * Función que calcula el total de cartas en el mazo
 * @returns {number} de cartas en el mazo
 */
function getDeckLength() {
    let dataStorage = new Deck(JSON.parse(localStorage.getItem('userDeck')));
    let totalLenght = 0;
    dataStorage.getDeck().forEach(card => {
        totalLenght += card.quantity;
    });
    return totalLenght;
}