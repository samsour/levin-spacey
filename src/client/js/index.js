import '../scss/main.scss';
import { connect, play } from './networking';
import { startRendering, stopRendering } from './render';
import { startCapturingInput, stopCapturingInput } from './input';
import { downloadAssets } from './assets';
import { initState } from './state';
import { setLeaderboardHidden } from './leaderboard';

const playMenu = document.getElementById('js-play-menu');
const playButton = document.getElementById('js-play-button');
const usernameInput = document.getElementById('js-username-input');

Promise.all([
  connect(onGameOver),
  downloadAssets(),
]).then(() => {
  playMenu.classList.remove('is-hidden');
  usernameInput.focus();
  
  playButton.onclick = () => {
    startGame();
  };
  usernameInput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        // Start game also on enter while entering username
        startGame();
    }
});

}).catch(console.error);

function startGame() {
  // Play!
  console.log('Start game!');
  play(usernameInput.value);
  playMenu.classList.add('is-hidden');
  initState();
  startCapturingInput();
  startRendering();
  setLeaderboardHidden(false);
}

function onGameOver() {
  stopCapturingInput();
  stopRendering();
  playMenu.classList.remove('is-hidden');
  setLeaderboardHidden(true);
}
