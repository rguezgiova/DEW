window.onload = () => {
   DOM['opciones'].style.display = 'none';
}

const DOM = {
    opciones: document.getElementById("opciones"),
    nombre: document.getElementById("nombre").value,
    tipo: document.getElementById("tipos").selected,
    numOpciones: document.getElementById("numOpciones").value,
    template: document.getElementById("template-opciones").content,
};

function crearJuego() {
    if (DOM['nombre'] !== "" && DOM['tipo'] !== null && DOM['numOpciones'] > 1) {
        DOM['opciones'].style.display = 'block';
        for (i = 0; i < DOM['numOpciones']; i++) {

        }
    }
    let juego = new Juego(DOM['nombre'], DOM['tipo'], DOM['numOpciones']);
}