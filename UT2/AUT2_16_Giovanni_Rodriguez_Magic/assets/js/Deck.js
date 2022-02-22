class Deck {
    cards = [];

    getCards() {
        return this.cards;
    }

    getDeckLength() {
        let length = 0;
        this.cards.forEach(card => {
            length += card.amount;
        });
        return length;
    }

    addCard(card) {
        const foundedCard = this.cards.find(element => element.cards.id === id);
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

    removeCard(card) {
        const foundedCard = this.cards.find(element => element.cards.id === id);
        if (foundedCard.amount > 1) {
            foundedCard.amount--;
        } else {
            this.cards.splice(this.cards.indexOf(foundedCard), 1);
        }
    }

    getTotalPrice() {
        let price = 0;
        this.cards.forEach(card => {
            price += card.card.price * card.amount;
        });
        return price;
    }

    serialize() {
        return JSON.stringify(this);
    }

    deserialize(data) {
        const object = JSON.parse(data);
        object.cards.forEach(card => {
            for (let i = 0; i < card.amount; i++) {
                this.addCard(card.card);
            }
        });
    }

    colorFilter(filter) {
        let tmpArrayCards = [];
        if (filter === '') {
            this.cards.forEach(card => {
                if (card.card.colors.length === 0) {
                    tmpArrayCards.push(card);
                }
            });
        } else {
            this.cards.forEach(card => {
                if (card.card.colors.includes(filter)) {
                    tmpArrayCards.push(card);
                }
            });
        }
        return tmpArrayCards;
    }

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

    rarityFilter(filter) {
        let tmpArrayCards = [];
        this.cards.forEach(card => {
            if (card.card.rarity === filter) {
                tmpArrayCards.push(card);
            }
        });
        return tmpArrayCards;
    }
}
