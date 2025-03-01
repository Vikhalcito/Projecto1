class Game {
    //------PROPIEDADES DEL JUEGO -------
    constructor (){

        //Pantallas de inicio - durante - terminado el juego - y otros elementos del DOM a seleccionar.
        this.introScreenDOM = document.querySelector("#game-intro")
        this.gameScreenDOM = document.querySelector("#game-screen")
        this.scoreScreenDOM = document.querySelector("#score-container")
        this.gameOverScreenDOM = document.querySelector("#game-over")

        this.scoreDOM = document.querySelector("#score")
        this.livesDOM = document.querySelector("#lives")

        //Jugador - obstaculos - recompensas
        this.player = new Player(this.gameScreenDOM, 20, 250, 90, 120)
        this.obstacles = []

        //Dimensiones del juego (screen)
        this.height = 600;
        this.width = 1200;

        //Contadores puntaje - vidas 
        this.score = 0
        this.lives = 3

        //Controladores del juego 
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = 1000/60 // => 60 frames x second.

    }

    // -------METODOS-------

    start() {

        //Setteando las dimensiones.
        this.gameScreenDOM.style.width = `${this.width}px`;
        this.gameScreenDOM.style.height = `${this.height}px`;

        //Cambiando la pantalla de inicio por la del juego.
        this.introScreenDOM.style.display = "none";
        this.gameScreenDOM.style.display = "block"

        //Iniciando el gameLoop
        this.gameIntervalId = setInterval(()=>{
            this.gameLoop()
        }, this.gameLoopFrequency)
    }

    gameLoop(){

        this.update();
        
        if(this.gameIsOver){
            clearInterval(this.gameIntervalId)
        }
    }

    update(){
        this.player.move()
        //console.log("Update esta funcionando")

        //Crear obstaculos
        for (let i = 0; i<this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move()
        }
        if(Math.random()>0.98 && this.obstacles.length>=0){
            this.obstacles.push(new Obstacle(this.gameScreenDOM))
            console.log("obstaculo aqui")
        }
    }
}

