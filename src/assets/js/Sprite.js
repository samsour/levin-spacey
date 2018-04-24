export default class Sprite {
    constructor(image) {
        this.image = new Image();
        this.image.src = "./assets/img/" + image;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 30;
    }

    update(state) {
        this.tickCount++;

        if(state == "moving") {
            if(this.tickCount > this.ticksPerFrame) {
                this.tickCount = 1;

                if(this.frameIndex >= 2) {
                    this.frameIndex = 1;
                } else {
                    this.frameIndex++;
                }
            }
        } else {
            this.frameIndex = 0;
        }
        
    }
}