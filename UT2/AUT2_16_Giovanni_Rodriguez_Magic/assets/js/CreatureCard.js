class CreatureCard extends Card {
    constructor(id, name, price, set, color, type, cost, img, url, rarity, power, toughness) {
        super(id, name, price, set, color, type, cost, img, url, rarity);
        this.power = power;
        this.toughness = toughness;
    }
}