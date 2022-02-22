class Set {
    constructor(cards) {
        if (cards === undefined) {
            this.cards = [];
        } else {
            this.cards = cards;
        }
    }

    getCards() {
        return this.cards;
    }

    getCard(id) {
        return this.cards.find(card => card.id === id);
    }

    colorFilter(filter) {
        let tmpArrayCards = [];
        if (filter === '') {
            this.cards.forEach(card => {
                if (card.colors.length === 0) {
                    tmpArrayCards.push(card);
                }
            });
        } else {
            this.cards.forEach(card => {
                if (card.colors.includes(filter)) {
                    tmpArrayCards.push(card);
                }
            })
        }
        return tmpArrayCards;
    }

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