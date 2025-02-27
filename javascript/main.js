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

    

// eventListener's => aqui todos los events.

startBtnDOM.addEventListener("click", startGame)