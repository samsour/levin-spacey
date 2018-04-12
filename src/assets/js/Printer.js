
export default class Printer {
    static printLevel(level) {
        const el = document.getElementById('js-level-value');
        el.innerHTML = level;
    }
}
