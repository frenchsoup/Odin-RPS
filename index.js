function computerPlay() {
  let RPS = Math.floor(Math.random() * 3) + 1;
  if (RPS === 1) {
    RPS = 'rock';
  }
  if (RPS === 2) {
    RPS = 'paper';
  }
  if (RPS === 3) {
    RPS = 'scissors';
  }
  return RPS;
}

function playRound(playerSelection, computerSelection) {
  let gameText;
  if (playerSelection === computerSelection) {
    gameText = 'It is a Draw';
  }
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    gameText = 'Rock loses to Paper. You lose';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    gameText = 'Rock beats Scissors. You Win';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    gameText = 'Paper beats Rock. You Win';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    gameText = 'Paper loses to Scissors. You lose';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    gameText = 'Scissors loses to Rock. You lose';
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    gameText = 'Scissors beats Paper. You Win';
  }
  return gameText;
}

const playerSelection = computerPlay();
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
