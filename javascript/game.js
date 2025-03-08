class Game {
    
    constructor (){

        this.introScreenDOM = document.querySelector("#game-intro")
        this.gameScreenDOM = document.querySelector("#game-screen")
        this.scoreScreenDOM = document.querySelector("#score-container")
        this.gameOverScreenDOM = document.querySelector("#game-over")

        this.youWinScreenDOM = document.querySelector("#game-clear")


        this.scoreDOM = document.querySelector("#score")
        this.livesDOM = document.querySelector("#lives")

        this.player = new Player(this.gameScreenDOM, 20, 250, 90, 120)
        this.obstacles = []

        this.energy = []

       
        this.height = 600;
        this.width = 1200;

        
        this.score = 0
        this.lives = 5

        
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = 1000/60 


        this.music = new Audio ();
        this.music.src = "audio/introBgm.mp3";
        this.music.volume = 0.2
        this.music.play();
        this.music.loop = true;

        this.music1 = new Audio ()
        this.music1.src = "audio/colisionMP3.mp3"
        this.music1.volume = 0.2

        this.music2 = new Audio ()
        this.music2.src = "audio/scoringMP3.mp3"
        this.music2.volume = 0.2

       
        
    }


    start() {

        this.gameScreenDOM.style.width = `${this.width}px`;
        this.gameScreenDOM.style.height = `${this.height}px`;

        this.introScreenDOM.style.display = "none";
        this.gameScreenDOM.style.display = "block"

        



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
    
        
        
        let randomNum = Math.random()

        if(randomNum>0.97 && this.obstacles.length < 15 && this.score < 50 ){
            this.obstacles.push(new Obstacle(this.gameScreenDOM))
            
        }

       
        if(randomNum>0.995 && this.energy.length < 1 ){
            this.energy.push(new Energy(this.gameScreenDOM))
        
        }

     

         
        for (let i = 0; i<this.obstacles.length; i++){
            
            const obstacle = this.obstacles[i];
            obstacle.move()
            if(this.player.didCollide(obstacle)){               
                obstacle.element.remove() 
                
                this.lives--
                this.livesDOM.innerText = this.lives;

                
                this.obstacles.splice(i, 1)
                i --
            } else if (obstacle.left < -obstacle.width && this.score < 50){

                obstacle.element.remove();
                this.obstacles.splice(i, 1)

                if(this.score < 50) {
                    this.score ++
                    this.scoreDOM.innerText = this.score
                }
                
                i --

            }}

              
        for(let i = 0; i<this.energy.length; i++){
            const energy = this.energy[i];
            energy.move()

            if(this.player.didGotEnergy(energy)){               
                energy.element.remove() 
                
                this.music2.play()
                if(this.lives < 5)  {
                    this.lives ++
                    this.livesDOM.innerText = this.lives;
                }
                

                
                this.energy.splice(i, 1)
                i --
            } else if (energy.left < -energy.width){
                energy.element.remove();
                this.energy.splice(i, 1)
                i --
               

            }
        }

        if (this.player.top > 435){
                this.lives = 0
                this.livesDOM.innerText = this.lives
                this.music1.play()   
            }

        if (this.player.top < 58){
                this.lives = 0
                this.livesDOM.innerText = this.lives
                this.music1.play()   
            }



        if(this.lives === 0 || this.score >= 50) {

            this.endGame();
        }

        
        
    }

    endGame (){
        this.player.element.remove() 
        this.obstacles.forEach((obstacle) => obstacle.element.remove())
        
        this.music.pause()
        this.music.currentTime = 0;

        if(this.lives === 0) {
            this.gameIsOver = true;
            this.gameScreenDOM.style.display = "none";
            this.gameOverScreenDOM.style.display = "block"


        } else if (this.score >= 50) {

            this.gameIsOver = true;
            this.gameScreenDOM.style.display = "none";
            this.youWinScreenDOM.style.display = "block"

        }    
        
    }
}

