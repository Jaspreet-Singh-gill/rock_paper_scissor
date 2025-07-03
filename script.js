//Function to get the choice from the computer

// function getComputerChoice(){
//     let val = Math.floor(Math.random()*3);
//     switch(val){
//         case 0:
//             return "ROCK"; // No break statement required as function will return as val's value matches
//         case 1:
//             return "PAPER";
//         case 2:
//             return "SCISSOR";
//     };

// }

// //Function that takes Input from user and return it

// function getHumanChoice(){
//     let input = prompt("Enter ROCK,PAPER OR SCISSOR : ");
//     return input.toUpperCase();
// }




// let humanScore =0;
// let computerScore =0;


// function playRound(){
    
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     if(humanChoice === computerChoice){
//         console.log("Tie, No one wins");
//     }
//     else if((humanChoice == "PAPER" && computerChoice == "ROCK")
//             ||(humanChoice == "ROCK" && computerChoice == "SCISSOR")
//             ||(humanChoice == "SCISSOR" && computerChoice == "PAPER")){
//         humanScore++;
//         console.log(`You win, ${computerChoice} beats ${humanChoice}.`);
//     }
//     else{
//         computerScore++;
//         console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
//     }

//     console.log(` human score : ${humanScore}\n Computer score : ${computerScore}.`);
// }


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


rightContainerButtons.appendChild(Hbutton1);
rightContainerButtons.appendChild(Hbutton2);
rightContainerButtons.appendChild(Hbutton3);

leftContainerButtons.appendChild(Cbutton1);
leftContainerButtons.appendChild(Cbutton2);
leftContainerButtons.appendChild(Cbutton3);




const startButton = document.querySelector("#startButton");

startButton.addEventListener("click",function(e){
    middleLeft.removeChild(comImage);
    middleRight.removeChild(humanImage);
    footer.removeChild(start);
    middleLeft.appendChild(leftContainerButtons);
    middleRight.appendChild(rightContainerButtons);


});