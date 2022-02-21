$(function () {
    game.init();
    let intentos = $('#intentos');

    let inputs = $('#input_colores div').click(function () {
        if ($(this).attr('class') !== '') $(this).hide().removeClass().fadeIn();
    });

    let colores = $('#colores div').click(function () {
        let hueco = $("#input_colores div[class=\"\"]");
        if (hueco.length !== 0) hueco.first().hide().addClass($(this).attr('class')).fadeIn();
    });

    let crearColores = (tipo, arrayColores) => {
        let divColores = $('<div></div>').addClass(tipo);

        $(arrayColores).each(function(posicion, color) {
            divColores.append($('<div></div>').addClass(color));
        });

        if (arrayColores.length < 4) {
            for (let i = 0; i < 4 - arrayColores.length; i++) {
                divColores.append($('<div></div>'));
            }
        }
        return divColores;
    }

    let comprobar = $('#input_comprobar').click(function () {
        if ($("#input_colores div[class='']").length === 0) {

            let intento = [];
            inputs.each(function(posicion, color) {
                intento.push($(color).attr('class'));
            });
            let resultado = game.comprobar(intento);

            intentos.prepend($('<div></div>')
                .addClass('intento')
                .append(crearColores('colores', intento))
                .append(crearColores('resultado', resultado))
                .hide()
                .fadeIn());
            inputs.removeClass();

            if (resultado.filter(bola => bola === 'negro').length === 4) {
                let ganar = $('#ganar');
                let juego = $('main');

                ganar.fadeIn();

                juego.click(function () {
                    inputs.off();
                    colores.off();
                    comprobar.off();
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
})