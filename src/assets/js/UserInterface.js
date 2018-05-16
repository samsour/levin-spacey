export default class UserInterface {
    constructor() {
        this.abilityBar = {
            abilities: [
                "Fireball",
                "Heal",
                "empty",
                "empty",
                "empty"
            ],
            width: 300,
        };

        this.abilityBar.height = this.abilityBar.width / this.abilityBar.abilities.length;
    }
        
}