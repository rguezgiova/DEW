<?php 
$recibido = file_get_contents("php://input");
$datos = preg_split("/([&=])/", $recibido);
$datosAux = [];
for($i = 0; $i < count($datos); $i += 2){
    $datosAux[$datos[$i]] = $datos[$i+1];
}
if($datos['usuario'] == 'usuario' && $datos['contraseña'] == '1234') {
    $devuelve='{"validacion":true}';
} else {
    $devuelve='{"validacion":false}';
}
echo $devuelve;