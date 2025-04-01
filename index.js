
// initialize scores
let computerScore = 0;
let humanScore = 0;
const div = document.querySelector("#results");
div.style.fontSize = "20px";
div.style.color = "#333";
div.style.backgroundColor = "orange";
div.style.border = "2px solid #ccc";
div.style.padding = "10px";
div.style.marginTop = "20px";
div.style.textAlign = "center";
div.style.borderRadius = "5px";
div.style.width = "50%";
div.style.marginLeft = "auto";
div.style.marginRight = "auto";

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


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        div.textContent = `Round won! ${humanChoice} beats ${computerChoice}. Score: [${humanScore}:${computerScore}]`;
    } else if (humanChoice === computerChoice) {
        div.textContent = `Round Tie. Score: [${humanScore}:${computerScore}]`;
    } else {
        computerScore += 1;
        div.textContent = `Round lost! ${computerChoice} beats ${humanChoice}. Score: [${humanScore}:${computerScore}]`;
    }

    if (humanScore === 5) {
        div.textContent = `Congratulations! You won the game! Final Score: [${humanScore}:${computerScore}]`;
        disableButtons();
        addPlayAgainButton();
    } else if (computerScore === 5){
        div.textContent = `Game over! The computer won the game. Final Score: [${humanScore}:${computerScore}]`;
        disableButtons();
        addPlayAgainButton();
    }
}

function disableButtons() {
    const choices = document.querySelectorAll("#rock, #paper, #scissors");
    choices.forEach(choice => {choice.disabled = true;});
}

function addPlayAgainButton() {
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.style.fontSize = "16px";
    playAgainButton.style.padding = "10px 20px";
    playAgainButton.style.marginTop = "20px";
    playAgainButton.style.border = "2px solid #333";
    playAgainButton.style.borderRadius = "5px";
    playAgainButton.style.backgroundColor = "#f0f0f0";
    playAgainButton.style.cursor = "pointer";
    playAgainButton.style.display = "block";
    playAgainButton.style.marginLeft = "auto";
    playAgainButton.style.marginRight = "auto";

    // Add the button below the results div
    div.parentNode.insertBefore(playAgainButton, div.nextSibling);

    // Add event listener to reset the game
    playAgainButton.addEventListener("click", () => {
        resetGame();
        playAgainButton.remove(); // Remove the button after resetting
    });
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    div.textContent = "Game reset. Make your move!";
    const choices = document.querySelectorAll("#rock, #paper, #scissors");
    choices.forEach(choice => { choice.disabled = false; });
}

function playGame(){
    // Get Human Choice
    // Get Computer Choice
    const choices = document.querySelectorAll("#rock, #paper, #scissors");
    let humanChoice = null;
 
    choices.forEach(choice => {
     choice.addEventListener("click", () => {
        humanChoice = choice.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
     });
    });
}

playGame();
