class Obstacle {
    // propiedades de los obstaculos => constructor
    constructor (gameScreen) {
      
        this.gameScreen = gameScreen;
        this.left = 1200;
        this.top = 60;
        this.width = 50;
        this.height = 120;
        this.element = document.createElement("img");
        this.element.src = "../Images/obstaculoTecho.png"
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

        this.gameScreen.appendChild(this.element)


    }

    move(){
        this.left -= 5;
        this.updatePosition();

    }
    
    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
    
}