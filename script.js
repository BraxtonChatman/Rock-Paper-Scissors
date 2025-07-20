
function getComputerChoice() {
    let choiceNum = (Math.floor(Math.random()*10)+1)%3;
    let choice = "";

    if(choiceNum == 0){
        choice = "rock";
    }
    else if(choiceNum == 1){
        choice = "paper";
    }
    else if(choiceNum == 2){
        choice = "scissors";
    }
    else{
        choice = "There was an error with computer choice";
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors: ").toLowerCase();

    if(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = "There was an error with human choice";
    }

    return choice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice == "rock"){
            if(computerChoice == "scissors"){
                humanScore++;
                console.log("You win: rock beats scissors");
            } 
            else if(computerChoice == "paper"){
                computerScore++;
                console.log("You lose: paper beats rock");
            } 
            else{
                console.log("You tied");
            }
        }
        else if(humanChoice == "paper"){
            if(computerChoice == "rock"){
                humanScore++;
                console.log("You win: paper beats rock");
            }
            else if(computerChoice == "scissors") {
                computerScore++;
                console.log("You lose: scissors beat paper");
            }
            else{
                console.log("You tied");
            }
        }
        else if(humanChoice == "scissors"){
            if(computerChoice == "paper") {
                humanScore++;
                console.log("You win: scissors beat paper");
            }
            else if(computerChoice == "rock") {
                computerScore++;
                console.log("You lose: rock beats scissors");
            }
            else{
                console.log("You tied");
            }
        }
        
        else {
            console.log("Something went wrong in playRound()");
        }
    }

    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    if(humanScore>computerScore){
        console.log("You win!\nYour score: " + humanScore + "\nComputer score: " + computerScore);
    }
    else{
        console.log("You lose.\nYour score: " + humanScore + "\nComputer score: " + computerScore);
    }
}



playGame();
// console.log("Human: " + humanScore + "\nComputer: " + computerScore);