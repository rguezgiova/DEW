class Deck {
    /**
     * Constructor de la clase Deck
     * @param deck con las cartas seleccionadas
     */
    constructor(deck) {
        this.deck = deck;
    }

    /**
     * Getters y Setters de la clase Deck
     */
    get getDeck() {
        return this.deck;
    }

    addCard(card) {
        let exist = false;
        if (this.checkMax()) {
            this.deck.forEach(element => {
                if (element[0].getId === card.getId) {
                    if (element[1] >= 4) {
                        alertMaxCardsChosen(card.getName);
                        exist = true;
                    } else {
                        element[1]++;
                        exist = true;
                    }
                }
            });
            if (!exist) {
                this.deck.push([card, 1]);
            }
        }
    }

    removeCard(id) {
        let exist = false;
        this.deck.forEach(element => {
            if (element[0].getId === id && element[1] > 1) {
                element[1]--;
                exist = true;
            }
        });
        if(!exist) {
            for (let i = 0; i < this.deck.length; i++) {
                if (this.deck[i][0].getId === id) {
                    this.deck.splice(i, 1);
                }

            }
        }
    }

    checkMax() {
        let count = 0;
        this.deck.forEach(element => {
            count += element[1];
        });
        if (count === 60) {
            alertMaxCards();
            return false;
        } else {
            return true;
        }
    }
}