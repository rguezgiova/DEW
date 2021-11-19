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
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
        this.color = color;
        this.tamanio = tamanio;
    }

    /**
     * Getters y setters
     */
    get getPosicionX() {
        return this.posicionX;
    }

    set setPosicionX(posicionX) {
        this.posicionX = posicionX;
    }

    get getPosicionY() {
        return this.posicionY;
    }

    set setPosicionY(posicionY) {
        this.posicionY = posicionY;
    }

    get getVelocidadX() {
        return this.velocidadX;
    }

    set setVelocidadX(velocidadX) {
        this.velocidadX = velocidadX;
    }

    get velocidadY() {
        return this.velocidadY;
    }

    set setVelocidadY(velocidadY) {
        this.velocidadY = velocidadY;
    }

    get getColor() {
        return this.color;
    }

    set setColor(color) {
        this.color = color;
    }

    get getTamanio() {
        return this.tamanio;
    }

    set setTamanio(tamanio) {
        this.tamanio = tamanio;
    }
}

window.onload = () => {
    const canvas = document.createElement("bolas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawBall() {
    ctx = canvas.getContext();
    ctx.beginPath();
    ctx.arc(x, y, tamanio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
}

function update() {
    window.requestAnimationFrame(update);
}