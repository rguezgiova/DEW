/**
 * Clase Personaje
 */
class PersonajeClass {
    nombres = [];

    /**
     * Constructor de la clase Personaje
     * @param nombres de los personajes
     */
    constructor(nombres) {
        if (nombres.contains(this.nombres)) {
            alert("El nombre que intenta añadir ya está en la lista");
        } else {
            this._nombres = nombres;
        }

    }

    /**
     * Getter de la clase Personaje
     */
    get getNombre() {
        return this._nombres;
    }

    /**
     * Setter de la clase Personaje
     */
    set setNombre(value) {
        this._nombres = value;
    }
}