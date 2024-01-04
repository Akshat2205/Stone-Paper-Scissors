let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const playGame = (userChoice) => {
    // Generate Computer Choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else{
    let userWin=true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissor"? false : true;
    }
    else{
        userWin = compChoice === "rock"? false : true; 
    }
    showWinner(userWin, userChoice , compChoice);
    }
}

const drawGame = () =>{
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "#003249";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        console.log("You lose.");
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }    
}