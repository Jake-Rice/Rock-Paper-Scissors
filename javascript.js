function getComputerChoice() {
  const choice = Math.floor(Math.random()*3)
  if (choice===0) return "Rock"
  if (choice===1) return "Paper"
  return "Scissors"
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase()+playerSelection.toLowerCase().slice(1);
  switch (playerSelection) {
    case "Rock":
      if (computerSelection==="Rock") return "It's a tie! Both chose Rock.";
      if (computerSelection==="Paper") return "You lose! Paper beats Rock.";
      if (computerSelection==="Scissors") return "You win! Rock beats Scissors.";
    case "Paper":
      if (computerSelection==="Rock") return "You win! Paper beats Rock.";
      if (computerSelection==="Paper") return "It's a tie! Both chose Paper.";
      if (computerSelection==="Scissors") return "You lose! Scissors beats Paper.";
    case "Scissors":
      if (computerSelection==="Rock") return "You lose! Rock beats Scissors.";
      if (computerSelection==="Paper") return "You win! Scissors beats Paper.";
      if (computerSelection==="Scissors") return "It's a tie! Both chose Scissors.";
    default:
      return "Invalid selection!";
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", playGame));

function playGame(e) {
  const result = document.querySelector("#result");
  const playerScore = document.querySelector("#player-score");
  const computerScore = document.querySelector("#computer-score");
  const outcome = playRound(e.target.id, getComputerChoice());
  result.textContent = outcome;
  if (/win/i.test(outcome)) {
    playerScore.textContent = +playerScore.textContent+1;
    if (+playerScore.textContent === 5) {
      document.querySelector("#game-result").textContent = "Player Wins!";
      buttons.forEach(button => button.removeEventListener("click", playGame));
    }
  }
  else if (/lose/i.test(outcome)) {
    computerScore.textContent = +computerScore.textContent+1;
    if (+computerScore.textContent === 5) {
      document.querySelector("#game-result").textContent = "Computer Wins!";
      buttons.forEach(button => button.removeEventListener("click", playGame));
    }
  }
}