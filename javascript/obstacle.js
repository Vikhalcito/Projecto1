class Obstacle {
    // propiedades de los obstaculos => constructor
    constructor () {
        this.image = new Image ()
        this.image.src = "../Images/obstaculoTecho.png"
        this.x = 900

        this.obsSpeed = 5

    }

    drawObstacle () {

        ctx.drawImage (this.image, this.x , 170 , 80 , 180 )
        console.log("its moving")
    }

    obstacleMoves () {
        this.x -= this.obsSpeed
    }
}