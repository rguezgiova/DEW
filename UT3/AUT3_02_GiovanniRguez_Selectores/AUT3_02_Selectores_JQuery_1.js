$(document).ready(function() {
    pintarRojo();
    cambiarPrecio();
    cambiarDestino();
    pintarVerde();
    pintarNaranja();
});

function pintarRojo() {
    $('h2').css('color', 'red');
}

function cambiarPrecio() {
    $('.details').text('88.99 EUR');
}

function cambiarDestino() {
    $('.vacation h2').text('Santiago del Teide');
}

function pintarVerde() {
    $('#vacations').css('color', 'green');
}

function pintarNaranja() {
    $('.america').css('color', 'orange');
}