let intentos = 0;
let color = {
    'A':'#88cffa',
    'B':'#faf188',
    'C':'#a880ba',
    'D':'#f7a742',
    'E':'#83cb9b',
    'F':'#957e7e',
};

/**
 * Función que comprueba los valores recibidos
 */
function comprobarInputs() {
    let set = ['A', 'B', 'C', 'D'];
    let intento = [];
    var elementos = $('#formulario').find('button');

    for (let i = 0; i < elementos.length; i++) {
        intento.push(elementos[i].value);
    }

    intento.pop();

    comprobarResultado(set, intento);
}

/**
 * Función que comprueba el resultado enviado con la solución
 * @param set solución
 * @param letras enviadas
 */
function comprobarResultado(set, letras) {
    let aciertos = 0;
    let coincidencias = 0;
    let intento = letras;

    for (let j = 0; j < set.length; j++) {
        if (set[j] == intento[j]) {
            aciertos++;
            set[j] = null;
            intentos[j] = null;
        }
    }

    set.forEach(letra => {
        intento.forEach(letraIntento => {
            if (letra == letraIntento) {
                coincidencias++;
            }
        });
    });
    intentos++;
    mostrarResultado(letras, aciertos, coincidencias);
}

/**
 * Función que imprime el resultado obtenido
 * @param letras enviadas
 * @param aciertos obtenidos
 * @param coincidencias obtenidas
 */
function mostrarResultado(letras, aciertos, coincidencias) {
    var contenido = document.querySelector('#resultado');
    const fragment = document.createDocumentFragment();
    const template = document.querySelector('#template-resultado').content;

    if (intentos > 10) {
        template.querySelectorAll("td")[4].textContent = "Se te han acabado los intentos, más suerte la próxima";
    } else if (aciertos == 4) {
        template.querySelectorAll("td")[0].style.backgroundColor = letras[0];
        template.querySelectorAll("td")[1].textContent = letras[1];
        template.querySelectorAll("td")[2].textContent = letras[2];
        template.querySelectorAll("td")[3].textContent = letras[1];
        template.querySelectorAll("td")[4].textContent = "Has acertado en " + intentos + " intentos";
    } else {
        let resultado = "Tiene " + aciertos + " aciertos y " + coincidencias + " coincidencias";
        template.querySelectorAll("td")[0].textContent =  letras[0];
        template.querySelectorAll("td")[1].textContent =  letras[1];
        template.querySelectorAll("td")[2].textContent =  letras[2];
        template.querySelectorAll("td")[3].textContent =  letras[3];
        template.querySelectorAll("td")[4].textContent =  resultado;
    }
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    contenido.appendChild(fragment);
}