class Card {
    /**
     * Constructor de la clase Card
     * @param id de la carta
     * @param name de la carta
     * @param price de la carta
     * @param deck al que pertenece la carta
     * @param color de la carta
     * @param type de la carta
     * @param cost de la carta
     * @param rarity de la carta
     * @param power de la carta
     * @param toughness de la carta
     * @param image de la carta
     * @param quantity de la carta
     */
    constructor(id, name, price, deck, color, type, cost, rarity, power, toughness, image, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.deck = deck;
        this.color = color;
        this.type = type;
        this.cost = cost;
        this.rarity = rarity;
        this.power = power;
        this.toughness = toughness;
        this.image = image;
        this.quantity = quantity;
    }
}