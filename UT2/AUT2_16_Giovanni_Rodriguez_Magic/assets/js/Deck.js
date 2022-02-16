class Deck {
    /**
     * Constructor de la clase Deck
     * @param deck con las cartas seleccionadas
     */
    constructor(deck) {
        this._deck = deck;
    }

    /**
     * Getters y Setters de la clase Deck
     */
    get getDeck() {
        return this._deck;
    }

    addCard(card) {
        let existe = false;
        //Comprueba si se a alcanzado el maximo antes de agregarla
        if (this.checkMax()) {
            this.cards.forEach(element => {
                if (element[0].getId == card.getId) {
                    //Comprueba si se ha alcanza el limite de 4 cartas iguales
                    if (element[1] >= 4) {
                        alert4Cards(card.getName);
                        existe = true;
                    } else {
                        element[1]++;
                        existe = true;
                    }
                }
            });

            if (!existe) {
                this.cards.push([card, 1]);
            }
        }
    }

    removeCard(id) {
        let existe = false;

        //Comprueba si hay mas de una carta para solo eliminar 1
        this.cards.forEach(element => {
            if (element[0].getId == id && element[1] > 1) {
                element[1]--;
                existe = true;
            }
        });

        //Si solo hay una elimina la carta
        if(!existe) {
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i][0].getId == id) {
                    this.cards.splice(i, 1);
                }

            }
        }
    }

    checkMax() {
        let count = 0;

        this.cards.forEach(element => {
            count += element[1];
        });

        if (count == 60) {
            alertMaxCards();
            return false;
        } else {
            return true;
        }
    }
}