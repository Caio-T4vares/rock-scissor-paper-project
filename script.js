function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[randomChoice()];
}
function randomChoice() {
  return Math.floor(Math.random() * 3);
}
function playRound(computerChoice, playerChoice) {
  switch (playerChoice) {
    case "rock":
      if (computerChoice == "rock") {
        return "Draw";
      } else if (computerChoice == "paper") {
        return "Defeat";
      } else {
        return "Win";
      }
    case "paper":
      if (computerChoice == "paper") {
        return "Draw";
      } else if (computerChoice == "scissor") {
        return "Defeat";
      } else {
        return "Win";
      }
    case "scissor":
      if (computerChoice == "scissor") {
        return "Draw";
      } else if (computerChoice == "rock") {
        return "Defeat";
      } else {
        return "Win";
      }
  }
}
function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Choose your pick").toLowerCase();
    let result = playRound(computerChoice, playerChoice);
    if (result === "Defeat") {
      computerWins++;
    } else if (result == "Win") {
      playerWins++;
    }
  }
  if (playerWins > computerWins) alert("Congratulations, you are the winner!");
  else if (playerWins < computerWins) alert("OH NO! You lost the game!");
  else alert("Draw!!");
}
game();
