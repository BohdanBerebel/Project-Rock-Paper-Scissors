const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let round = 1;

const div = document.querySelector("#container");
const results = document.querySelector("#results");
results.textContent = "";

function convertor (number) {
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
        default:
            console.log("ERROR")
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    while (choice >= 3) {
        choice = Math.floor(Math.random() * 10)
    }
    choice == 0 ? results.textContent += `Comp's chosen: ${convertor(choice)}\n` :
    choice == 1 ? results.textContent += `Comp's chosen: ${convertor(choice)}\n` :
    results.textContent += `Comp's chosen: ${convertor(choice)}\n`;
    return convertor(choice);
}


function getHumanChoice(target) {
    let choice = target;
    choice == ROCK ? results.textContent += `You've chosen: ${choice}\n` :
    choice == PAPER ? results.textContent += `You've chosen: ${choice}\n` :
    results.textContent += `You've chosen: ${choice}\n`
    return choice;
    }

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == ROCK && computerChoice == PAPER) {
        results.textContent += "You lose! Paper beats Rock\n"
        ++computerScore;
    } else if (humanChoice == PAPER && computerChoice == SCISSORS) {
        results.textContent += "You lose! Scissors beats Paper\n"
        ++computerScore;
    }
    else if (humanChoice == SCISSORS && computerChoice == ROCK) {
        results.textContent += "You lose! Rock beats Scissors\n"
        ++computerScore;
    }
    else if (humanChoice == computerChoice) {results.textContent += "Draw!\n"}
    else {
        results.textContent += "Congrats! You won!\n";
        ++humanScore;
    }
    results.textContent += `Score:\nHuman ${humanScore} : ${computerScore} Computer\n\n`
}

function playGame(target) {
    results.textContent += `Round ${round}:\n`;
    round++;
    let humanSelection = getHumanChoice(target);
    let computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
    if(humanScore == 5 || computerScore == 5) {
        const winnerAnnouncement = document.createElement("p");
        humanScore > computerScore ? winnerAnnouncement.textContent = "Congratulations! You won!" :
        winnerAnnouncement.textContent = "Unluckily, you lost... You may try again"
        results.appendChild(winnerAnnouncement);
    }
    };

div.addEventListener("click", (e) => {
playGame(e.target.attributes.id.value);
});
