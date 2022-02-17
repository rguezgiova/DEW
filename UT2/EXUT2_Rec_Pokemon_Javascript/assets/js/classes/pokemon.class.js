class PokemonClass extends CreatureClass{
    level;

    /**
     * Constructor de la clase Pokemon
     * @param type del Pokemon
     * @param race del Pokemon
     * @param name del Pokemon
     */
    constructor(type, race, name) {
        super(type, race, name);
        this.level = this.getRandomLevel(1, 10);
    }

    getRandomLevel(min, max) {
        return Math.random() * (min - max) + 1;
    }
}