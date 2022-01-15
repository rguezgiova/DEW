/**
 * Clase Persona
 */
var Persona = /** @class */ (function () {
    /**
     * Constructor de la clase persona
     * @param nombre de la persona
     */
    function Persona(nombre) {
        this.nombre = nombre;
    }
    return Persona;
}());
/**
 * Clase Salon
 */
var Salon = /** @class */ (function () {
    /**
     * Constructor de la clase Salon
     * @param nombre de la zona
     * @param frase de la zona
     */
    function Salon(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    return Salon;
}());
/**
 * Clase Cocina
 */
var Cocina = /** @class */ (function () {
    /**
     * Constructor de la clase Cocina
     * @param nombre de la zona
     * @param frase de la zona
     */
    function Cocina(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    return Cocina;
}());
/**
 * Clase Banio
 */
var Banio = /** @class */ (function () {
    /**
     * Constructor de la clase Banio
     * @param nombre de la zona
     * @param frase de la zona
     */
    function Banio(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    return Banio;
}());
/**
 * Clase Dormitorio
 */
var Dormitorio = /** @class */ (function () {
    /**
     * Constructor de la clase Dormitorio
     * @param nombre de la zona
     * @param frase de la zona
     */
    function Dormitorio(nombre, frase) {
        this.nombre = nombre;
        this.frase = frase;
    }
    return Dormitorio;
}());
var salon = new Salon("salon", ["está viendo la TV", "lee un libro", "está escuchando música"]);
var cocina = new Cocina("cocina", ["abre la nevera", "esta cocinando", "pone la mesa"]);
var banio = new Banio("baño", ["está duchándose", "se ducha", "se lava los dientes"]);
var dormitorio = new Dormitorio("dormitorio", ["duerme", "se está vistiendo", "juega a la consola"]);
/**
 * Función que genera una frase aleatoria
 * @param obj con la zona
 */
function fraseRandom(obj) {
    var hora = new Date();
    var random = Math.ceil(Math.random() * (obj.frase.length - 0) + 0) - 1;
    return " " + obj.frase[random] + " en el " + obj.nombre + " desde las " + hora.getHours() + ":" + hora.getMinutes() + "h";
}
var habitacion = document.getElementById("buttons");
/**
 * Evento que al hacer click en un botón genera la frase con la zona del botón seleccionado
 */
habitacion.addEventListener("click", function (e) {
    var persona = document.getElementById("names").value;
    if (persona != "") {
        var nombre = new Persona(persona);
        var habitacion_1 = e.target.value;
        var input = nombre.nombre;
        if (habitacion_1 === "salon") {
            input += fraseRandom(salon);
            console.log(input);
        }
        else if (habitacion_1 === "cocina") {
            input += fraseRandom(cocina);
            console.log(input);
        }
        else if (habitacion_1 === "banio") {
            input += fraseRandom(banio);
            console.log(input);
        }
        else if (habitacion_1 == "dormitorio") {
            input += fraseRandom(dormitorio);
            console.log(input);
        }
        document.getElementById("input").value += input + "\n\n";
    }
});
