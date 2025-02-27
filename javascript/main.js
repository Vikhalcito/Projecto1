//1. Declarando mis variables globales

const startBtnDOM = document.querySelector("#start-btn")
const canvas = document.querySelector("#canvas-area")
const startScreenDOM = document.querySelector("#start-screen")
const ctx = canvas.getContext("2d")
let game; 

//2.Funcionalidades dentro del juego
   // 2.1 inicio del juego
    const startGame = () => {
        console.log("Iniciando el juego")
        startScreenDOM.style.display = "none"
        canvas.style.display = "block"

    //2.2 crear el juego
    game = new Game ()
    
    // iniciamos el juego (gameLoop)
    game.gameLoop()

    }

    const playerMoveForward = (event) => {
        if(event.code === "ArrowRight") {
            game.player.playerMove()
        }
    }

    const playerMoveBackwards = (event) => {
        if(event.code === "ArrowLeft") {
            game.player.playerDecelerate()
        }
    }

    const playerJumpsOnce = (event) => {
        if(event.code === "ArrowUp"){  // Hacemos que el Player salte => para esquivar los obstaculos
            if (game.player.posY >= 350 && game.player.duck === false) {
                game.player.playerJumps()  // Ahora agregamos una restriccion para que solo pueda saltar si esta al nivel del Piso
                console.log("saltando")
            }
                
            
            }     
    }

    const playerDucks = (event) => {
        if(event.code === "ArrowDown"){
            game.player.player.src = "../Images/charAgachado.png"
            game.player.duck = true
            
        } else {
            game.player.player.src = "../Images/charSentado.png"
            game.player.duck = false

        }
    }


    

    

// eventListener's => aqui todos los events.

startBtnDOM.addEventListener("click", startGame)

window.addEventListener("keydown", playerMoveForward)
window.addEventListener("keydown", playerMoveBackwards)
window.addEventListener("keydown", playerJumpsOnce)
window.addEventListener("keydown", playerDucks)
