function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[randomChoice()];
}
function randomChoice() {
  return Math.floor(Math.random() * 3);
}
let computerScore = 0;
let playerScore = 0;
function playRound(computerChoice, playerChoice) {
  switch (playerChoice) {
    case "rock":
      if (computerChoice == "paper") {
        computerScore++;
      } else {
        playerScore++;
      }
      break;
    case "paper":
      if (computerChoice == "scissor") {
        computerScore++;
      } else {
        playerScore++;
      }
      break;
    case "scissor":
      if (computerChoice == "rock") {
        computerScore++;
      } else {
        playerScore++;
      }
  }
}
const buttons = document.querySelectorAll(".container button");
let playerChoice = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    buttons.forEach((selectedBtn) => {
      if (playerChoice == selectedBtn.value) {
        selectedBtn.style.borderColor = "black";
      }
    });
    btn.style.borderColor = "gold";
    playerChoice = btn.value;
  });
});

const playerScoreNode = document.querySelector(".playerScore");
const computerScoreNode = document.querySelector(".computerScore");
const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener("click", function (event) {
  let result = playRound(getComputerChoice(), playerChoice);
  if (playerScore == 5) {
    alert("Player wins!");
    computerScore = 0;
    playerScore = 0;
  }
  if (computerScore == 5) {
    alert("Computer wins!");
    playerScore = 0;
    computerScore = 0;
  }
  playerScoreNode.textContent = `${playerScore}`;
  computerScoreNode.textContent = `${computerScore}`;
});
