if (window.navigator.userAgent.valueOf("Chrome") > -1) {
    document.write("<link rel='stylesheet' href='css/chrome.css' type='text/css'>");
} else {
    document.write("<link rel='stylesheet' href='css/firefox.css' type='text/css'>");
}

onload = () => {
    let anchoDisponible = document.getElementById('anchoDisponible').innerHTML = "Ancho disponble: " + document.body.scrollWidth + " px";
    let altoDisponible = document.getElementById('altoDisponible').innerHTML = "Alto disponble: " + document.body.scrollHeight + " px";
    let altoTotal = document.getElementById('altoTotal').innerHTML = "Alto total: " + window.screen.height + " px";
    let anchoTotal = document.getElementById('anchoTotal').innerHTML = "Ancho total: " + window.screen.width + " px";
    let profundidadColor = document.getElementById('profundidadColor').innerHTML = "Profundidad de color: " + screen.colorDepth;
    let resolucion = document.getElementById('resolucion').innerHTML = "Resolucion (bits por pixel): " +  screen.pixelDepth;
    
    let altoExterior = document.getElementById('altoExterior').innerHTML = "Alto exterior: " + window.outerHeight + " px";
    let anchoExterior = document.getElementById('anchoExterior').innerHTML = "Ancho exterior: " + window.outerWidth + " px";
    let coorX = document.getElementById('coorX').innerHTML = "Coordenada X respecto a la pantalla: " + window.screenX + " px";
    let coorY = document.getElementById('coorY').innerHTML = "Coordenada Y respecto a la pantalla: " + window.screenY + " px";
    let visitas = document.getElementById('visitas').innerHTML = "He visitado: " + window.history.length + " páginas";
}