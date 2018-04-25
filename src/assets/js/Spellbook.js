export default class Spellbook {
    constructor() {
        this.spellList = [];
    }

    addSpell(spell) {
        if(!this.spellList.includes(spell)) {
            this.spellList.push(spell)
            
            console.log(spell + " has been added.");
        } else {
            console.log("Spell already learned.");
        }
    }
}