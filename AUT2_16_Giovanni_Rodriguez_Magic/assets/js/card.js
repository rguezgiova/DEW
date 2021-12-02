class Card {
    /**
     * Constructor de la clase Card
     * @param name de la carta
     * @param price de la carta
     * @param deck al que pertenece la carta
     * @param color de la carta
     * @param timeline de la carta
     * @param manaCost de la carta
     */
    constructor(name, price, deck, color, timeline, manaCost) {
        this._name = name;
        this._price = price;
        this._deck = deck;
        this._color = color;
        this._timeline = timeline;
        this._manaCost = manaCost;
    }

    /**
     * Getters y Setters de la clase Card
     */
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get deck() {
        return this._deck;
    }

    set deck(value) {
        this._deck = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get timeline() {
        return this._timeline;
    }

    set timeline(value) {
        this._timeline = value;
    }

    get manaCost() {
        return this._manaCost;
    }

    set manaCost(value) {
        this._manaCost = value;
    }
}