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
            this.canvasContext.fillStyle = gameObject.color;
            this.canvasContext.fillRect(gameObject.x, gameObject.y, gameObject.width, gameObject.height);
        });
    }

    clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getWidth() {
        console.log("Canvas Width: " + this.canvas.width);
        return this.canvas.width;
    }

    getHeight() {
        console.log("Canvas Height: " + this.canvas.height);
        return this.canvas.height;
    }
}