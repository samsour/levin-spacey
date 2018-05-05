import GameObject from "./GameObject";

export default class Projectile extends GameObject {
    constructor(name, type, x, y) {
        super(name, image, speed, width, height, maxX, maxY);
    }

}