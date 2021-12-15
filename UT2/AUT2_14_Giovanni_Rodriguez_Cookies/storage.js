let contador = 0;
let storage = window.localStorage;

onload = () => {
    login();
    contadorNuevo();
}

/**
 * Funcion que pide un nombre y te logea
 */
function login() {
    if (storage.length === 0) {
        let nombre = prompt("Introduzca su nombre");
        if (nombre !== null) {
            storage.setItem('nombre', nombre);
            document.getElementById("saludo").innerText = "Bienvenido " + storage.getItem("nombre") + "!";
        }
    } else {
        if (storage.getItem('nombre') !== null && storage.getItem('nombre') !== "" && document.getElementById("saludo").value === undefined) {
            document.getElementById("saludo").innerText = "Otra vez por aquí " + storage.getItem('nombre') + ", ¿Cómo le va?";
        }
    }
}

function contadorNuevo(){
    if(contador === 0 && storage.getItem("nombre") !== null) {
        document.getElementById("contador").innerText = "Contador a 0";
    }
}

/**
 * Funcion que incrementa en 1 el contador
 */
function incrementarContador() {
    contador++;
    document.getElementById("contador").innerText = "Contador a " + contador;
}

/**
 * Funcion qye decrementar en 1 el contador]]
 */
function decrementarContador() {
    if(contador > 0) {
        contador--;
        document.getElementById("contador").innerText = "Contador a " + contador;
    }
}

/**
 * Funcion que vacia las claves
 */
function logout() {
    alert("Hasta la próxima " + storage.getItem('nombre'));
    storage.clear();
}