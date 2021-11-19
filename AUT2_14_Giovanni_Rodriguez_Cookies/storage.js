onload = () => {
    if (sessionStorage.getItem('usuario') == null) {
        usuario = prompt("Introduzca su nombre:");
        nombre = new sessionStorage.setItem('usuario', usuario);
    } else {
        document.getElementById("saludo").innerText = "Otra vez por aquí " + nombre + ", ¿cómo le va?";
    }
    contador = 0;
}

/**
 * Funcion que incrementa en 1 el contador
 * @param valor a incrementar
 */
function incrementar(valor) {
    sessionStorage.setItem(valor, contador + 1);
}

/**
 * Funcion qye decrementar en 1 el contador
 * @param valor a decrementar
 */
function decrementar(valor) {
    sessionStorage.setItem(valor, contador - 1);
}

/**
 * Funcion que vacia las claves
 */
function logout() {
    sessionStorage.clear();
}

document.getElementById("contador").innerText = "Contador a " + contador;