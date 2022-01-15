/**
 * Clase Persona
 */
class Persona {
    nombre: string;

    /**
     * Constructor de la clase persona
     * @param nombre de la persona
     */
    constructor(nombre:string) {
        this.nombre = nombre;
    }
}

/**
 * Interfaz Zona
 */
interface Zona {
    nombre: string;
    frase: string[];
}

/**
 * Clase Salon
 */
class Salon implements Zona {
    nombre: string;
    frase: string[];

    /**
     * Constructor de la clase Salon
     * @param nombre de la zona
     * @param frase de la zona
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }
}

/**
 * Clase Cocina
 */
class Cocina implements Zona {
    nombre: string;
    frase: string[];

    /**
     * Constructor de la clase Cocina
     * @param nombre de la zona
     * @param frase de la zona
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }
}

/**
 * Clase Banio
 */
class Banio implements Zona {
    nombre: string;
    frase: string[];

    /**
     * Constructor de la clase Banio
     * @param nombre de la zona
     * @param frase de la zona
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }
}

/**
 * Clase Dormitorio
 */
class Dormitorio implements Zona {
    nombre: string;
    frase: string[];

    /**
     * Constructor de la clase Dormitorio
     * @param nombre de la zona
     * @param frase de la zona
     */
    constructor(nombre: string, frase: string[]) {
        this.nombre = nombre;
        this.frase = frase;
    }
}

let salon = new Salon("salon", ["está viendo la TV", "lee un libro", "está escuchando música"]);
let cocina =  new Cocina("cocina",["abre la nevera", "esta cocinando", "pone la mesa"]);
let banio = new Banio("baño", ["está duchándose", "se ducha", "se lava los dientes"]);
let dormitorio = new Dormitorio("dormitorio", ["duerme", "se está vistiendo", "juega a la consola"]);

/**
 * Función que genera una frase aleatoria
 * @param obj con la zona
 */
function fraseRandom(obj:Zona) {
    var hora = new Date();
    let random = Math.ceil(Math.random() * (obj.frase.length - 0) + 0) - 1;
    return " " + obj.frase[random] + " en el " + obj.nombre + " desde las " + hora.getHours() + ":" + hora.getMinutes() + "h";
}

const habitacion = document.getElementById("buttons");

/**
 * Evento que al hacer click en un botón genera la frase con la zona del botón seleccionado
 */
habitacion.addEventListener("click", e => {
    let persona = (<HTMLSelectElement>document.getElementById("names")).value;
    if (persona != "") {
        let nombre = new Persona(persona);
        let habitacion = (<HTMLInputElement>e.target).value;
        let input = nombre.nombre;
        if (habitacion === "salon") {
            input += fraseRandom(salon);
            console.log(input);
        } else if (habitacion === "cocina") {
            input += fraseRandom(cocina);
            console.log(input);
        } else if (habitacion === "banio") {
            input += fraseRandom(banio);
            console.log(input);
        } else if (habitacion == "dormitorio") {
            input += fraseRandom(dormitorio);
            console.log(input);
        }
        (<HTMLInputElement>document.getElementById("input")).value += input + "\n\n";
    }
});