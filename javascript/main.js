window.onload = function (){
    
    const startButtonDOM = document.querySelector("#start-button");
    const restartButtonDOM = document.querySelector("#restart-button")
    
    let game;
    

    function startGame (){
        console.log("start game")
        game = new Game ();
        game.start();
        game.scoreScreenDOM.style.display = "flex"
       
        
    }

    function reStartGame (){
        game = new Game ();
        game.start()
        game.scoreScreenDOM.style.display = "flex"
        game.gameOverScreenDOM.style.display = "none"
        game.livesDOM.innerText = 3
    }


    startButtonDOM.addEventListener("click",startGame )
    restartButtonDOM.addEventListener("click", reStartGame)

    document.addEventListener("keydown", (event)=>{
        console.log(event.key)
        const possibleKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]

        if(possibleKeys.includes(event.key)){
           event.preventDefault();

           switch(event.key){
            case "ArrowLeft":
                let speed = 3
                if(event.shiftKey){
                    speed = 10
                }
                game.player.directionX = -speed;
                break;
            
            case "ArrowRight":
                game.player.directionX = +3;
                break;

            case "ArrowUp":
                game.player.directionY = -3
                break;

            case "ArrowDown":
                game.player.directionY = +3
           }
        }
    })

         window.addEventListener('keyup', (event) => {
    const possibleKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (possibleKeys.includes(event.key)) {
      event.preventDefault();

      switch (event.key) {
        // case 'ArrowLeft':
        // case 'ArrowRight':
        //   game.player.directionX = 0;
        //   break;
        case 'ArrowUp':
        case 'ArrowDown':
          game.player.directionY = 0;
          break;
      }
    }
  }); 
    
}