/**
 * Crea un objeto o clase Persona, con 6 propiedades 
 * como: nombre (string), edad (int), sexo (Boolean). 
 * Validar que el nombre sea siempre una cadena y cumpla 
 * unos requisitos mínimos y que la edad no sea negativa. 
 * Cada vez que seteemos una propiedad, validar los datos entrantes. 
 * 
 * Mostrar todos sus atributos que sean enteros.
 */
class Persona {
    nombre;
    apellidos;
    dni;
    edad;
    sexo;
    email;

    /**
     * Constructor de la clase Persona
     * @param {*} nombre de la persona
     * @param {*} apellidos de la persona
     * @param {*} dni de la persona
     * @param {*} edad de la persona
     * @param {*} sexo de la persona
     * @param {*} email de la persona
     */
    constructor(nombre, apellidos, dni, edad, sexo, email) {
        this.nombre = typeof(nombre) == 'string';
        this.apellidos = apellidos;
        this.dni = dni;
        this.edad = edad;
        this.sexo = sexo;
        this.email = email;
    }

    /**
     * Getter y Setter de nombre
     */
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        if (nombre == "") {
            console.log("El nombre está vacío");
        } else {
            nombre;
        }
    }

    /**
     * Getter y Setter de apellido
     */
    get getApellidos() {
        return this.apellidos;
    }

    set setApellidos(apellidos) {
        if (apellidos == "") {
            console.log("Los apellidos están vacío");
        } else {
            apellidos;
        }
    }
    
    /**
     * Getter y Setter de dni
     */
    get getDni() {
        return this.dni;
    }

    set setDni(dni) {
        if (dni == "") {
            console.log("El DNI está vacío");
        } else {
            dni;
        }
    }
    
    /**
     * Getter y Setter de edad
     */
    get getEdad() {
        return this.edad;
    }

    set setEdad(edad) {
        if (edad < 0) {
            console.log("La edad es menor a 0");
        } else {
            edad;
        }
    }
    
    /**
     * Getter y Setter de sexo
     */
    get getSexo() {
        return this.sexo;
    }

    set setSexo(sexo) {
        if (sexo == "") {
            console.log("El sexo está vacío");
        } else {
            sexo;
        }
    }
    
    /**
     * Getter y Setter de email
     */
    get getEmail() {
        return this.email;
    }

    set setEmail(email) {
        if (email == "") {
            console.log("El email está vacío");
        } else {
            email;
        }
    }
}

/**
 * Creacion del objeto Persona
 */
let persona = new Persona("Jose", "Ruiz", "12345678A", 21, "Hombre", "as@as.as");

/**
 * Bucle que recorre todos las keys de persona y muestra las que son de tipo numero
 */
for (parametro of Object.keys(persona)){
    if (typeof(persona[parametro]) == 'number') {
        console.log(persona[parametro]);
    }
}