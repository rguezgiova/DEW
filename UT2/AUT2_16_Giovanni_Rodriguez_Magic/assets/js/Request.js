/**
 * Función encargada de crear un objeto Ajax
 * @returns objeto Ajax
 */
function createAjax() {
    var ajax = null;
    try {
        ajax = new XMLHttpRequest();
    } catch (error) {
        try {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (error2) {
            try {
                ajax = new ActiveXObject("Msxml12.XMLHTTP");
            } catch (error3) {
                return null;
            }
        }
    }
    return ajax;
}

/**
 * Función que gestiona los datos recibidos de la petición
 * @param data datos recibidos
 * @returns {boolean} según la validación
 */
function manageData(data) {
    data = JSON.parse(data);
    if(data.validation === "true") {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "inline";
        document.getElementById("selected").style.visibility ="visible";
        document.getElementById("myDeckA").style.display ="block";
        localStorage.setItem("daw", "123456");
        return true;
    } else if(data.validation === "false") {
        alert("Usuario: daw - Password: 123456");
        return false;
    }
}

/**
 * Función que se encarga de la gestión del objeto y de su posterior petición
 * @param user a gestionar
 * @param password a gestionar
 */
function login(user, password) {
    var ajax = createAjax();
    ajax.onreadystatechange = function check() {
        if((ajax.readyState === 4) && (ajax.status === 200)) {
            return manageData(this.responseText);
        }
    }
    ajax.open("GET","Ajax.php?user="+user+"&password="+password,true);
    ajax.send(null);
}