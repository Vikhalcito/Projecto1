class Player {
    // Propiedades del Jugador => constructor
    constructor () {
       this.player = new Image ();

       this.player.src = "../Images/charSentado.png"

       this.posX = 0
       this.posY = 350
       this.h = 85
       
       this.speedDefault = 3.5
       this.gravity = 2.5
       //Booleano para cambiar de imagen al player para esquivar objetos del techo
       this.duck = false
    }

    // Funcionalidades del Jugador => metodos

    drawPlayer () {
        if(this.duck === false){
            ctx.drawImage(this.player, this.posX, this.posY, 120, this.h )

        } else {
            ctx.drawImage(this.player, this.posX, 365, 120, 75 )
            
        }
        
    }

    playerMove () {
        if(this.posX <= 700){ // Hacemos que el player deje de moverse cuando se aproxima al largo maximo del canvas
            this.posX += 2.5
        }
    }

    playerDecelerate () {
        this.posX -= 20
    }

    playerSpeedDefault (){
        if(this.posX <= 700){ // Hacemos que el player deje de moverse cuando se aproxima al largo maximo del canvas
            this.posX += this.speedDefault
        }
        
    }

    playerJumps () {
        this.posY -= 70
    }

    playerGravity (){
        if(this.posY <= canvas.height - 250 ){
            this.posY += this.gravity
        }
    }
}