import Game from './Game';

let ready = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(ready);

        const game = new Game();
    }
}, 100);
