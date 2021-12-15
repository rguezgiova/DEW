/**
 * Funcion que comprueba la letra de un DNI.
 * @param {*} numeros del DNI sin letra 
 */
function comprobarDni(numeros) {
    if (numeros < 0 || numeros > 99999999) {
        console.log("Introduzca un numero en el rango de 0 a 99999999");
    } else {
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKE";
        let resultado = numeros % 23;
        let letra = cadena.substring(resultado,resultado+1);
        console.log("Tu DNI es: " + numeros + letra);
    }
}
comprobarDni(numeros = parseInt(prompt("Introduce tu DNI sin letra")));