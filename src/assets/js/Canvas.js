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
            console.log("Painting", gameObject.name);
            this.canvasContext.rect(gameObject.x, gameObject.y, gameObject.width, gameObject.height);
            this.canvasContext.stroke();
        });
    }

    clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }
}