class Game {
    //todas las porpiedades
    constructor () {
        this.fondoImg = new Image ();
        this.fondoImg.src = "../Images/fondo.png";
        this.techoImage = new Image ();
        this.techoImage.src = "../Images/techo.png"
        this.pisoImage = new Image ();
        this.pisoImage.src = "../Images/piso.png"

    }

    //todas las funcionalidades del juego => Metodos
    drawFondo = () => {
        ctx.drawImage(this.fondoImg, 0, 0, canvas.width, canvas.height)
        console.log("fondo aqui")
    }

    drawTecho = () => {
        ctx.drawImage(this.techoImage, 0, 0, canvas.width, 170)
    }

    drawPiso = () => {
        ctx.drawImage(this.pisoImage, 0, canvas.height - 170 , canvas.width, 170)
    }


    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }


    //Repeticiones de fondo, personaje, obstaculos, etc. Loops

    gameLoop = () => {
        
        //Limpiar canvas
        this.clearCanvas()

        //Movimientos y acciones

        //Dibujado de los elementos
        this.drawFondo()
        this.drawTecho()
        this.drawPiso()
        //Recursiones y control
        requestAnimationFrame(this.gameLoop)
    }
}