const choices = ["rock","paper","scissors"]
let pScore = 0;
let cScore = 0;
let ties = 0;
let first2 = 5;

function resetGame() {
    pScore = 0;
    cScore = 0;
    document.querySelector('.pScore').textContent = `${pScore}`
    document.querySelector('.cScore').textContent = `${cScore}`
    document.querySelector('#resultM').textContent =``
}


// Code for bot choice
function getCompChoice() {
    // Update dom with the info
    return choices[Math.floor(Math.random() * choices.length)]
}

// Buttons for player choice
// function getPlayerChoice() {
//     let input = prompt("type rock paper or scissors");
//     while (input == null) {
//         input = prompt("type rock paper or scissors");
//     }
//     input = input.toLowerCase();
//     return input
// }


// Win condition code
function checkOutcome(playerSelection,computerSelection) {
    if ((playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "rock" && computerSelection == "scissors")) {
        //console.log("You Won!!!" + playerSelection + " beats " + computerSelection)
        pScore++
        return "Win"
    }
    else if (playerSelection === computerSelection){
        //console.log("DRAW! A " + playerSelection + " tie!")
        ties++
        return "Draw"
    } 
    else {
        //console.log("You Lost..." + playerSelection + " doesn't beat " + computerSelection)
        cScore++
        return "Loss"
    }
}

function updateTally() {
    document.querySelector('.pScore').textContent = `${pScore}`
    console.log("pScore:" + pScore)
    document.querySelector('.cScore').textContent = `${cScore}`
    console.log("cScore:" + cScore)
    console.log("--------------")
}

function displayInfo(playerSelection,computerSelection,outcome) {
    // LOOK HERE USE document.querySelectorAll VID AT 7:30
    if(outcome == "Win") {
        //console.log("You Won!!!" + playerSelection + " beats " + computerSelection)
        document.querySelector('#resultM').textContent =`You Won!!! ${playerSelection} beats ${computerSelection}`
    }
    else if(outcome == "Draw") {
        //console.log("DRAW! A " + playerSelection + " tie!")
        document.querySelector('#resultM').textContent = `DRAW! Both chose ${playerSelection}!`
    }
    else {
        //console.log("You Lost..." + playerSelection + " doesn't beat " + computerSelection)
        document.querySelector('#resultM').textContent = `You Lost... ${playerSelection} doesn't beat ${computerSelection}`
    }
}

function displayEnd() {
    if (pScore == first2) {
        document.querySelector('#resultM').textContent = `You Won! ${pScore} out of ${cScore+pScore+ties} games. Now click Reset to try again`
    } else {
        document.querySelector('#resultM').textContent = `You Lost! ${cScore} out of ${cScore+pScore+ties} games. Now click Reset to try again`
    }
}

function playRound(playerSelection) {
    if(pScore >= first2) {
        return;
    }
    console.log("Player:",playerSelection)

    let computerSelection = getCompChoice();
    console.log("Comp:",computerSelection)
    const outcome = checkOutcome(playerSelection,computerSelection);
    console.log(outcome)
    updateTally();
    displayInfo(playerSelection,computerSelection,outcome);
    if (pScore == first2 || cScore == first2) {
        displayEnd()
    }
}

// Game running code
// function game() {
//     let result = "";

//     for (let i = 0; i < first2; i++) {
//         result = playRound()
//         if (result == "Win") {
//             pScore++
//         } else if (result == "Loss") {
//             cScore++
//         }
//     }

    // if (pScore = first2) {
    //     return "You Win! " + pScore + " out of " + (cScore+pScore) + " games"
    // } else if (cScore = first2) {
    //     return "You Lost! " + cScore + " out of " + (cScore+pScore) + " games"
    // }
//}

function startGame() {
    // Play game until goal
    let cho = document.querySelectorAll('.box')
    cho.forEach((cho) =>
        cho.addEventListener(('click'), () =>{
            if(cho.id) {
                playRound(cho.id);
            }
        })
    );
}


startGame()
//console.log(game())