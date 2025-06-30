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