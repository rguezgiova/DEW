class Card {
    /**
     * Constructor de la clase Card
     * @param name de la carta
     * @param price de la carta
     * @param deck al que pertenece la carta
     * @param color de la carta
     * @param typeLine de la carta
     * @param manaCost de la carta
     * @param rarity de la carta
     * @param amount de la carta
     */
    constructor(name, price, deck, color, typeLine, manaCost, rarity, amount = 1) {
        this._name = name;
        this._price = price;
        this._deck = deck;
        this._color = color;
        this._typeLine = typeLine;
        this._manaCost = manaCost;
        this._rarity = rarity;
        this._amount = amount;
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

    get rarity() {
        return this._rarity;
    }

    get amount() {
        return this._amount;
    }

    set color(value) {
        this._color = value;
    }

    get typeLine() {
        return this._typeLine;
    }

    set typeLine(value) {
        this._typeLine = value;
    }

    get manaCost() {
        return this._manaCost;
    }

    set manaCost(value) {
        this._manaCost = value;
    }

    set rarity(value) {
        this._rarity = value;
    }

    set amount(value) {
        this._amount = value;
    }
}