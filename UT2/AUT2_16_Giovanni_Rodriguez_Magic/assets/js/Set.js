class Set {
    constructor(cards) {
        if (cards === undefined) {
            this.cards = [];
        } else {
            this.cards = cards;
        }
    }

    /**
     * Función que devuelve la lista de cartas
     * @returns {[]|*}
     */
    getCards() {
        return this.cards;
    }

    /**
     * Función que devuelve una carta según su id
     * @param id de la carta
     * @returns
     */
    getCard(id) {
        return this.cards.find(card => card.id === id);
    }

    /**
     * Función que filtra las cartas según su color
     * @param filter utilizado
     * @returns {*[]}
     */
    colorFilter(filter) {
        let tmpArrayCards = [];
        if (filter === '') {
            this.cards.forEach(card => {
                if (card.color.length === 0) {
                    tmpArrayCards.push(card);
                }
            });
        } else {
            this.cards.forEach(card => {
                if (card.color.includes(filter)) {
                    tmpArrayCards.push(card);
                }
            })
        }
        return tmpArrayCards;
    }

    /**
     * Función que filtra las cartas según si coste
     * @param filter utilizado
     * @returns {*[]}
     */
    manaCostFilter(filter) {
        let tmpArrayCards = [];
        this.cards.forEach(card => {
            if (filter === 1) {
                if (card.cost <= filter) {
                    tmpArrayCards.push(card);
                }
            } else if (filter === 6) {
                if (card.cost >= filter) {
                    tmpArrayCards.push(card);
                }
            } else {
                if (card.cost === filter) {
                    tmpArrayCards.push(card);
                }
            }
        });
        return tmpArrayCards;
    }
}