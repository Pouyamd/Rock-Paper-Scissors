function getComputerChoice(){
    const  result=["rock","paper", "scissors"];
    let x = Math.floor((Math.random() * 3));
    return result[x]


}
let computerChoice=getComputerChoice();
let playerSelection = prompt("rock , paper scissors!").toLowerCase();
function playRound(playerSelection, computerSelection) {
    var text;
    if (playerSelection==="rock") {
        switch(computerSelection){
            case "rock":
                text="tie!";
                break;
            case "paper":
                text="you lost!";
                break;
            case "scissors":
                text="you won!";
                break;
        };
      } else if (playerSelection==="paper") {
        switch(computerSelection){
            case "rock":
                text="won!";
                break;
            case "paper":
                text="tie!"
                break;
            case "scissors":
                text="you lost!";
                break;
        };
    }else if (playerSelection==="scissors") {
        switch(computerSelection){
            case "rock":
                text="lost!";
                break;
            case "paper":
                text="won!"
                break;
            case "scissors":
                text="tie!";
                break;
        };   
    }
  return text;
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
