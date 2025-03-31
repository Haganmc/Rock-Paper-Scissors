
function getComputerChoice () {
    const choice = Math.floor(Math.random() * 3);
    console.log(choice);
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    // Ask for user's choice
    // Get user choice and store it in variable
    const humanChoice = prompt(
        "Enter your choice: Rock, Paper, or Scissors");
    // Return the users choice
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats rock");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats paper");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore += 1;
    } else {
        console.log("TIE!");
    }
}

function playGame(){
    for (let i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log("You Win!!");
    } else if (humanScore < computerScore) {
        console.log("Sorry you lose! Try Again!");
    } else {
        console.log("Tie")
    }
}

// initialize scores
let computerScore = 0;
let humanScore = 0;

playGame();
