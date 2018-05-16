export default class Canvas {
    constructor() {
        this.canvas = document.getElementById('js-main-canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvasContext = this.canvas.getContext("2d");
        this.canvasContext.font = "20px Arial";



        this.background = new Image();
        this.background.src = "./assets/img/background.png";
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }

    drawCanvas(gameObjects) {
        this.clearCanvas();

        gameObjects.forEach((gameObject) => { // Each Entity
            
            // Game object shadow
            this.canvasContext.shadowColor = "rgba(0,0,0,.5";
            this.canvasContext.shadowBlur = 10;
            this.canvasContext.shadowOffsetX = 0;
            this.canvasContext.shadowOffsetY = 5;
            
            // Game object image
            this.canvasContext.drawImage(gameObject.sprite.image, 0, gameObject.sprite.frameIndex * 256, 256, 256, gameObject.x, gameObject.y, gameObject.width, gameObject.height);

            // Game object hp
            // frame
            this.canvasContext.beginPath();
            this.canvasContext.rect(gameObject.x, gameObject.y - 20, gameObject.width, 5);
            this.canvasContext.fillStyle = "#111";
            this.canvasContext.fill();
            // actual hp percentage
            this.canvasContext.beginPath();
            this.canvasContext.rect(gameObject.x, gameObject.y - 20, (gameObject.hp/gameObject.maxHp)*gameObject.width, 5);
            this.canvasContext.fillStyle = "red";
            this.canvasContext.fill();

            // Clear object shadow
            this.canvasContext.shadowBlur = 0;
            this.canvasContext.shadowOffsetX = 0;
            this.canvasContext.shadowOffsetY = 0;

            // Game object earshot radius
            this.canvasContext.beginPath();
            this.canvasContext.strokeStyle="#FF0000";
            this.canvasContext.arc(gameObject.x + (gameObject.width / 2), gameObject.y + (gameObject.height / 2), gameObject.earshot, 0, 2 * Math.PI);
            this.canvasContext.stroke();

            // Game object eyeshot radius
            this.canvasContext.beginPath();
            this.canvasContext.strokeStyle="#FFAA00";
            this.canvasContext.arc(gameObject.x + (gameObject.width / 2), gameObject.y + (gameObject.height / 2), gameObject.eyeshot, 0, 2 * Math.PI);
            this.canvasContext.stroke();
        });
    }

    clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // this.canvasContext.drawImage(this.background, 0, 0, this.getWidth(), this.getHeight(), 0, 0, this.getWidth(), this.getHeight());
    }
}