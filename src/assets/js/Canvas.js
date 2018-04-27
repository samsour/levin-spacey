export default class Canvas {
    constructor() {
        this.test = 'okk';
        this.canvas = document.getElementById('js-main-canvas');
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

        gameObjects.forEach((gameObject) => {
            
            // Game object shadow
            this.canvasContext.shadowColor = "rgba(0,0,0,.5";
            this.canvasContext.shadowBlur = 10;
            this.canvasContext.shadowOffsetX = 2;
            this.canvasContext.shadowOffsetY = 5;
            
            // Game object image
            this.canvasContext.drawImage(gameObject.sprite.image, 0, gameObject.sprite.frameIndex * 256, 256, 256, gameObject.x, gameObject.y, gameObject.width, gameObject.height);

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