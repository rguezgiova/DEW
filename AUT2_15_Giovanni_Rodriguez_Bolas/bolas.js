class Bola {
    posicionX;
    posicionY;
    velocidadX;
    velocidadY;
    color;
    tamanio;
    /**
     * Constructor de la clase Bola
     * @param posicionX de la bola
     * @param posicionY de la bola
     * @param velocidadX de la bola
     * @param velocidadY de la bola
     * @param color de la bola
     * @param tamanio de la bola
     */
    constructor(posicionX, posicionY, velocidadX, velocidadY, color, tamanio) {
        this._posicionX = posicionX;
        this._posicionY = posicionY;
        this._velocidadX = velocidadX;
        this._velocidadY = velocidadY;
        this._color = color;
        this._tamanio = tamanio;
    }

    /**
     * Getters y Setters
     */
    get posicionX() {
        return this._posicionX;
    }

    set posicionX(value) {
        this._posicionX = value;
    }

    get posicionY() {
        return this._posicionY;
    }

    set posicionY(value) {
        this._posicionY = value;
    }

    get velocidadX() {
        return this._velocidadX;
    }

    set velocidadX(value) {
        this._velocidadX = value;
    }

    get velocidadY() {
        return this._velocidadY;
    }

    set velocidadY(value) {
        this._velocidadY = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get tamanio() {
        return this._tamanio;
    }

    set tamanio(value) {
        this._tamanio = value;
    }
}

let canvas = document.getElementById("bolas");
let ctx = canvas.getContext("2d");
let bola = new Bola(posicionX, posicionY, velocidadX, velocidadY, color, tamanio);
bola.posicionX = 10;
bola.posicionY = 10;
bola.velocidadX = 6;
bola.velocidadY = -3;
bola.color = '#FF0000';
bola.tamanio = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(bola.posicionX, bola.posicionY, 0, Math.PI*2);
    ctx.fillStyle = bola.color;
    ctx.fill();
    ctx.closePath();
    bola.posicionX += bola.velocidadX;
    bola.posicionY += bola.velocidadY;
}

function update() {
    window.requestAnimationFrame(update);
}

setInterval(draw, 10);