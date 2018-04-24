export default class Canvas {
    constructor() {
        this.test = 'okk';
        this.canvas = document.getElementById('js-main-canvas');
        this.canvasContext = this.canvas.getContext("2d");
        this.canvasContext.font = "20px Arial";

        this.background = new Image();
        this.background.src = "./assets/img/background.png";
    }

    drawCanvas(gameObjects) {
        this.clearCanvas();

        gameObjects.forEach((gameObject) => {
            this.canvasContext.drawImage(gameObject.sprite.image, 0, gameObject.sprite.frameIndex * 256, 256, 256, gameObject.x, gameObject.y, gameObject.width, gameObject.height);
        });
    }

    clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);

        this.canvasContext.drawImage(this.background, 200, 200, this.getWidth, this.getHeight);
    }

    getWidth() {
        return this.canvas.width;
    }

    getHeight() {
        return this.canvas.height;
    }
}