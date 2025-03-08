class Energy {

    constructor (gameScreen) {
      
        this.gameScreen = gameScreen;
        this.left = 1200;
        this.top = Math.random() * 445
        this.width = 50;
        this.height = 50;
        this.element = document.createElement("img");
        this.element.src = "Images/energyBar.png"
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.posY}px`

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