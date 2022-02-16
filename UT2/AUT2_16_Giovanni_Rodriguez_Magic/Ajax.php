<?php
    $recibido = $_GET;

    if ($recibido['usuario'] == 'user' && $recibido['password'] == 'user') {
        $devuelve = '{ "validation" : "true" }';
    } else {
        $devuelve = '{ "validation" : "false" }';
    }
    echo $devuelve;
?>