/**
 * Clase Login
 */
class Login {
    /**
     * Constructor de la clase Login
     * @param user a logear
     * @param password a logear
     */
    constructor(user, password) {
        this._user = user;
        this._password = password;
    }

    /**
     * Getters y Setters
     */
    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

let inputUser = document.getElementById("username").value;
let inputPassword = document.getElementById("password").value;
let login = new Login(inputUser, inputPassword);
let user = login.user;
let password = login.password;

function checkLogin() {
    if (user === 'daw' || password === 'admin') {
        alert('Already in');
    } else {
        document.getElementById('errorLogin').style.display = 'block';
    }
}

console.log(user);
console.log(password);