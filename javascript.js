function getComputerChoice() {
  const choice = Math.floor(Math.random()*3)
  if (choice===0) return "Rock"
  if (choice===1) return "Paper"
  return "Scissors"
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0].toUpperCase()+playerSelection.toLowerCase().slice(1)
  switch (playerSelection) {
    case "Rock":
      if (computerSelection==="Rock") return "It's a tie! Both chose Rock."
      if (computerSelection==="Paper") return "You lose! Paper beats Rock."
      if (computerSelection==="Scissors") return "You win! Rock beats Scissors."
    case "Paper":
      if (computerSelection==="Rock") return "You win! Paper beats Rock."
      if (computerSelection==="Paper") return "It's a tie! Both chose Paper."
      if (computerSelection==="Scissors") return "You lose! Scissors beats Paper."
    case "Scissors":
      if (computerSelection==="Rock") return "You lose! Rock beats Scissors."
      if (computerSelection==="Paper") return "You win! Scissors beats Paper."
      if (computerSelection==="Scissors") return "It's a tie! Both chose Scissors."
    default:
      return "Invalid selection!"
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0
  for (let i=0; i<5; i++) {
    const result = playRound(prompt("Enter Rock, Paper or Scissors"), getComputerChoice())
    if (/win/.test(result)) playerScore++
    else if (/lose/.test(result)) computerScore++
    else if (/Invalid/.test(result)) i--;
    console.log(result+`\nPlayer: ${playerScore}, Computer: ${computerScore}`)
  }
  if (playerScore>computerScore) console.log("You win the game!")
  else if (playerScore<computerScore) console.log("You lose the game!")
  else console.log("It's a tie game!")
}

game()