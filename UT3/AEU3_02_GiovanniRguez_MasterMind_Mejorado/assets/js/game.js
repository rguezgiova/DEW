let game = (function () {
    let colores = ['rojo', 'blanco', 'negro', 'amarillo', 'naranja', 'marron', 'azul', 'verde'];
    let combinacion = [];
    let intentos = 0;

    /**
     * Función que se encarga de generar una combinación aleatoria entre los colores
     */
    let init = function () {
        while (combinacion.length < 4) {
            combinacion.push(colores[Math.floor(Math.random() * colores.length)]);
        }
        console.log(combinacion);
    }

    /**
     * Función que se encarga de comprobar el intento con la combinación
     * @param intento a comprobar
     * @returns {*[]}
     */
    let comprobar = function (intento) {
        let resultado = [];
        let tmpIntento = [];
        let tmpCombinacion = [];

        if (intentos <= 10) {
            intento.forEach((color, posicion) => {
                if (color === combinacion[posicion]) {
                    resultado.push('negro');
                } else {
                    tmpIntento.push(color);
                    tmpCombinacion.push(combinacion[posicion]);
                }
            });

            tmpIntento.forEach((color) => {
                if (tmpCombinacion.includes(color)) {
                    resultado.push('blanco');
                    tmpCombinacion[tmpCombinacion.indexOf(color)] = undefined;
                } else {
                    resultado.push('gris');
                    tmpCombinacion[tmpCombinacion.indexOf(color)] = undefined;
                }
            });
        } else {
            alert('Has llegado al número máximo de intentos');
        }
        intentos++;
        return resultado;
    }

    return {
        init: init,
        comprobar: comprobar,
    }
})();
