/**
 * Crea una clase usuario con propiedades "usuario" y "contraseña". La contraseña debe ser privada.
 * Crea un método privado que permita modificar la contraseña y un método cambiarContraseña()
 * público que pida la contraseña vieja y la cambie por una nueva usando el anterior.
 * Crea un usuario y comprueba que sólo puedes cambiar la contraseña con el método cambiarContraseña()
 */

class Login {
    usuario;
    #password;

    /**
     * Constructor de la clase Login
     * @param {*} usuario para el login
     * @param {*} passowrd para el login
     */
    constructor(usuario, password) {
        this.usuario = usuario;
        this.#password = password;
    }

    /**
     * Getter y Setter de usuario
     */
     get getUsuario() {
        return this.usuario;
    }

    set setUsuario(usuario) {
        if (usuario == "") {
            console.log("El usuario está vacío");
        } else {
            this.usuario;
        }
    }

    /**
     * Getter y Setter de password
     */
    get #privateGetPassword() {
        return this.#password;
    }

    get getPassword() {
        return this.#privateGetPassword;
    }

    #cambiarPassword(password) {
        this.#password = password;
    }

    cambiarContrasenia() {
        let newPass = prompt("Escribe la nueva contraseña");
        return this.#cambiarPassword(newPass);
    }
}

/**
 * Creacion del objeto Login
 */
let usuario = new Login("usuario", "12345");

/**
 * Funcion que muestra la password, la cambia, y muestra la password nueva
 */
function testFuncionPrivada() {
    console.log(usuario.getPassword);
    usuario.cambiarContrasenia();
    console.log(usuario.getPassword);
}

testFuncionPrivada();