const rkButton = document.querySelector('#rk')
const prButton = document.querySelector('#pr')
const ssButton = document.querySelector('#ss')
const button = document.querySelector('button')

const getPlayerChoice = function() {
    return prompt("Choose Rock, Paper, or Scissors", "rock").toLowerCase();
}

rkButton.addEventListener('click', () => {
    let playerSelection = "rock";
});

prButton.addEventListener('click', () => {
    let playerSelection = "paper";
});

ssButton.addEventListener('click', () => {
    let playerSelection = "scissors";
});

const getCompChoice = function() {
    choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors"
    }
}

const playRound = function() {
    let computerSelection = getCompChoice();
    let playerSelection = getPlayerChoice();

    if ((playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "rock" && computerSelection == "scissors")) {
        console.log("You Won!!!" + playerSelection + " beats " + computerSelection)
        return "Win"
    }
    
    else if ((playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock")) {
        console.log("You Lost..." + playerSelection + " doesn't beat " + computerSelection)
        return "Loss"
    }
    
    else if (playerSelection === computerSelection){
        console.log("DRAW! A " + playerSelection + " tie!")
        return "Draw"
    } 
}

const game = function() {
    let pScore = 0;
    let cScore = 0;
    let first2 = 3;
    let result = "";

    for (let i = 0; i < first2; i++) {
        result = playRound()
        if (result == "Win") {
            pScore++
        } else if (result == "Loss") {
            cScore++
        }
    }

    if (pScore > cScore) {
        return "You Win! " + pScore + " to " + cScore
    } else if (pScore < cScore) {
        return "You Lost! " + pScore + " to " + cScore
    } else {
        return "You Tie! " + pScore + " to " + cScore
    }
}

console.log(game())