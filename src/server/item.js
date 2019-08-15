const ObjectClass = require('./object');
const Constants = require('../shared/constants');

class Item {
    constructor(type, x, y){
        this.type = type;
        this.x = x;
        this.y = y;
        // how long does the item take to despawn
        this.uptime = 0;
    }

}

module.exports = Item;