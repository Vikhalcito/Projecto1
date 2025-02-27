class Game {
    //todas las porpiedades
    constructor () {
        // campo del juego
        this.fondoImg = new Image ();
        this.fondoImg.src = "../Images/fondo.png";
        this.techoImage = new Image ();
        this.techoImage.src = "../Images/techo.png"
        this.pisoImage = new Image ();
        this.pisoImage.src = "../Images/piso.png"

        //Jugador
        this.player = new Player ()
        
        //Obstaculo
        this.obstaculo = new Obstacle ()

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

    // Metodos del obstaculo


    


    //Repeticiones de fondo, personaje, obstaculos, etc. Loops

    gameLoop = () => {
        
        //Limpiar canvas
        this.clearCanvas()




        //Movimientos y acciones
        this.player.playerSpeedDefault()
        this.player.playerGravity()
        this.obstaculo.obstacleMoves ()



        //Dibujado de los elementos
        this.drawFondo()
        this.drawTecho()
        this.drawPiso()
        this.obstaculo.drawObstacle ()
        this.player.drawPlayer()
        
        




        //Recursiones y control
        requestAnimationFrame(this.gameLoop)
    }
}