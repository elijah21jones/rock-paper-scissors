function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) /*Generate random num with Math.random(), to ensure it's between 0 and 3, multiply by 3. Use Math.floor to round to down to nearest num */
 switch (randomNum) { /*Create switch statement to take randomNum variable to perform different action based on the condition (case) */
     case 0:
         return "rock";
     case 1:
         return "paper";
     case 2:
         return "scissors";
 }
 }

function userInput() {
   const ask = prompt("To begin game, select Rock, Paper, or Scissors");
    return ask.toLowerCase();
    
 }

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
         return "You win!";
     } else if (playerSelection == "rock" && computerSelection == "paper") {
         return "You lose";
     } else if (playerSelection == "scissors" && computerSelection == "paper") {
         return "You win!";
     } else if (playerSelection == "scissors" && computerSelection == "rock") {
         return "You lose";
     } else if (playerSelection == "paper" && computerSelection == "rock") {
         return "You win!";
     } else if (playerSelection == "paper" && computerSelection == "scissors") {
         return "You lose";
     } else if (playerSelection ===  computerSelection) {
         return "It's a tie";
     } else {
         return "Try again";
     }
 }

    const playerSelection = userInput();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection, computerSelection)