$(function () {
    game.init();
    let intentos = $('#intentos');

    /**
     * Función que recoge los inputs del intento actual, al hacer clic sobre ellos se eliminan del intento
     * @type {*|jQuery}
     */
    let inputs = $('#input_colores div').click(function () {
        if ($(this).attr('class') !== '') $(this).hide().removeClass().fadeIn();
    });

    /**
     * Función que recoge los colores al hacer clic en ellos en la paleta y los pinta en el intento
     * @type {*|jQuery}
     */
    let colores = $("#colores div").click(function () {
        let espacio = $("#input_colores div[class=\"\"]");
        if (espacio.length !== 0) {
            espacio.first().hide().addClass($(this).attr('class')).fadeIn();
        }
    });

    /**
     * Función que crea un array con los colores del intento o el resultado del mismo
     * @param tipo del array
     * @param arrayColores con los colores del intento
     * @returns {*|jQuery}
     */
    let crearColores = (tipo, arrayColores) => {
        let divBolas = $('<div></div>').addClass(tipo);

        $(arrayColores).each(function(posicion, color) {
            divBolas.append($("<div></div>").addClass(color));
        });

        if (arrayColores.length < 4) {
            for (let i = 0; i < 4 - arrayColores.length; i++) {
                divBolas.append($('<div></div>'));
            }
        }
        return divBolas;
    }

    /**
     * Función que comprueba un intento y lo pinta en el div
     * @type {*|jQuery}
     */
    let $comprobar = $("#input_comprobar").click(function () {

        if ($("#input_colores div[class='']").length === 0) {

            let intento = [];
            inputs.each(function(posicion, bola) {
                intento.push($(bola).attr("class"));
            });

            let resultado = game.comprobar(intento);

            intentos.prepend($('<div></div>')
                .addClass('intento')
                .append(crearColores('colores', intento))
                .append(crearColores('resultado', resultado))
                .hide()
                .fadeIn());

            inputs.removeClass();

            if (resultado.filter(color => color === 'negro').length === 4) {
                let ganar = $('#ganar');
                let juego = $('main');

                ganar.fadeIn();

                juego.click(function () {
                    inputs.off();
                    colores.off();
                    $comprobar.off();
                });

                $('#volver').click(function () {
                    location.reload();
                });

                $('#salir').click(function () {
                    ganar.fadeOut();
                    juego.fadeOut();
                });
            }
        }
    });
});
