let playerSelection = rpsSelection();
let computerSelection = rpsSelection();
let playerScore = 0;
let computerScore = 0;
let gameText;
let computerWin = false;
let playerWin = false;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const randomBtn = document.querySelector('#random');
const gameResult = document.querySelector('#gameResult');
const playerScoreboard = document.querySelector('#playerScore');
const computerScoreboard = document.querySelector('#computerScore');
const playerChoice = document.querySelector('#playerSelection');
const computerChoice = document.querySelector('#computerSelection');

/**
 *
 * @returns RPS as string
 */
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

/**
 *
 * @param {} playerSelection players RPS selection
 * @param {} computerSelection computers RPS selection
 * @returns game text of win, loss, or draw and the matchup
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    gameText = 'It is a Draw';
    playerWin = false;
    computerWin = false;
  }
  if (
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')
  ) {
    gameText = 'Computer beats Player. Computer score plus 1';
    computerWin = true;
  }
  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    gameText = 'Player beats Computer. Player score plus 1';
    playerWin = true;
  }
  trackScore();
  return gameText;
}

// Event listeners for individual buttons
rockBtn.addEventListener('click', () => {
  playRound(1, computerSelection);
  gameResult.textContent = gameText;
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
});

paperBtn.addEventListener('click', () => {
  playRound(2, computerSelection);
  gameResult.textContent = gameText;
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
});

scissorsBtn.addEventListener('click', () => {
  playRound(3, computerSelection);
  gameResult.textContent = gameText;
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
});

randomBtn.addEventListener('click', () => {
  playRound(playerSelection, computerSelection);
  gameResult.textContent = gameText;
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
});

function trackScore() {
  if (playerWin) {
    playerScore++;
    playerScoreboard.textContent = playerScore;
  }
  if (computerWin) {
    computerScore++;
    computerScoreboard.textContent = computerScore;
  }
  announceWinner();
}

/**
 * alert when p or c reaches 5
 */
function announceWinner() {
  if (playerScore === 5 || computerScore === 5) {
    alert('Game Over. Score will Reset');
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}
