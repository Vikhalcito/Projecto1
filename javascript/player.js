class Player {

    constructor (gameScreen, left, top, width, height) {

        //
        this.gameScreen = gameScreen;
        
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

        //Controladores de desplazamiento del jugador
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.src = "Images/player1.png"
        this.element.style.width = `${this.width}`
        this.element.style.height = `${this.height}`
        this.element.style.top = `${this.top}`
        this.element.style.left = `${this.left}`
        this.element.style.position = "absolute"

        this.gameScreen.appendChild(this.element);
        
    }

    move (){
        this.left += this.directionX
        this.top += this.directionY

        if(this.left < 0){
            this.left = 0
        }
        
        if(this.top < 0) {
            this.top = 0
        }

        if(this.left>this.gameScreen.offsetWidth - this.width - 30){
            this.left = this.gameScreen.offsetWidth - this.width - 30
        }

        if(this.top>this.gameScreen.offsetHeight - this.height + 30){
            this.top = this.gameScreen.offsetHeight - this.height +30
        }
        
        //Despues de settear los nuevos valores de posicion del Jugador, debemos cambiarlos en CSS
        
        this.updatePosition ()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    didCollide (obstacle) {
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if(playerRect.left<obstacleRect.right - 10 && playerRect.right > obstacleRect.left + 10 && playerRect.top < obstacleRect.bottom - 10 && playerRect.bottom > obstacleRect.top + 10 ) {
            return true;
        } else {
            return false;
        }
    }

    didGotEnergy (energy) {
        const playerRect = this.element.getBoundingClientRect()
        const energyRect = energy.element.getBoundingClientRect()

        if(playerRect.left<energyRect.right && playerRect.right > energyRect.left && playerRect.top < energyRect.bottom && playerRect.bottom > energyRect.top) {
            return true;
        } else {
            return false;
        }
    }
}
   
   