function getCompChoice() {
    choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors"
    }
}

function getPlayerChoice() {
    return prompt("Choose Rock, Paper, or Scissors", "rock").toLowerCase();
}

function playRound() {
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
    
    else {
        return playerSelection + " isn't part of the game..."
    }
}

function game() {
    let pScore = 0;
    let cScore = 0;
    let result = "";

    for (let i = 0; i < 5; i++) {
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