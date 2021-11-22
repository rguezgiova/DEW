class Bola {
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
let bola = new Bola(10, 10, 6, -3, 'FF0000', 10);
let posX = bola.posicionX;
let posY = bola.posicionY;
let velX = bola.velocidadX;
let velY = bola.velocidadY;
let color = bola.color;
let tamanio = bola.tamanio;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawBall() {
    ctx.beginPath();
    ctx.arc(posX, posY, tamanio, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    if (posX + velX > canvas.width - tamanio || posX + velX < tamanio) {
        velX = -velX;
    }
    if (posY + velY > canvas.height - tamanio || posY + velY < tamanio) {
        velY = -velY;
    }
    posX += velX;
    posY += velY;
}

function update() {
    window.requestAnimationFrame(update);
}

setInterval(draw, 10);
update();