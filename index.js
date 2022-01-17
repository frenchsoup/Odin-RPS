let playerSelection = rpsSelection();
let computerSelection = rpsSelection();
let playerScore = 0;
let computerScore = 0;

function rpsSelection() {
  let RPS = Math.floor(Math.random() * 3) + 1;
  if (RPS === 1) {
    RPS = 'Rock';
  }
  if (RPS === 2) {
    RPS = 'Paper';
  }
  if (RPS === 3) {
    RPS = 'Scissors';
  }
  return RPS;
}

function playRound(playerSelection, computerSelection) {
  let gameText;
  if (playerSelection === computerSelection) {
    gameText = 'It is a Draw';
  }
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    gameText = 'Rock loses to Paper. You lose';
    computerScore++;
  }
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    gameText = 'Rock beats Scissors. You Win';
    playerScore++;
  }
  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    gameText = 'Paper beats Rock. You Win';
    playerScore++;
  }
  if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    gameText = 'Paper loses to Scissors. You lose';
    computerScore++;
  }
  if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    gameText = 'Scissors loses to Rock. You lose';
    computerScore++;
  }
  if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    gameText = 'Scissors beats Paper. You Win';
    playerScore++;
  }
  return gameText;
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log('Player Score: ' + playerScore);
console.log('Computer Score: ' + computerScore);

function game() {
  playRound();
}

console.log(game());
