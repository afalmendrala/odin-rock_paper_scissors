function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];

}

// console.log(computerPlay());

function playerPlay(){
    const play = prompt("Rock, Paper or Scissors?")
    return play;    
}

// console.log(playerPlay());

const playerSelection = playerPlay().toLowerCase()
const computerSelection = computerPlay().toLowerCase()

// console.log(computerSelection);