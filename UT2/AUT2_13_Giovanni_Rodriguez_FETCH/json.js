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
    fetch(url)
    .then(respone => respone.json().then(json => {
        json.forEach(element => {
            const {id, name, email, username} = element;
            crearElementos(id, name, email, username);
        })
    }));
}

/**
 * Funcion que crea los elementos de una tabla
 * @param {*} id de la persona
 * @param {*} nombre de la persona
 * @param {*} email de la persona
 * @param {*} user de la persona
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