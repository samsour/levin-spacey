const shortid = require('shortid');
const ObjectClass = require('./object');
const Constants = require('../shared/constants');

class Item extends Object{
    constructor(type, x, y){
        super(shortid(), x, y, 0, 0);
        this.type = type;
        this.x = x;
        this.y = y;
        // how long does the item take to despawn
        this.uptime = 0;
    }

}

module.exports = Item;