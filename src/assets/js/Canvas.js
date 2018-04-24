export default class Canvas {
    constructor() {
        this.test = 'okk';
        this.canvas = document.getElementById('js-main-canvas');
        this.canvasContext = this.canvas.getContext("2d");
        this.canvasContext.font = "20px Arial";
    }

    drawCanvas(gameObjects) {
        this.clearCanvas();

        gameObjects.forEach((gameObject) => {
            this.canvasContext.drawImage(gameObject.sprite.image, 0, gameObject.sprite.frameIndex * 256, 256, 256, gameObject.x, gameObject.y, gameObject.width, gameObject.height);
        });
    }

    clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.canvasContext.fillStyle = "#c5c5c5";
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }
}