// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display");
const player1ScoreDisplay = document.getElementById("player1-score");
player1ScoreDisplay.textContent = 0;
const player2ChoiceDisplay = document.getElementById("player2-choice-display");
const player2ScoreDisplay = document.getElementById("player2-score");
player2ScoreDisplay.textContent = 0;

const gameStatusDisplay = document.getElementById("game-status");
const resetGameButton = document.getElementById("reset-game-btn");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    if(rockBtn) {
        player1ChoiceDisplay.textContent = "rock";

        const randomIndex = Math.floor(Math.random() * choices.length);

        player2ChoiceDisplay.textContent = choices[randomIndex];

        if(player1ChoiceDisplay.textContent === player2ChoiceDisplay.textContent) {
            gameStatusDisplay.textContent = "It's a tie!";
        } else if(player1ChoiceDisplay.textContent === "rock" && player2ChoiceDisplay.textContent === "scissors") {
            gameStatusDisplay.textContent = "Player 1 wins!";
            player1ScoreDisplay.textContent = parseInt(player1ScoreDisplay.textContent) + 1;
        } else if(player1ChoiceDisplay.textContent === "rock" && player2ChoiceDisplay.textContent === "paper") {
            gameStatusDisplay.textContent = "Player 2 wins!";
            player2ScoreDisplay.textContent = parseInt(player1ScoreDisplay.textContent) + 1;
        }

        // console.log("Rock was clicked");
    }
});

paperBtn.addEventListener("click", function () {
    if(paperBtn) {
        player1ChoiceDisplay.textContent = "paper";

        const randomIndex = Math.floor(Math.random() * choices.length);

        player2ChoiceDisplay.textContent = choices[randomIndex];

        if(player1ChoiceDisplay.textContent === player2ChoiceDisplay.textContent) {
            gameStatusDisplay.textContent = "It's a tie!";
        } else if(player1ChoiceDisplay.textContent === "paper" && player2ChoiceDisplay.textContent === "rock") {    
            gameStatusDisplay.textContent = "Player 1 wins!";
            player1ScoreDisplay.textContent = parseInt(player1ScoreDisplay.textContent) + 1;
        } else if(player1ChoiceDisplay.textContent === "paper" && player2ChoiceDisplay.textContent === "scissors") {
            gameStatusDisplay.textContent = "Player 2 wins!";
            player2ScoreDisplay.textContent = parseInt(player1ScoreDisplay.textContent) + 1;
        }

        // console.log("Paper was clicked");
    }
});

scissorsBtn.addEventListener("click", function () {
    if(scissorsBtn) {
        player1ChoiceDisplay.textContent = "scissors";

        const randomIndex = Math.floor(Math.random() * choices.length);

        player2ChoiceDisplay.textContent = choices[randomIndex];

        if(player1ChoiceDisplay.textContent === player2ChoiceDisplay.textContent) {
            gameStatusDisplay.textContent = "It's a tie!";
        } else if(player1ChoiceDisplay.textContent === "scissors" && player2ChoiceDisplay.textContent === "paper") {
            gameStatusDisplay.textContent = "Player 1 wins!";
            player1ScoreDisplay.textContent = parseInt(player1ScoreDisplay.textContent) + 1;
        } else if(player1ChoiceDisplay.textContent === "scissors" && player2ChoiceDisplay.textContent === "rock") {
            gameStatusDisplay.textContent = "Player 2 wins!"
            player2ScoreDisplay.textContent = parseInt(player1ScoreDisplay.textContent) + 1;
        }

        // console.log("Scissors was clicked");
    }
});

resetGameButton.addEventListener("click", function () { 
    if(resetGameButton) {
        player1ChoiceDisplay.textContent = "";
        player1ScoreDisplay.textContent = 0;
        player2ChoiceDisplay.textContent = "";
        player2ScoreDisplay.textContent = 0;
        gameStatusDisplay.textContent = "Game reset!";

        // console.log("Reset game button was clicked");
    }   
});