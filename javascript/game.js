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

        //añadiendo audios
        this.music = new Audio ();
        this.music.src = "../audio/gameBgm.mp3";
        this.music.volume = 0.5
        
            this.music.play();
        
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

        if(Math.random()>0.98 && this.obstacles.length>=0){
            this.obstacles.push(new Obstacle(this.gameScreenDOM))
            console.log("obstaculo aqui")
            console.log(this.obstacles.length)
        }

        //iteramos en el Arreglo de obstaculos para posteriomente checkear colisiones
        for (let i = 0; i<this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move()
            // Creamos dentro el loop la condicion para quitar un obstaculo si sucede una colision
            if(this.player.didCollide(obstacle)){               
                obstacle.element.remove() // Removemos el obstaculo colisionado del DOM
                //actualizamos el Score
                this.lives--
                this.livesDOM.innerText = this.lives;

                //Removemos el obstaculo del array para evitar iteraciones innecesarias y reducimos el length en 1.
                this.obstacles.splice(i, 1)
                i --
            } else if (obstacle.left < -obstacle.width){
                obstacle.element.remove();
                this.obstacles.splice(i, 1)
                i --
                console.log("obstaculo eliminado")
                console.log(this.obstacles.length)

            }
        }

        if(this.lives === 0) {
            this.endGame();
        }
        
    }

    endGame (){
        this.player.element.remove() // quitando el jugador del DOM
        this.obstacles.forEach((obstacle) => obstacle.element.remove()) // quitando los obstaculos del DOM
        
        this.music.pause()
        this.music.currentTime = 0;
        
        this.gameIsOver = true;
        this.gameScreenDOM.style.display = "none";
        this.gameOverScreenDOM.style.display = "block"
    }
}

