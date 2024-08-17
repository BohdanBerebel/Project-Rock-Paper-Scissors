const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let round = 1;
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    while (choice >= 3) {
        choice = Math.floor(Math.random() * 10)
    }
    console.log("Comp's chosen: " + choice);
    choice == ROCK ? console.log("Comp's chosen: ROCK") :
    choice == PAPER ? console.log("Comp's chosen: PAPER") :
    console.log("Comp's chosen: SCISSORS");
    return choice;
}

// getComputerChoice();

function getHumanChoice() {
    
    let choice = prompt("Rock (enter 0), Paper (enter 1) or Scissors (enter 2)?");
    while (choice === null || choice.trim() === "" || (!(choice == ROCK || choice == PAPER || choice == SCISSORS || false))) {
        choice = prompt("You've input something wrong. Try again. Rock (enter 0), Paper (enter 1) or Scissors (enter 2)?");
    }
    console.log(`Round ${round}:`)
    round++;
    console.log("You've entered: " + choice);
    choice == ROCK ? console.log("You've chosen: ROCK") :
    choice == PAPER ? console.log("You've chosen: PAPER") :
    console.log("You've chosen: SCISSORS")

    return choice;
    }

// getHumanChoice();


let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == ROCK && computerChoice == PAPER) {
        console.log("You lose! Paper beats Rock")
        ++computerScore;
    } else if (humanChoice == PAPER && computerChoice == SCISSORS) {
        console.log("You lose! Scissors beats Paper")
        ++computerScore;
    }
    else if (humanChoice == SCISSORS && computerChoice == ROCK) {
        console.log("You lose! Rock beats Scissors")
        ++computerScore;
    }
    else if (humanChoice == computerChoice) {console.log("Draw!")}
    else {
        console.log("Congrats! You won!");
        ++humanScore;
    }
    console.log(`Score:\n
        Human ${humanScore} : ${computerScore} Computer`)
}

// playRound(getHumanChoice(), getComputerChoice());

function playGame() {
    for (let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
    }
}

playGame();

