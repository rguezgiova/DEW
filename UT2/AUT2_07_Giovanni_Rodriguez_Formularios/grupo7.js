/**
 * Pinta los nodos pares de la primera lista en rojo. Sin tocar el HTML
 */
let elementos = document.getElementById("lista").getElementsByTagName("li");

for (i = 0; i < elementos.length; i++) {
    if (((i + 1) % 2) == 0) {
        elementos[i].style.color = "Red";
    } 
}