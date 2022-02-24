class Deck {
    cards = [];

    /**
     * Función que devuelve las cartas
     * @returns {*[]}
     */
    getCards() {
        return this.cards;
    }

    /**
     * Función que calcula el tamaño del mazo
     * @returns {number} tamaño del mazo
     */
    getDeckLength() {
        let length = 0;
        this.cards.forEach(card => {
            length += card.amount;
        });
        return length;
    }

    /**
     * Función que añade una carta al mazo
     * @param card a añadir
     */
    addCard(card) {
        const foundedCard = this.cards.find(element => element.card.id === id);
        if (this.getDeckLength() < 60) {
            if (foundedCard === undefined) {
                this.cards.push({
                    'amount': 1,
                    'card': card
                });
            } else {
                if (foundedCard.amount < 4) {
                    foundedCard.amount++;
                }
            }
        }
    }

    /**
     * Función que elimina una carta del mazo
     * @param card a eliminar
     */
    removeCard(card) {
        const foundedCard = this.cards.find(element => element.card.id === id);
        if (foundedCard.amount > 1) {
            foundedCard.amount--;
        } else {
            this.cards.splice(this.cards.indexOf(foundedCard), 1);
        }
    }

    /**
     * Función que calcula el precio del mazo
     * @returns {number} precio del mazo
     */
    getTotalPrice() {
        let price = 0;
        this.cards.forEach(card => {
            price += card.card.price * card.amount;
        });
        return price;
    }

    /**
     * Función que transforma el objeto en formato JSON
     * @returns {string}
     */
    serialize() {
        return JSON.stringify(this);
    }

    /**
     * Función que transforma el JSON en objeto
     * @param data
     */
    deserialize(data) {
        const object = JSON.parse(data);
        object.cards.forEach(card => {
            for (let i = 0; i < card.amount; i++) {
                this.addCard(card.card);
            }
        });
    }

    /**
     * Función que filtra el mazo según su color
     * @param filter utilizado
     * @returns {*[]}
     */
    colorFilter(filter) {
        let tmpArrayCards = [];
        if (filter === '') {
            this.cards.forEach(card => {
                if (card.card.color.length === 0) {
                    tmpArrayCards.push(card);
                }
            });
        } else {
            this.cards.forEach(card => {
                if (card.card.color.includes(filter)) {
                    tmpArrayCards.push(card);
                }
            });
        }
        return tmpArrayCards;
    }

    /**
     * Función que filtra el mazo según su coste
     * @param filter utilizado
     * @returns {*[]}
     */
    manaCostFilter(filter) {
        let tmpArrayCards = [];
        this.cards.forEach(card => {
            if (filter === 1) {
                if (card.card.cost <= filter) {
                    tmpArrayCards.push(card);
                }
            } else if (filter === 6) {
                if (card.card.cost >= filter) {
                    tmpArrayCards.push(card);
                }
            } else {
                if (card.card.cost === filter) {
                    tmpArrayCards.push(card);
                }
            }
        });
        return tmpArrayCards;
    }

    /**
     * Función que filtra el mazo según su rareza
     * @param filter utilizado
     * @returns {*[]}
     */
    rarityFilter(filter) {
        let tmpArrayCards = [];
        this.cards.forEach(card => {
            if (card.card.rarity == filter) {
                tmpArrayCards.push(card);
            }
        });
        return tmpArrayCards;
    }
}
