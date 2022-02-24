class Card {
    /**
     * Constructor de la clase Card
     * @param id de la carta
     * @param name de la carta
     * @param price de la carta
     * @param set de la carta
     * @param color de la carta
     * @param type de la carta
     * @param cost de la carta
     * @param image de la carta
     * @param url de la carta
     * @param rarity de la carta
     */
    constructor(id, name, price, set, color, type, cost, image, url, rarity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.set = set;
        this.color = color;
        this.type = type;
        this.cost = cost;
        this.image = image;
        this.url = url;
        this.rarity = rarity;
    }
}