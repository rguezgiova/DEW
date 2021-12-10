class Deck {
    /**
     * Constructor de la clase Deck
     * @param deck con las cartas seleccionadas
     */
    constructor(deck) {
        this._deck = deck;
    }

    /**
     * Getters y Setters de la clase Deck
     */
    get deck() {
        return this._deck;
    }

    set deck(value) {
        this._deck = value;
    }
}