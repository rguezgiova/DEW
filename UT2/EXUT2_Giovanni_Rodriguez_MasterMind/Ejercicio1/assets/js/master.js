/**
 * Constante utilizada para definir parametros utilizados proximamente
 */
const DOM = {
    tabla: document.getElementById("resultado"),
};

/**
 * Funcion que comprueba si las combinaciones son iguales
 */
function comprobarCombinacion() {
    let num1 = document.getElementById("propuesta1").value;
    let num2 = document.getElementById("propuesta2").value;
    let num3 = document.getElementById("propuesta3").value;
    let num4 = document.getElementById("propuesta4").value;
    let combinacionGanadora = ["A", "B", "C", "D"];
    let combinacion = [num1, num2, num3, num4];
    let contador = 0;
    if (combinacion === combinacionGanadora) {
        alert("¡ENHORABUENA! Has acabado en " + contador + " intentos.");
    } else {
        if (combinacion[0] === combinacionGanadora[0]) {

        }
    }
}

/**
 * Funcion que escribe la combinacion y el resultado en el HTML
 */
function escribirCombinacion() {
    let fila = document.createElement("tr");
    let opcion1 = document.createElement("td");
    let opcion2 = document.createElement("td");
    let opcion3 = document.createElement("td");
    let opcion4 = document.createElement("td");
    opcion1.textContent = document.getElementById("propuesta1").value;
    opcion2.textContent = document.getElementById("propuesta2").value;
    opcion3.textContent = document.getElementById("propuesta3").value;
    opcion4.textContent = document.getElementById("propuesta4").value;
    DOM['tabla'].append(fila);
    fila.append(opcion2);
    fila.append(opcion3);
    fila.append(opcion4);
}