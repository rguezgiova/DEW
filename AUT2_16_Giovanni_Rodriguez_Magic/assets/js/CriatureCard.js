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
    }
}