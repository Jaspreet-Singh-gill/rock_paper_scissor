//Function to get the choice from the computer

function getComputerChoice(){
    let val = Math.floor(Math.random()*3);
    switch(val){
        case 0:
            return "STONE"; // No break statement required as function will return as val's value matches
        case 1:
            return "PAPER";
        case 2:
            return "SCISSOR";
    };

}

// //Function that takes Input from user and return it

// function getHumanChoice(event){
//     let input = event;
//     console.log(input);
//     return input.toUpperCase();
// }

function disable(){
        Hbutton1.disabled =true;
        Hbutton2.disabled =true;
        Hbutton3.disabled =true;
        Cbutton1.disabled = true;
        Cbutton2.disabled = true;
        Cbutton3.disabled = true;
}

function enable(){
    Hbutton1.disabled =false;
        Hbutton2.disabled =false;
        Hbutton3.disabled =false;
        Cbutton1.disabled = false;
        Cbutton2.disabled = false;
        Cbutton3.disabled = false;

}


let humanScore =0;
let computerScore =0;
let result =5;


function playRound(humanChoice,computerChoice){

    if(humanChoice === computerChoice){
        footMessage.textContent =("Tie, No one wins");
        disable();
        footer.appendChild(buttonNext);
    }
    else if((humanChoice == "PAPER" && computerChoice == "STONE")
            ||(humanChoice == "STONE" && computerChoice == "SCISSOR")
            ||(humanChoice == "SCISSOR" && computerChoice == "PAPER")){
        humanScore++;
        footMessage.textContent = (`You win, ${humanChoice} beats ${computerChoice}.`);
        disable();
        footer.appendChild(buttonNext);

    }
    else{
        computerScore++;
        footMessage.textContent = (`You lose, ${computerChoice} beats ${humanChoice}.`);
        disable();
        footer.appendChild(buttonNext);
        
    }

    if(computerScore == result && humanScore == result){
        result++;
    }
    let flag =false;
    if(computerScore == result){
        footMessage.textContent = "GameOver Computer won the game"
        flag =true;
    }
    if(humanScore == result){
        footMessage.textContent = "GameOver You won the game"
        flag =true;

    }



    if(flag){
        disable();
        footer.removeChild(buttonNext);
        footer.appendChild(buttonRestart);

    }

    rightScore.textContent = (` human score : ${humanScore}`);
    leftScore.textContent=  (`Computer score : ${computerScore}`);

    
}


// function playGame(){
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     console.log("Result:");
//     if(humanScore > computerScore){
//         console.log("You win the game");
//     }
//     else if(humanScore < computerScore){
//         console.log("You lose the game");
//     }
//     else{
//         console.log("Their is a tie now");
//     }

// }

// playGame();

const middleLeft = document.querySelector(".middleLeft");
const middleRight = document.querySelector(".middleRight");
const footer = document.querySelector(".footer");

const humanImage = document.querySelector(".humImage");
const comImage = document.querySelector(".compImage");
const start =document.querySelector(".start");


const leftContainerButtons = document.createElement("div");
leftContainerButtons.classList.add("buttonLeft");
const rightContainerButtons = document.createElement("div");
rightContainerButtons.classList.add("buttonRight");

const Cbutton1 = document.createElement("button");
Cbutton1.textContent = "stone";
const Cbutton2 = document.createElement("button");
Cbutton2.textContent = "paper";
const Cbutton3 = document.createElement("button");
Cbutton3.textContent = "scissor";

const Hbutton1 = document.createElement("button");
Hbutton1.textContent = "stone";
const Hbutton2 = document.createElement("button");
Hbutton2.textContent = "paper";
const Hbutton3 = document.createElement("button");
Hbutton3.textContent = "scissor";




const rightScore = document.createElement("div");
const leftScore = document.createElement("div");
const footMessage = document.createElement("div");
const footerButtom  =document.createElement("div")
const buttonNext = document.createElement("button");
const buttonRestart = document.createElement("button");

buttonNext.textContent = "next";
buttonRestart.textContent = "restart";



Hbutton1.addEventListener("click",function(){
    let humanChoice = Hbutton1.textContent;
    humanChoice =humanChoice.toUpperCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);



});
Hbutton2.addEventListener("click",function(){
    let humanChoice = Hbutton2.textContent;
    humanChoice =humanChoice.toUpperCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);



});

Hbutton3.addEventListener("click",function(){
    let humanChoice = Hbutton3.textContent;
    humanChoice =humanChoice.toUpperCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);



});


buttonNext.addEventListener("click",function(){
    enable();
    footer.removeChild(buttonNext);
});


buttonRestart.addEventListener("click",function(){
    window.location.reload();
});



rightContainerButtons.appendChild(Hbutton1);
rightContainerButtons.appendChild(Hbutton2);
rightContainerButtons.appendChild(Hbutton3);

leftContainerButtons.appendChild(Cbutton1);
leftContainerButtons.appendChild(Cbutton2);
leftContainerButtons.appendChild(Cbutton3);

const buttonAll = document.querySelectorAll("button");



const startButton = document.querySelector("#startButton");

startButton.addEventListener("click",function(e){
    middleLeft.removeChild(comImage);
    middleRight.removeChild(humanImage);
    footer.removeChild(start);
    middleLeft.appendChild(leftContainerButtons);
    middleRight.appendChild(rightContainerButtons);
    middleLeft.appendChild(leftScore);
    middleRight.appendChild(rightScore);
    footer.appendChild(footMessage);



});