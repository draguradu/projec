const choises = ["rock", "paper", "scrissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoise) {
  const computerChoise = choises[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoise === computerChoise) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoise) {
      case "rock":
        result = computerChoise === "scrissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoise === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scrissors":
        result = computerChoise === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  playerDisplay.textContent = `Player choise: ${playerChoise}`;
  computerDisplay.textContent = `Computer choise: ${computerChoise}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = `Player score: ${playerScore}`;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
      break;
  }
}
