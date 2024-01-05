// Code for bot choice
const getCompChoice = function() {
    choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

// Buttons for player choice
const rkButton = document.getElementById('rk')
const prButton = document.getElementById('pr')
const ssButton = document.getElementById('ss')

rkButton.addEventListener('click',function() {
    let playerSelection = "rock";
    game
    console.log(playerSelection);
});
prButton.addEventListener('click',function() {
    let playerSelection = "paper";
    console.log(playerSelection);
});
ssButton.addEventListener('click',function() {
    let playerSelection = "scissors";
    console.log(playerSelection);
});


// Win condition code
const playRound = function() {
    // let computerSelection = getCompChoice();
    // let playerSelection = getPlayerChoice();

    if ((playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "rock" && computerSelection == "scissors")) {
        // console.log("You Won!!!" + playerSelection + " beats " + computerSelection)
        return "Win"
    }
    else if ((playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock")) {
        // console.log("You Lost..." + playerSelection + " doesn't beat " + computerSelection)
        return "Loss"
    }
    else if (playerSelection === computerSelection){
        // console.log("DRAW! A " + playerSelection + " tie!")
        return "Draw"
    } 
}

// Game running code
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
        if (result == "Win" || result == "Loss") {
            first2 = first2 + 2
        }
    }

    if (pScore = first2) {
        return "You Win! " + pScore + " to " + cScore
    } else if (cScore = first2) {
        return "You Lost! " + pScore + " to " + cScore
    }
}

