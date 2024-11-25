let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1) return "Rock";
    if(randomNumber === 2) return "Paper";
    if(randomNumber === 3) return "Scissors";
}

function getHumanChoice(){
    return prompt("Enter Rock, Paper or Scissors");
}

function play(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice === computerChoice) {
        return "draw";
    }

    if (humanChoice === "Rock"){
        if(computerChoice === "Paper"){
            computerScore++;
            return "Computer Won!";
        }
        if(computerChoice === "Scissors"){
            humanScore++;
            return "Human Won!";
        }
    }

    if(humanChoice === "Paper"){
        if(computerChoice === "Scissors"){
            computerScore++;
            return "Computer Won!";
        }
        if(computerChoice === "Rock"){
            humanScore++;
            return "Human Won!";
        }
    }

    if(humanChoice === "Scissors"){
        if(computerChoice === "Rock"){
            computerScore++;
            return "Computer Won!";
        }
        if(computerChoice === "Paper"){
            humanScore++;
            return "Human Won!";
        }
    }
    return "Error";
}

function playRound(){
    console.log(play());
    console.log("Human score: " + humanScore);
    console.log("ComputerScore: " + computerScore);
}

function playGame(){
    while (roundsPlayed < 5){
        playRound();
        roundsPlayed++;
    }
    if (humanScore > computerScore){
        console.log("Human won!");
        return;
    }

    if (humanScore < computerScore) {
        console.log("Computer Won!");
        return;
    }
    console.log("Draw!");
}
