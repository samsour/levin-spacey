import escape from 'lodash/escape';

const leaderboard = document.getElementById('js-leaderboard');

export function updateLeaderboard(data) {
  for (let i = 0; i < data.length; i++) {
    const player = data[i];
    
    let playerNode = leaderboard.querySelector(".leaderboard__entry--" + player.username);
    console.log(playerNode);
    if(playerNode == null) {
      playerNode = document.createElement("div");
      playerNode.classList.add("leaderboard__entry", "leaderboard__entry--" + player.username)
      leaderboard.appendChild(playerNode);
    }
    playerNode.innerHTML = player.username + ": " + player.score;
  }
}

export function setLeaderboardHidden(hidden) {
  if (hidden) {
    leaderboard.classList.add('is-hidden');
  } else {
    leaderboard.classList.remove('is-hidden');
  }
}
