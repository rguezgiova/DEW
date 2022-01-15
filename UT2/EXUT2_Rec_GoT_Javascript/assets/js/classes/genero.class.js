/**
 * Clase generoClass
 */
class Genero {
    /**
     * Constructor de la clase Genero
     * @param genero a definir
     */
    constructor(genero) {
        this._genero = genero;
    }

    /**
     * Getter de la clase Genero
     */
    get genero() {
        return this._genero;
    }

    /**
     * Setter de la clase Genero
     */
    set genero(value) {
        this._genero = value;
    }
}