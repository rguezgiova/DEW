class CreatureClass {
    type;
    race;
    name;

    /**
     * Constructor de la clase Creature
     * @param type de la criatura
     * @param race de la criatura
     * @param name de la criatura
     */
    constructor(type, race, name) {
        this.type = type;
        this.race = race;
        if (this.validateName(name)) {
            this.name = name;
        } else {
            alert('Inserte un nombre válido');
        }
    }


    get getType() {
        return this.type;
    }

    set type(value) {
        this.type = value;
    }

    get getRace() {
        return this.race;
    }

    set race(value) {
        this.race = value;
    }

    get getName() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    validateName(name) {
        let pattern = '^@[aA-zZ]/g';
        pattern.exec(name);
        return name;
    }
}