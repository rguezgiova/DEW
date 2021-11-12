class Formulario {
    nombre;
    apellidos;
    dni;
    codigoPostal;
    telefonoFijo;
    telefonoMovil;
    residente;
    fechaIda;
    personas;
    email;
    twitter;
    instagram;
    vehiculo;
    ip;
    motivo;
    /**
     * Constructor de la clase Formulario
     * @param {*} nombre de la persona
     * @param {*} apellidos de la persona
     * @param {*} dni de la persona
     * @param {*} codigoPostal del municipio
     * @param {*} telefonoFijo de la persona
     * @param {*} telefonoMovil de la persona
     * @param {*} residente si o no
     * @param {*} fechaIda del viaje
     * @param {*} personas del viaje
     * @param {*} email de la persona
     * @param {*} twitter de la persona
     * @param {*} instagram de la persona
     * @param {*} vehiculo si, no, matricula
     * @param {*} ip desde que solicita
     * @param {*} motivo del desplazamiento
     */
    constructor(nombre, apellidos, dni, codigoPostal, telefonoFijo, telefonoMovil, residente,
        fechaIda, personas, email, twitter, instagram, vehiculo, ip, motivo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.codigoPostal = codigoPostal;
        this.telefonoFijo = telefonoFijo;
        this.telefonoMovil = telefonoMovil;
        this.residente = residente;
        this.fechaIda = fechaIda;
        this.personas = personas;
        this.email = email;
        this.twitter = twitter;
        this.instagram = instagram;
        this.vehiculo = vehiculo;
        this.ip = ip;
        this.motivo = motivo;
    }

    /**
     * Getters y Setters
     */
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getApellidos() {
        return this.apellidos;
    }

    set setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    get getDni() {
        return this.dni;
    }

    set setDni(dni) {
        let numero = dni.substr(0, dni.length - 1);
        let letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        let letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            alert('DNI erroneo, la letra del NIF no es correcta');
        } else {
            this.dni = dni;
        }
    }

    get getcodigoPostal() {
        return this.codigoPostal;
    }
    
    set setCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    get getTelefonoFijo() {
        return this.telefonoFijo;
    }
    
    set setTelefonoFijo(telefonoFijo) {
        this.telefonoFijo = telefonoFijo;
    }

    get getTelefonoMovil() {
        return this.telefonoMovil;
    }

    set setTelefonoMovil(telefonoMovil) {
        this.telefonoMovil = telefonoMovil;
    }

    get getResidente() {
        return this.residente;
    }

    set setResidente(residente) {
        this.residente = residente;
    }

    get getFechaIda() {
        return this.fechaIda;
    }

    set setFechaIda(fechaIda) {
        this.fechaIda = fechaIda;
    }

    get getPersonas() {
        return this.personas;
    }

    set setPersonas(personas) {
        this.personas = personas;
    }

    get getEmail() {
        return this.email;
    }

    set setEmail(email) {
        this.email = email;
    }

    get getTwitter() {
        return this.twitter;
    }

    set setTwitter(twiiter) {
        this.twitter = twiiter;
    }

    get getInstagram() {
        return this.instagram;
    }

    set setInstagram(instagram) {
        this.instagram = instagram;
    }

    get getVehiculo() {
        return this.vehiculo;
    }

    set setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
    }

    get getIp() {
        return this.ip;
    }

    set setIp(ip) {
        this.ip = ip;
    }

    get getMotivo() {
        return this.motivo;
    }

    set setMotivo(motivo) {
        this.motivo = motivo;
    }
}

/**
 * Constante DOM con todos los nodos utilizados
 */
const DOM = {
    fomulario: document.getElementsByClassName("form"),
    codigoPostal: document.getElementsByClassName("fieldset_postalcode"),
    opcionCodigoPostal: document.getElementById("in_postalcode"),
    telefonoFijo: document.getElementsByClassName("fieldset_phone"),
    telefonoMovil: document.getElementsByClassName("fieldset_mphone"),
    residente: document.getElementsByClassName("fieldset_resident"),
    fecha: document.getElementsByClassName("fieldset_date"),
    personas: document.getElementsByClassName("fieldset_passengers"),
    email: document.getElementsByClassName("fieldset_email"),
    twitter: document.getElementsByClassName("fieldset_twitter"),
    instagram: document.getElementsByClassName("fieldset_instagram"),
    opcionVehiculo: document.getElementById("vehicle"),
    radioVehiculo: document.getElementsByClassName("fieldset_radiovehicle"),
    vehiculo: document.getElementsByClassName("fieldset_vehicle"),
    ip: document.getElementsByClassName("fieldset_ip"),
    motivos: document.getElementsByClassName("fieldset_reason"),
};

/**
 * Funcion que crea el campo de texto de codigo postal
 */
function crearCodigoPostal() {
    let nodoInput = document.createElement("input");
    nodoInput.type = "text";
    nodoInput.id = "codigoPostal";
    nodoInput.className = "input-form";
    nodoInput.pattern = "/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/";
    DOM.codigoPostal[0].appendChild(nodoInput);
}

/**
 * Funcion que al seleccionar "otro" oculta el select y añade un input
 */
DOM['opcionCodigoPostal'][3].onclick = () => {
    crearCodigoPostal();
    document.getElementsByClassName("select")[0].style.display = "none";
};


/**
 * Funcion que crea el campo telefono fijo
 */
function crearTelefonoFijo() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoTelefonoFijo = document.createElement("input");
    nodoFieldset.className = "fieldset_phone";
    nodoLbl.htmlFor = "telefonoFijo";
    nodoLbl.textContent = "Phone number";
    nodoTelefonoFijo.type = "text";
    nodoTelefonoFijo.id = "telefonoFijo";
    nodoTelefonoFijo.className = "input-form";
    nodoTelefonoFijo.pattern = "/(\+\d[0-9]{1,3}[- ])|([98]{1}[0-9]{2}([- ]{1}[0-9]{3}){2})/";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.telefonoFijo[0].appendChild(nodoLbl);
    DOM.telefonoFijo[0].appendChild(nodoTelefonoFijo);
}

/**
 * Funcion que crea el campo telefono movil
 */
function crearTelefonoMovil() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoTelefonoMovil = document.createElement("input");
    nodoFieldset.className = "fieldset_mphone";
    nodoLbl.htmlFor = "telefonoMovil";
    nodoLbl.textContent = "Mobile phone number";
    nodoTelefonoMovil.type = "text";
    nodoTelefonoMovil.id = "telefonoMovil";
    nodoTelefonoMovil.className = "input-form";
    nodoTelefonoMovil.pattern = "/([98]{1}[0-9]{2}([- ]{1}[0-9]{3}){2})/";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.telefonoMovil[0].appendChild(nodoLbl);
    DOM.telefonoMovil[0].appendChild(nodoTelefonoMovil);
}

/**
 * Funcion que crea el campo residente
 */
function crearResidente() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoLblSi = document.createElement("label");
    let nodoLblNo = document.createElement("label");
    let nodoResidenteSi = document.createElement("input");
    let nodoResidenteNo = document.createElement("input");
    nodoFieldset.className = "fieldset_resident";
    nodoLbl.textContent = "Resident";
    nodoResidenteSi.type = "radio";
    nodoResidenteNo.type = "radio";
    nodoResidenteSi.id = "residente";
    nodoResidenteNo.id = "residente";
    nodoResidenteSi.name = "residente";
    nodoResidenteNo.name = "residente";
    nodoResidenteSi.value = "si";
    nodoResidenteNo.value = "no";
    nodoLblSi.textContent = "Yes";
    nodoLblNo.textContent = "No";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.residente[0].appendChild(nodoLbl);
    DOM.residente[0].appendChild(nodoLblNo), DOM.residente[0].appendChild(nodoResidenteNo);
    DOM.residente[0].appendChild(nodoLblSi), DOM.residente[0].appendChild(nodoResidenteSi);
}

/**
 * Funcion que crea el campo fecha
 */
function crearFecha() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoFecha = document.createElement("input");
    nodoFieldset.className = "fieldset_date";
    nodoLbl.textContent = "Board date";
    nodoFecha.type = "date";
    nodoFecha.id = "fecha";
    nodoFecha.className = "input-form";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.fecha[0].appendChild(nodoLbl);
    DOM.fecha[0].appendChild(nodoFecha);
}

/**
 * Funcion que crea el campo personas
 */
function crearPersonas() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoPersonas = document.createElement("input");
    nodoFieldset.className = "fieldset_passengers";
    nodoLbl.textContent = "Passengers";
    nodoPersonas.type = "number";
    nodoPersonas.id = "personas";
    nodoPersonas.className = "input-form";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.personas[0].appendChild(nodoLbl);
    DOM.personas[0].appendChild(nodoPersonas);
}

/**
 * Funcion que crea el campo email
 */
function crearEmail() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoEmail = document.createElement("input");
    nodoFieldset.className = "fieldset_email";
    nodoLbl.textContent = "Email";
    nodoEmail.type = "email";
    nodoEmail.id = "email";
    nodoEmail.className = "input-form";
    nodoEmail.pattern = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.email[0].appendChild(nodoLbl);
    DOM.email[0].appendChild(nodoEmail);
}

/**
 * Funcion que crea el campo telefono twitter
 */
function crearTwitter() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoTwitter = document.createElement("input");
    nodoFieldset.className = "fieldset_twitter";
    nodoLbl.textContent = "Twitter";
    nodoTwitter.type = "text";
    nodoTwitter.id = "twitter";
    nodoTwitter.className = "input-form";
    nodoTwitter.pattern = "/(^|[^@\w])@(\w{1,15})\b/g";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.twitter[0].appendChild(nodoLbl);
    DOM.twitter[0].appendChild(nodoTwitter);
}

/**
 * Funcion que crea el campo instagram
 */
function crearInstagram() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoInstagram = document.createElement("input");
    nodoFieldset.className = "fieldset_instagram";
    nodoLbl.textContent = "Instagram";
    nodoInstagram.type = "text";
    nodoInstagram.id = "instagram";
    nodoInstagram.className = "input-form";
    nodoInstagram.pattern = "/^(?!.*\\.\\.)(?!.*\\.$)[^\\W][\\w.]{0,29}$/igm";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.instagram[0].appendChild(nodoLbl);
    DOM.instagram[0].appendChild(nodoInstagram);
}

/**
 * Funcion que crea el campo si o no de la opcion de vehiculo
 */
function crearRadioVehiculo() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoLblSi = document.createElement("label");
    let nodoLblNo = document.createElement("label");
    let nodoVehiculoSi = document.createElement("input");
    let nodoVehiculoNo = document.createElement("input");
    nodoFieldset.className = "fieldset_radiovehicle";
    nodoLbl.textContent = "Vehicle";
    nodoVehiculoSi.type = "radio";
    nodoVehiculoNo.type = "radio";
    nodoVehiculoSi.id = "vehicle";
    nodoVehiculoNo.id = "vehicle";
    nodoVehiculoSi.name = "vehicle";
    nodoVehiculoNo.name = "vehicle";
    nodoVehiculoSi.on = "si";
    nodoVehiculoNo.value = "no";
    nodoVehiculoNo.defaultChecked = 1;
    nodoLblSi.textContent = "Yes";
    nodoLblNo.textContent = "No";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.radioVehiculo[0].appendChild(nodoLbl);
    DOM.radioVehiculo[0].appendChild(nodoLblNo), DOM.radioVehiculo[0].appendChild(nodoVehiculoNo);
    DOM.radioVehiculo[0].appendChild(nodoLblSi), DOM.radioVehiculo[0].appendChild(nodoVehiculoSi);
}

/**
 * Funcion que crea el campo vehiculo
 */
function crearVehiculo() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoVehiculo = document.createElement("input");
    nodoFieldset.className = "fieldset_vehicle";
    nodoLbl.textContent = "Plate";
    nodoVehiculo.type = "text";
    nodoVehiculo.id = "matricula";
    nodoVehiculo.className = "input-form";
    nodoVehiculo.pattern = "/(\d{4}-[\D\w]{3})/";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.vehiculo[0].appendChild(nodoLbl);
    DOM.vehiculo[0].appendChild(nodoVehiculo);
}

/* DOM['opcionVehiculo']['si'].checked = () => {
    crearVehiculo();
}; */

/**
 * Funcion que crea el campo ip
 */
function crearIp() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoIp = document.createElement("input");
    nodoFieldset.className = "fieldset_ip";
    nodoLbl.textContent = "Ip";
    nodoIp.type = "text";
    nodoIp.id = "ip";
    nodoIp.className = "input-form";
    nodoIp.pattern = "/^()(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.ip[0].appendChild(nodoLbl);
    DOM.ip[0].appendChild(nodoIp);
}

/**
 * Funcion que crea el campo motivo
 */
function crearMotivo() {
    let nodoFieldset = document.createElement("fieldset");
    let nodoLbl = document.createElement("label");
    let nodoMotivo = document.createElement("textarea");
    nodoFieldset.className = "fieldset_reason";
    nodoLbl.textContent = "Reason";
    nodoMotivo.id = "motivo";
    nodoMotivo.className = "input-form";
    DOM.fomulario[0].insertBefore(nodoFieldset, DOM.fomulario[0].lastElementChild);
    DOM.motivos[0].appendChild(nodoLbl);
    DOM.motivos[0].appendChild(nodoMotivo);
}

crearTelefonoFijo();
crearTelefonoMovil();
crearResidente();
crearFecha();
crearPersonas();
crearEmail();
crearTwitter();
crearInstagram();
crearRadioVehiculo();
crearIp();
crearMotivo();