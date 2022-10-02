function getComputerChoice() {
   const randomNum = Math.floor(Math.random() * 3) 
switch (randomNum) {
    case 0:
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
}
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

     playerSelection = prompt("To play game, select either Rock, Paper, or Scissors").toLowerCase();

    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You win!";
     } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose";
     } else if 
     }
}