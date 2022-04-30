function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)].toLowerCase();

}

// console.log(computerPlay());

function playerPlay(){
    const play = prompt("Rock, Paper or Scissors?");
    return play.toLowerCase();    
}

function playerWin(player, computer){
    return `You win! ${player} beats ${computer}!`;
}

function playerLose(player, computer){
    return `You lose! ${computer} beats ${player}!`;
}

function tie(player){
    return `Tie! both players chose ${player}!`;
}
function playRound(player, computer){
    
}
const playerSelection = playerPlay();
const computerSelection = computerPlay().toLowerCase();

playRound(playerSelection, computerSelection);
// console.log(computerSelection);