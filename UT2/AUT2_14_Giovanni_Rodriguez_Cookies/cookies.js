/**
 * Funcion que muestra todas las cookies creadas
 */
function verCookies() {
    document.getElementById("ver").innerText = document.cookie;
}

/**
 * Funcion para crear una cookie
 * @param nombre de la cookie
 * @param valor de la cokkie
 * @param expira fecha en la que expira la cookie
 */
function crearCookie(nombre, valor, expira) {
    document.getElementById("crear").innerText = document.cookie = nombre + "=" + valor + "; expires =" + expira;
}

/**
 * Funcion que modifica una cookie
 */
function modificarCookie() {
    document.getElementById("modificar").innerText = document.cookie = "cookie2=pepito perez;max-age=3600;path=/";
}

/**
 * Funcion que lee el contenido de una cookie
 * @param nombre de la cookie a leer
 */
function leerCookie(nombre) {
    let arrayCookies = document.cookie.split(";");
    for (let i in arrayCookies) {
        buscar = arrayCookies[i].search(nombre);
        if (buscar > -1) {
            cookieEncontrada = arrayCookies[i];
        }
    }
    document.getElementById("leer").innerText = cookieEncontrada;
}

/**
 * Funcion que borra una cookie
 * @param nombre de la cookie a borrar
 */
function borrarCookie(nombre) {
    let arrayCookies = document.cookie.split(";");
    for (let i in arrayCookies) {
        buscar = arrayCookies[i].search(nombre);
        if (buscar > -1) {
            cookieEncontrada = crearCookie(nombre, "0", "Thu, 01 Jan 1970 00:00:00 UTC");
            document.getElementById("borrar").innerText = "La cookie se ha borrado correctamente";
        }
    }
}