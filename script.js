function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)].toLowerCase();

}

console.log(computerPlay());

function playerPlay(){
    const play = prompt("Rock, Paper or Scissors?");
    return play.toLowerCase();    
}

const playerSelection = playerPlay();
const computerSelection = computerPlay().toLowerCase();

// console.log(computerSelection);