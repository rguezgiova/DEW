$(document).ready(function() {
    pintarRojo();
    pintarVerde();
    buscarVacios();
    pintarHref();
    pintarNoHref();
    aumentar();
    aniadirAsig();
});

function pintarRojo() {
    $('ul:first').css('color', 'red');
}

function pintarVerde() {
    $('li:contains("Sistemas Informáticos")').css('color', 'green');
}

function buscarVacios(){
    $('li:empty').text('Nodo vacío');
}

function pintarHref() {
    $('a[href]').css('background-color', 'yellow');
}

function pintarNoHref() {
    $('li a').not('[href]').css('color', 'yellow').css('background-color', 'black');
}

function aumentar() {
    $('a').attr('href', (i, value) => {
        console.log(value);
        if (value.includes('mod')) {
            $(value).css('font-size', '1.4em');
        }
    });
}

function pintarNaranja() {

}

function aniadirAsig() {

}