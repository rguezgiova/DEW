function verCookies() {
    document.getElementById("ver").innerText = cookies = document.cookie; 
}

function crearCookie(nombre, valor, expira) {
    document.getElementById("crear").innerText = document.cookie = nombre + "=" + valor + "; expires =" + expira;
}

function modificarCookie() {
    document.getElementById("modificar").innerText = document.cookie = "usuario=pepito perez;max-age=3600;path=/";
}

function leerCookie() {
    let lista = document.cookie.split(";");
    for (i in lista) {
        let busca = lista[i].search(nombre);
        if (busca > -1) {micookie=lista[i]}
        }
    let igual = micookie.indexOf("=");
    let valor = micookie.substring(igual + 1);
    document.getElementById("leer").innerText = valor;
}

function borrarCookie() {
    document.getElementById("crear").innerText = crearCookie(nombre, valor, "Thu, 01 Jan 1970 00:00:00 UTC");
}