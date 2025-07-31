let userScore = 0;
let compScore = 0;

const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const ch = document.querySelector("#ch");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"]; 

    return options[Math.floor(Math.random()*3)];
}

const drawGame = (userChoice) => {
    console.log("Draw");
    msg.innerText = "It was a Draw!";
    ch.innerText = `Both chose ${userChoice}`;
    // ch.style.backgroundColor = "#2eabe8";
    msg.style.backgroundColor = "#2eabe8";
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        console.log("user won");
        
        userScore++;
        user.innerText = userScore;

        msg.innerText = "You Win!";
        msg.style.backgroundColor = "rgb(30 224 30)";
    }   
    else
    {
        console.log("comp won");

        compScore++;
        comp.innerText = compScore;

        msg.innerText = "You lost, Comp Won!";
        msg.style.backgroundColor = "red";
    }
    
    ch.innerHTML = `You - ${userChoice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comp - ${compChoice}`;
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice==compChoice)
        drawGame(userChoice);

    else{
        let userWin = true;
        if(userChoice=="rock")
            userWin = compChoice == "paper" ? false : true;
        else if(userChoice == "paper")
            userWin = compChoice == "scissor" ? false : true;
        else    //userchoice=scissor
            userWin = compChoice == "rock" ? false : true;

        showWinner (userWin,userChoice,compChoice);
       
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice + " choice was selected");
        playGame(userChoice);
    });
});


let btn = document.querySelector("#bn");

btn.addEventListener("click", () => {
    userScore = 0;
    user.innerText = userScore;
    compScore = 0;
    comp.innerText = compScore;

    ch.innerText = "";

    msg.innerText = "Select your choice";
    msg.style.backgroundColor = "#2eabe8";
})