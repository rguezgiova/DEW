class Deck {
    /**
     * Constructor de la clase Deck
     * @param userDeck con las cartas
     */
    constructor(userDeck = []) {
        this.userDeck = userDeck;
    }

    /**
     * Función que añade una carta del mazo
     * @param card a añadir
     */
    addCard(card) {
        this.userDeck.push(card);
    }

    /**
     * Función que elimina una carta del mazo
     * @param card a eliminar
     */
    removeCard(card) {
        const index = this.userDeck.indexOf(card);
        if (index > -1) {
            this.userDeck.splice(index, 1);
        }
    }

    /**
     * Función que devuelve el Deck
     * @returns {*[]}
     */
    getDeck() {
        return this.userDeck;
    }
}