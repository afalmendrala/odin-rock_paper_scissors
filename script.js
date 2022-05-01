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
    let playerScore = 0;
    let computerScore = 0;

    let tieGame = function(){
        return tie(player);
    }
    let winGame = function(){
        return playerWin(player, computer);
    }
    let loseGame = function(){
        return playerLose(player, computer);
    }
    switch(player){
        case 'rock':
            if(computer == 'rock'){
                return {
                    msg:tieGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
            else if (computer == 'paper'){
                computerScore += 1;
                return {
                    msg:loseGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
            else if (computer == 'scissors'){
                playerScore += 1;
                return {
                    msg:winGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
        case 'paper':
            if(computer == 'rock'){
                playerScore += 1;
                return {
                    msg:winGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
            else if (computer == 'paper'){
                return {
                    msg:tieGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
            else if (computer == 'scissors'){
                computerScore += 1;
                return {
                    msg:loseGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
        case 'scissors':
            if(computer == 'rock'){
                playerScore += 1;
                return {
                    msg:winGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
            else if (computer == 'paper'){
                computerScore += 1;
                return {
                    msg:loseGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }
            else if (computer == 'scissors'){
                return {
                    msg:tieGame(),
                    playerScore:playerScore,
                    computerScore:computerScore
                };
                break;
            }        
    }
}
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++){
    playerSelection = playerPlay();
    computerSelection = computerPlay().toLowerCase();
    let results = playRound(playerSelection, computerSelection);
    let msg = results.msg;
    playerScore += results.playerScore;
    computerScore += results.computerScore;
    console.log(msg + ` Player score: ${playerScore}, Computer Score: ${computerScore}`);
}

// console.log(computerSelection);