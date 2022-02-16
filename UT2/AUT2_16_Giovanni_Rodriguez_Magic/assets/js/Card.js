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
     * @param power de la carta
     * @param toughness de la carta
     * @param img de la carta
     * @param url de la carta
     * @param rarity de la carta
     */
    constructor(id, name, price, set, color, type, cost, power = null, toughness = null, img, url, rarity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.set = set;
        this.color = color;
        this.type = type;
        this.cost = cost;
        this.power = power;
        this.toughness = toughness;
        this.img = img;
        this.url = url;
        this.rarity = rarity;
    }

    /**
     * Getters y Setters de la clase Card
     */
    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getPrice() {
        return this.price;
    }

    get getSet() {
        return this.set;
    }

    get getColor() {
        return this.color;
    }

    get getType() {
        return this.type;
    }

    get getCost() {
        return this.cost;
    }

    get getPower() {
        return this.power;
    }

    get getToughness() {
        return this.toughness;
    }

    get getImg() {
        return this.img;
    }

    set setImg(img) {
        this.img = img;
    }

    get getUrl() {
        return this.url;
    }

    get getRarity() {
        return this.rarity;
    }
}