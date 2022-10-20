//choices array
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;


//Get random choice from comp 
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) //Generate random num with Math.random(), to ensure it's between 0 and 3, multiply by 3. Use Math.floor to round to down to nearest num
 switch (randomNum) { //Create switch statement to take randomNum variable to perform different action based on the condition (case)
     case 0:
         return "rock";
     case 1:
         return "paper";
     case 2:
         return "scissors";
 }
 }
    

 //single round gameplay
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore+=1
         return "You win! Rock beats scissors";
     } else if (playerSelection == "rock" && computerSelection == "paper") {
        compScore+=1
         return "You lose. Paper beats rock";
     } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore+=1
         return "You win! Scissors beat paper";
     } else if (playerSelection == "scissors" && computerSelection == "rock") {
        compScore+=1
         return "You lose. Rock beats scissors";
     } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore+=1
         return "You win! Paper beats rock";
     } else if (playerSelection == "paper" && computerSelection == "scissors") {
        compScore+=1
         return "You lose. Scissors beat paper";
     } else if (playerSelection ===  computerSelection) {
         return "It's a tie";
     } else {
         return "Try again";
     }
 }

 function userInput() {
    let ask = false;
    //while ask is still false, continue looping
    while (ask == false){
        const selction = prompt("Rock Paper or Scissors?")
        // if the prompt return is empty
        if (selction == null){
            //keep looping
            continue;
        }
        const selctionLower = selction.toLowerCase();
        //ask if array of choices [rock, paper, scissors] is in the user input
        if (choices.includes(selctionLower)){
            //then ask is true
            ask = true;
            return selctionLower;
        }

    }
 }

function game() {
    //loop
    for (let i = 0; i < 5; i++) {
        const playerSelection = userInput();
        const computerSelection = getComputerChoice();

    //call playRound function
    console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Game over")
    //log score
    if (playerScore > compScore) {
        console.log("Player wins!")
    }
    else if (playerScore < compScore) {
        console.log("Computer wins!")
    }
    else {
        console.log("It's a tie!")
    }
}
game()