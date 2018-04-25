export default class Spell {
    constructor(name, cost, cooldown) {
        this.name = name;
        this.cost = cost;
        this.coolDown = cooldown;
    }

    isOnCooldown() {
        let isCoolingDown = false;
        
        // code goes here

        return isCoolingDown;
    }
}