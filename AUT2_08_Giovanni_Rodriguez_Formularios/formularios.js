/**
 * Funcion que cambia los estilos de los formularios a oculto al cargar la pagina9
 */
onload = () => {
    document.getElementById('formularioCursos').style.display = 'none';
    document.getElementById('formularioModulos').style.display = 'none';
}

/**
 * Funcion que muestra los cursos al hacer clic en 
 */
function mostrarCursos() {
    let opcion = document.getElementsByName("ciclo");

    if (opcion.length > 0) {
        document.getElementById('formularioCursos').style.display = 'block';
    }
}

/**
 * Funcion que muestra los modulos segun el anio que selecciones
 */
function mostrarModulos() {
    let curso = document.getElementById("curso");

    if (curso.value == "primero") {
        document.getElementById('formularioModulos').style.display = 'block';
        document.getElementById("dew").setAttribute("type", "hidden");
        document.getElementById("dsw").setAttribute("type", "hidden");
        document.getElementById("emr").setAttribute("type", "hidden");
        document.getElementById("pro").setAttribute("type", "checkbox");
        document.getElementById("ets").setAttribute("type", "checkbox");
        document.getElementById("fol").setAttribute("type", "checkbox");
        document.getElementById("lbldew").style.display = 'none';
        document.getElementById("lbldsw").style.display = 'none';
        document.getElementById("lblemr").style.display = 'none';
        document.getElementById("lblpro").style.display = 'block';
        document.getElementById("lblets").style.display = 'block';
        document.getElementById("lblfol").style.display = 'block';
    } else if (curso.value == "segundo") {
        document.getElementById('formularioModulos').style.display = 'block';
        document.getElementById("pro").setAttribute("type", "hidden");
        document.getElementById("ets").setAttribute("type", "hidden");
        document.getElementById("fol").setAttribute("type", "hidden");
        document.getElementById("dew").setAttribute("type", "checkbox");
        document.getElementById("dsw").setAttribute("type", "checkbox");
        document.getElementById("emr").setAttribute("type", "checkbox");
        document.getElementById("lblpro").style.display = 'none';
        document.getElementById("lblets").style.display = 'none';
        document.getElementById("lblfol").style.display = 'none';
        document.getElementById("lbldew").style.display = 'block';
        document.getElementById("lbldsw").style.display = 'block';
        document.getElementById("lblemr").style.display = 'block';
    } else {
        document.getElementById('formularioModulos').style.display = 'none';
    }
}

/**
 * Funcion que verifica si hay campos vacios
 */
function validarDatos() {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellido");
    let masculino = document.getElementById("masculino");
    let femenino = document.getElementById("femenino");
    let se = document.getElementById("se");
    let edad = document.getElementById("edad");
    let color = document.getElementById("color");
    let asir = document.getElementById("asir");
    let daw = document.getElementById("daw");
    let dam = document.getElementById("dam");
    let curso = document.getElementById("curso");
    let modulos1 = document.getElementsByName("modulos1");
    let modulos2 = document.getElementsByName("modulos2");

    if (nombre.value == "") {
        nombre.classList.add('error');
    }

    if (apellidos.value == "") {
        apellidos.classList.add('error');
    }

    if (!document.querySelector('input[name="sexo"]:checked')) {
        masculino.classList.add('error');
        console.log("No funca");
    }

    if (!femenino.checked) {
        femenino.classList.add('error');
    }

    if (!se.checked) {
        se.classList.add('error');
    }

    if (edad.value == "") {
        edad.classList.add('error');
    }

    if (color.length < 0) {
        color.classList.add('error');
    }

    document.getElementById("contador").innerHTML = "El número de formularios es: " + document.forms.length;
}