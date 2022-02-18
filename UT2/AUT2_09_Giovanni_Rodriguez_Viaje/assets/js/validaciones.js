class Formulario {
    /**
     * Constructor de la clase Formulario
     * @param nombre de la persona
     * @param apellidos de la persona
     * @param dni de la persona
     * @param cp de la persona
     * @param fijo de la persona
     * @param movil de la persona
     * @param fecha de la persona
     * @param email de la persona
     * @param matricula de la persona
     * @param motivo de la persona
     */
    constructor(nombre, apellidos, dni, cp, fijo, movil, fecha, email, matricula, motivo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.cp = cp;
        this.fijo = fijo;
        this.movil = movil;
        this.fecha = fecha;
        this.email = email;
        this.matricula = matricula;
        this.motivo = motivo;
    }
}

/**
 * Función encargada de que si hay algún input incorrecto deshabilita el submit y los marca en rojo
 * @param id del input
 */
function inputError(id) {
    document.getElementById(id).classList.remove("valido");
    document.getElementById(id).classList.add("error");
    document.getElementById("boton").disabled = true;
}

/**
 * Función encargada de que si los inputs son correctos habilita el submit y los marca en verde
 * @param id del input
 */
function inputValido(id) {
    document.getElementById(id).classList.remove("error");
    document.getElementById(id).classList.add("valido");
    document.getElementById("boton").disabled = false;
}

/**
 * Función encargada de validar un nombre
 * @param nombre a validar
 * @returns {boolean} según si es válido o no
 */
function validarNombre(nombre) {
    let pattern = /^[A-Z]+(\s[A-Z]+)*$/i;

    if (pattern.test(nombre)) {
        inputValido('nombre');
        return true;
    } else {
        inputError('nombre');
        alert('El nombre introducido no es válido');
        return false;
    }
}

/**
 * Función encargada de validar unos apellidos
 * @param apellidos a validar
 * @returns {boolean} según si es válido o no
 */
function validarApellidos(apellidos) {
    let pattern = /^[A-Z]+(\s[A-Z]+)*$/i;

    if (pattern.test(apellidos)) {
        inputValido('apellidos');
        return true;
    } else {
        inputError('apellidos');
        alert('Los apellidos introducidos no son válidos');
        return false;
    }
}

/**
 * Función encargada de validar un dni
 * @param dni a validar
 * @returns {boolean} según si es válido o no
 */
function validarDni(dni) {
    let pattern = /^\d{8}[A-Z]$/i;
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (pattern.test(dni)) {
        let numero = dni.substring(0, dni.length - 1);
        let letra = dni.substring(dni.length -1, dni.length);
        let posicion = numero % 23;
        let letraDni = letras.substring(posicion, posicion + 1);

        if (letra.toLowerCase() !== letraDni.toLowerCase()) {
            inputError('dni');
            alert('El DNI introducido no es válido');
            return false;
        } else {
            inputValido('dni');
            return true;
        }
    } else {
        inputError('dni');
        alert('El DNI introducido no es válido');
        return false;
    }
}

/**
 * Función encargada de validar un código postal
 * @param cp a validar
 * @returns {boolean} según si es válido o no
 */
function validarCp(cp) {
    let pattern = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;

    if (pattern.test(cp)) {
        inputValido('otroCp');
        return true;
    } else {
        inputError('otroCp');
        alert('El Código Postal introducido no es válido');
        return false;
    }
}

/**
 * Función encargada de validar un teléfono fijo
 * @param fijo a validar
 * @returns {boolean} según si es válido o no
 */
function validarFijo(fijo) {
    let pattern = /^[8-9]\d{8}$/;

    if (pattern.test(fijo)) {
        inputValido('fijo');
        return true;
    } else {
        inputError('fijo');
        alert('El teléfono fijo introducido no es válido');
        return false;
    }
}

/**
 * Función encargada de validar un teléfono móvil
 * @param movil a validar
 * @returns {boolean} según si es válido o no
 */
function validarMovil(movil) {
    let pattern = /^(\+34)?[6-7]\d{8}$/;
    let global =  /^(\+\d{1,3})\d{9}$/;

    if (pattern.test(movil)) {
        inputValido('movil');
        return true;
    } else  if (global.test(movil) && (movil.substring(0, 3) !== '+34')) {
        inputValido('movil');
        return true
    } else {
        inputError('movil');
        alert('El teléfono móvil introducido no es válido');
        return false;
    }
}

/**
 * Función encargada de validar una fecha
 * @param fecha a validar
 * @returns {boolean} según si es válida o no
 */
function validarFecha(fecha) {
    let pattern = /^([0-3][0-9])\/([0-1][0-9])\/\d{4}$/;

    if (pattern.test(fecha)) {
        inputValido('fecha');
        return true;
    } else {
        inputError('fecha');
        alert('La fecha introducida no es válida');
        return false;
    }
}

/**
 * Función encargada de validar el número de personas
 * @param numero a validar
 * @returns {boolean} según si es válido o no
 */
function validarPersonas(numero) {
    let pattern = /^\d+$/;

    if (pattern.test(numero)) {
        inputValido('num_personas');
        return true;
    } else {
        inputError('num_personas');
        alert('El número de personas introducidas no es válido');
        return false;
    }
}

/**
 * Función encargada de validar un email
 * @param email a validar
 * @returns {boolean} según si es válido o no
 */
function validarEmail(email) {
    let pattern = /^[\w.-]+@([A-Z0-9-]+\.)[A-Z]{2,3}$/i;

    if (pattern.test(email)) {
        inputValido('email');
        return true;
    } else {
        inputError('email');
        alert('El email introducido no es válido');
        return false;
    }
}

/**
 * Función encargada de validar un usuario de Twitter
 * @param usuario a validar
 * @returns {boolean} según si es válido o no
 */
function validarTwitter(usuario) {
    let pattern = /^@[A-Z0-9-_]+$/i;

    if (pattern.test(usuario)) {
        inputValido('twitter');
        return true;
    } else {
        inputError('twitter');
        alert('El usuario introducido no es válido');
        return false;
    }
}

/**
 * Función encargada de validar una matrícula
 * @param vehiculo a validar
 * @returns {boolean} según si es válida o no
 */
function validarMatricula(vehiculo) {
    let pattern = /^\d{4}-[A-Z]{3}$/i;

    if (pattern.test(vehiculo)) {
        inputValido('matricula');
        return true;
    } else {
        inputError('matricula');
        alert('La matrícula introducida no es válida');
        return false;
    }
}

/**
 * Función encargada de validar una IP
 * @param ip a validar
 * @returns {boolean} según si es válida o no
 */
function validarIp(ip) {
    let ipv4Pattern = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    let ipv6Pattern = /^(([\da-fA-F]{1,4}):){8}$/;

    if (ipv4Pattern.test(ip + '.')) {
        inputValido('ip');
        alert('La dirección IP introducida ' + ip + ' es de tipo IPv4');
        return true;
    } else if (ipv6Pattern.test(ip + ':')) {
        inputValido('ip');
        alert('La dirección IP introducida ' + ip + ' es de tipo IPv6');
        return true;
    } else {
        inputError('ip');
        alert('La dirección IP introducida no es válida');
        return false;
    }
}

/**
 * Función encargada de validar el motivo
 * @param motivo a validar
 * @returns {string} según si es válido o no
 */
function validarMotivo(motivo) {
    let pattern = /^[A-Z]/;
    let fecha = /^([0-3][0-9][\/-]){2}((\d{4})?|(\d{2})?)$/;

    motivo = motivo.trim();
    motivo = motivo.replace(/\s+/g, ' ');
    let palabras = motivo.split(' ');
    let numPalabras = palabras.length;
    let fechas = [];

    palabras.forEach(element => {
        if (fecha.test(element)) {
            fecha.push(element);
        }
    });

    if (pattern.test(motivo)) {
        return motivo;
    } else {
        alert('La primera letra tiene que ser mayúscula');
    }
}