class CriatureCard extends Card{
    /**
     * Constructor de la clase CriatureCard
     * @param name de la carta
     * @param price de la carta
     * @param deck al que pertenece
     * @param color de la carta
     * @param typeLine de la carta
     * @param manaCost de la carta
     * @param power de la carta
     * @param toughness de la carta
     */
    constructor(name, price, deck, color, typeLine, manaCost, power, toughness) {
        super(name, price, deck, color, typeLine, manaCost);
        this._power = power;
        this._toughness = toughness;
        this._name = name;
        this._price = price;
        this._deck = deck;
        this._color = color;
        this._typeLine = typeLine;
        this._manaCost = manaCost;
    }

    /**
     * Getters y Setters de la clase CriatureCard
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

    get power() {
        return this._power;
    }

    set power(value) {
        this._power = value;
    }

    get toughness() {
        return this._toughness;
    }

    set toughness(value) {
        this._toughness = value;
    }
}