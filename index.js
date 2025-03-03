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
function updateScores(){
    scoreHeader = document.querySelector(".score");
    scoreHeader.textContent = "You: " + humanScore + " ---- Machine: " + computerScore;
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
function animateResponse(callback) {
    let page = document.querySelector(".pageContainer");
    let image = document.createElement("img");
    page.appendChild(image);

    let i = 0;

    function animate() {
        if (i >= 5) {
            image.remove();
            callback();
            return;
        }

        image.remove(); // Remove the previous image
        image = document.createElement("img"); // Create a new image

        if (i % 2 === 0) {
            image.src = "rock.jpg";
        }
        if (i % 3 === 0) {
            image.src = "papers.jpg";
        }
        if (i % 4 === 0) {
            image.src = "scissors.webp";
        }

        page.appendChild(image);
        i++;
        setTimeout(animate, 50); // Call `animate()` again after 50ms
    }

    animate(); // Start the animation loop
}


rock = document.querySelector(".rock");
paper = document.querySelector(".paper");
scissors = document.querySelector(".scissors");


rock = document.querySelector(".rock")
paper = document.querySelector(".paper");
scissors = document.querySelector(".scissors");
let page = document.querySelector(".pageContainer");
responseImage = document.createElement("img");

rock.addEventListener("click", ()=>{
    responseImage.remove();
    let computerChoice = getComputerChoice();
    animateResponse(() => {
        // This will run after animation is finished
        if (computerChoice === "Paper") {
            responseImage.src = "papers.jpg";
            computerScore++;
        }
        if (computerChoice === "Scissors") {
            responseImage.src = "scissors.webp";
            humanScore++;
        }
        if (computerChoice === "Rock") {
            responseImage.src = "rock.jpg";
        }
        page.appendChild(responseImage); // Append the image after animation
        updateScores();
    });
});

paper.addEventListener("click", ()=>{
    responseImage.remove();
    let computerChoice = getComputerChoice();
    animateResponse(() => {
        // This will run after animation is finished
        if (computerChoice === "Paper") {
            responseImage.src = "papers.jpg";
        }
        if (computerChoice === "Scissors") {
            responseImage.src = "scissors.webp";
            computerScore++;
        }
        if (computerChoice === "Rock") {
            responseImage.src = "rock.jpg";
            humanScore++;
        }
        page.appendChild(responseImage); // Append the image after animation
        updateScores();
    });
});

scissors.addEventListener("click", ()=>{
    responseImage.remove();
    let computerChoice = getComputerChoice();
    animateResponse(() => {
        // This will run after animation is finished
        if (computerChoice === "Paper") {
            responseImage.src = "papers.jpg";
            humanScore++;
        }
        if (computerChoice === "Scissors") {
            responseImage.src = "scissors.webp";
        }
        if (computerChoice === "Rock") {
            responseImage.src = "rock.jpg";
            computerScore++;
        }
        page.appendChild(responseImage); // Append the image after animation
        updateScores();
    });
});