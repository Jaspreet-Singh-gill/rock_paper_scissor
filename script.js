//Function to get the choice from the computer

function getComputerChoice(){
    let val = Math.floor(Math.random()*3);
    switch(val){
        case 0:
            return "ROCK"; // No break statement required as function will return as val's value matches
        case 1:
            return "PAPER";
        case 2:
            return "SCISSOR";
    };

}

//Function that takes Input from user and return it

function getHumanChoice(){
    let input = prompt("Enter ROCK,PAPER OR SCISSOR : ");
    return input.toUpperCase();
}


let humanScore =0;
let computerScore =0;


function playRound(){
    
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if(humanChoice === computerChoice){
        console.log("Tie, No one wins");
    }
    else if((humanChoice == "PAPER" && computerChoice == "ROCK")
            ||(humanChoice == "ROCK" && computerChoice == "SCISSOR")
            ||(humanChoice == "SCISSOR" && computerChoice == "PAPER")){
        humanScore++;
        console.log(`You win, ${computerChoice} beats ${humanChoice}.`);
    }
    else{
        computerScore++;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
    }

    console.log(` human score : ${humanScore}\n Computer score : ${computerScore}.`);
}