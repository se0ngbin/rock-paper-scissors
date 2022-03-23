const options = ["rock", "paper", "scissors"];

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case 0:
                scorePlayer++;
                scoreComputer++;
                break;
            case 1:
                scorePlayer++;
                break;
            case -1:
                scoreComputer++;
                break;
            default:
                break;
        }
    }

    let score = `You: ${scorePlayer} Computer: ${scoreComputer}`;
    if (scorePlayer === scoreComputer) {
        console.log(score + " ------ Tie");
    }
    else {
        console.log(scoreComputer < scorePlayer ? score + " ------ You Win" : score + " ------ You Lose");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie!");
        return 0;
    }
    else if (playerSelection === options[0] && computerSelection === options[1]
        || playerSelection === options[1] && computerSelection === options[2]
        || playerSelection === options[2] && computerSelection === options[0]) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
    else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1
    }

}

function computerPlay() {
    let index = getRandomInt(3);
    return options[index];
}

function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

game();