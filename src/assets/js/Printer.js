import $ from 'jquery';

export default class Printer {
    
    static printLevel(level) {
        const el = document.getElementById('js-level-value');
        el.innerHTML = level;
    }

    static printHp(hp, maxHp) {
        const el = document.getElementById('js-player-hp');
        el.innerHTML = hp;
        $(el).css('width', this.getPercentage(hp,maxHp) + "%");
    }

    static printMp(mp, maxMp) {
        const el = document.getElementById('js-player-mp');
        el.innerHTML = mp;
        $(el).css('width', this.getPercentage(mp,maxMp) + "%");
    }

    static getPercentage(a,b) {
        return (100 / b) * a;
    }
}
