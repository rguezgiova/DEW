/**
 * Constante DOM con contenido que usaremos repetidas veces
 */
const DOM = {
    insertar: document.getElementById("contenido"),
};

/**
 * Funcion que recoge la información de una URL
 */
function traer() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            let respuesta = JSON.parse(request.responseText);
            console.log(respuesta);
            for (let key in respuesta) {
                crearElementos(respuesta[key].id, respuesta[key].name, respuesta[key].email, respuesta[key].username);
            }
        }
    }
    request.open("GET", url, true);
    request.send();
}

/**
 * Funcion que crea los elementos que se añadiran a la tabla
 * @param id de la persona
 * @param nombre de la persona
 * @param email de la persona
 * @param user de la persona
 */
function crearElementos(id, nombre, email, user) {
    let nodoTr = document.createElement("tr");
    let nodoTdId = document.createElement("td");
    let nodoTdNombre = document.createElement("td");
    let nodoTdEmail = document.createElement("td");
    let nodoTdUser = document.createElement("td");
    nodoTdId.textContent = id;
    nodoTdNombre.textContent = nombre;
    nodoTdEmail.textContent = email;
    nodoTdUser.textContent = user;
    DOM['insertar'].appendChild(nodoTr);
    nodoTr.appendChild(nodoTdId);
    nodoTr.appendChild(nodoTdNombre);
    nodoTr.appendChild(nodoTdEmail);
    nodoTr.appendChild(nodoTdUser);
}