window.onload = () => {
    var userDeck = new Deck(JSON.parse(localStorage.getItem('userDeck')));
    if (userDeck) {
        drawCard(userDeck);
        getColor(userDeck);
    }
}

/**
 * Función que muestra las cartas del mazo
 */
function drawCard(userDeck) {
    let cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = '';
    const fragment = document.createDocumentFragment();
    let templateCards = document.querySelector('#template-card').content;
    userDeck.getDeck().forEach(card => {
        templateCards.querySelectorAll('h3')[0].textContent = card.name;
        templateCards.querySelectorAll('p')[0].textContent = card.price + '€';
        templateCards.querySelectorAll('img')[0].src = card.image;
        templateCards.querySelectorAll('img')[0].setAttribute('value', card.id);
        const clone = templateCards.cloneNode(true);
        fragment.appendChild(clone);
    })
    document.getElementById('cards').append(fragment);
}

/**
 * Función que recoge el color de la carta
 * @param userDeck del usuario
 */
function getColor(userDeck) {
    let select = document.getElementById('select-color');
    select.addEventListener('change', function () {
        switch (select.value) {
            case 'W':
                drawCard(getFilterColor(userDeck, select.value));
                break;
            case 'U':
                drawCard(getFilterColor(userDeck, select.value));
                break;
            case 'B':
                drawCard(getFilterColor(userDeck, select.value));
                break;
            case 'R':
                drawCard(getFilterColor(userDeck, select.value));
                break;
            case 'G':
                drawCard(getFilterColor(userDeck, select.value));
                break;
            case 'X':
                drawCard(getFilterColor(userDeck, select.value));
                break;
            default:
                drawCard(userDeck);
        }
    });
}

/**
 * Función que filtra el color
 * @param userDeck del usuario
 * @param value del color
 * @returns {Deck}
 */
function getFilterColor(userDeck, value) {
    let tmpArray = [];
    userDeck.getDeck().forEach(card => {
        if (card.color == value) {
            tmpArray.push(card);
        }
    });
    return new Deck(tmpArray);
}