class Player {
    // Propiedades del Jugador => constructor
    constructor () {
       this.player = new Image ();
       this.player.src = "../Images/charSentado.png"
       this.posX = 0
       
       this.speedDefault = 2.5
    }

    // Funcionalidades del Jugador => metodos

    drawPlayer () {
        ctx.drawImage(this.player, this.posX, canvas.height - 250, 120, 85 )
    }

    playerMove () {
        this.posX += 5
    }

    playerDecelerate () {
        this.posX -= 10
    }

    playerSpeedDefault (){
        this.posX += this.speedDefault
    }
}