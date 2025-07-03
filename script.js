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






const startButton = document.querySelector("#startButton");

startButton.addEventListener("click",function(e){
    middleLeft.removeChild(comImage);
    middleRight.removeChild(humanImage);
    footer.removeChild(start);

});