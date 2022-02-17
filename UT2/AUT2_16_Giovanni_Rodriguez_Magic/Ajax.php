<?php
    $credentials = $_GET;

    if ($credentials['user'] == 'daw' && $credentials['password'] == '123456') {
        $return = '{ "validation" : "true" }';
    } else {
        $return = '{ "validation" : "false" }';
    }
    echo $return;
?>