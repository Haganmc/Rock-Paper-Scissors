
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

function getUserChoice() {
    // Ask for user's choice
    // Get user choice and store it in variable
    const user_choice = prompt(
        "Enter your choice: Rock, Paper, or Scissors").toLowerCase();
    // Return the users choice
    return user_choice
}

// initialize scores
let computerScore = 0;
let humanScore = 0;