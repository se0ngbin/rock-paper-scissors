const options = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;
let computerSelection;
let playerSelection;


function endGame(playerWon) {
    var scoreBoard = document.createElement('h1');
    scoreBoard.textContent = playerWon ? "YOU WIN!" : "YOU LOSE!";
    document.querySelector('body').appendChild(scoreBoard);

    var restart = document.createElement('button');
    restart.setAttribute("id", "restart");
    restart.textContent = "Play Again";
    document.querySelector('body').appendChild(restart);

    document.getElementById("restart").addEventListener('click', restartGame);
}

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log("Tie!");
    }
    else if (playerSelection === options[0] && computerSelection === options[1]
        || playerSelection === options[1] && computerSelection === options[2]
        || playerSelection === options[2] && computerSelection === options[0]) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        scoreComputer++;
        updateScore();
    }
    else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        scorePlayer++;
        updateScore();
    }
}

function updateScore() {
    document.getElementById("computerScore").textContent = scoreComputer;
    document.getElementById("playerScore").textContent = scorePlayer;
}

function restartGame() {
    document.querySelector("h1").remove();
    console.log(document.querySelector("h1"));
    document.querySelector("#restart").remove();
    scorePlayer = 0;
    scoreComputer = 0;
    updateScore();
}

function computerPlay() {
    let index = getRandomInt(3);
    return options[index];
}

function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

let btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        if (scoreComputer >= 5 || scorePlayer >= 5) return;

        playerSelection = button.id;

        playRound(playerSelection);

        if (scoreComputer === 5 || scorePlayer === 5) {
            endGame(scorePlayer > scoreComputer);
        }
    });
});
