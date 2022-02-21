let game = (function () {
    let colores = ["rojo", "blanco", "negro", "amarillo", "naranja", "marron", "azul", "verde"];
    let resultado = [];

    let init = function () {
        while (resultado.length < 4) {
            resultado.push(colores[Math.floor(Math.random() * colores.length)]);
        }
        console.log(resultado);
    }

    let comprobar = function (intento) {
        let resultado = [];
        let tmpIntento = [];
        let tmpResultado = [];

        intento.forEach((color, posicion) => {
            if (color === resultado[posicion]) {
                resultado.push('negro');
            } else {
                tmpIntento.push(color);
                tmpResultado.push(resultado[posicion]);
            }
        });

        tmpIntento.forEach((bola) => {
            if (tmpResultado.includes(bola)) {
                resultado.push('blanco');
                tmpResultado[tmpResultado.indexOf(bola)] = undefined;
            }
        });
        return resultado;
    }

    return {
        init: init,
        comprobar: comprobar,
    }
})();
