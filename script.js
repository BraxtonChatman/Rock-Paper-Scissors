let rockButton = document.querySelector("#rockButton");
let paperButton = document.querySelector("#paperButton");
let scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", buttonHandler);
paperButton.addEventListener("click", buttonHandler);
scissorsButton.addEventListener("click", buttonHandler);

let humanScoreText = document.querySelector("#humanScore");
let computerScoreText = document.querySelector("#computerScore");
let roundMessage = document.querySelector("#roundMessage");
let winnerMessage = document.querySelector("#winnerMessage");

let computerScore = 0;
let humanScore = 0;
let roundNumber = 1;

function buttonHandler(event) {
    let buttonChoice = event.target.id;
    console.log("button pressed");
    switch(buttonChoice){
        case "rockButton":
            playRound("rock", getComputerChoice());
            break;

        case "paperButton":
            playRound("paper", getComputerChoice());
            break;

        case "scissorsButton":
            playRound("scissors", getComputerChoice());
            break;
    }
}

function getComputerChoice() {
    let choiceNum = (Math.floor(Math.random()*10)+1)%3;
    switch(choiceNum){
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    let roundMessageText = "";
    if(humanChoice === computerChoice){
        console.log("You tied.");
        roundMessageText = "You tied";
    }
    else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            humanScore++;
            console.log("You win: rock beats scissors");
            roundMessageText = "You win: rock beats scissors";
        } 
        else if(computerChoice == "paper"){
            computerScore++;
            console.log("You lose: paper beats rock");
            roundMessageText = "You lose: paper beats rock";
        } 
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            humanScore++;
            console.log("You win: paper beats rock");
            roundMessageText = "You win: paper beats rock";
        }
        else if(computerChoice == "scissors") {
            computerScore++;
            console.log("You lose: scissors beat paper");
            roundMessageText = "You lose: scissors beat paper";
        }
    }
    else if(humanChoice == "scissors"){
        if(computerChoice == "paper") {
            humanScore++;
            console.log("You win: scissors beat paper");
            roundMessageText = "You win: scissors beat paper"
        }
        else if(computerChoice == "rock") {
            computerScore++;
            console.log("You lose: rock beats scissors");
            roundMessageText = "You lose: rock beats scissors";
        }
    }

    humanScoreText.textContent = `Your Score: ${humanScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;

    let newRoundMessage = document.createElement("li");
    newRoundMessage.textContent = `Round ${roundNumber} - ` + roundMessageText;
    roundMessage.appendChild(newRoundMessage);
    roundNumber++;

    if(humanScore > 4 || computerScore > 4){
        winnerMessage.textContent = "GAME OVER: YOU LOSE";
        if(humanScore > computerScore){
            winnerMessage.textContent = "GAME OVER: YOU WIN!";
        }
        let buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}
