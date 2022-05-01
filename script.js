function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    // randomly select from options array
    return options[Math.floor(Math.random() * options.length)].toLowerCase();

}

function playerPlay(){
    const play = prompt("Rock, Paper or Scissors?");
    // workaround for case-insensitive input from user
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
        return {
            msg:tie(player),
            playerScore:playerScore,
            computerScore:computerScore
        };
    }
    let winGame = function(){
        playerScore += 1;
        return {
            msg:playerWin(player, computer),
            playerScore:playerScore,
            computerScore:computerScore
        };
    }
    let loseGame = function(){
        computerScore += 1;
        return {
            msg:playerLose(player, computer),
            playerScore:playerScore,
            computerScore:computerScore
        };
    }
    switch(player){
        case 'rock':
            if(computer == 'rock'){
                return tieGame();
                break;
            }
            else if (computer == 'paper'){
                return loseGame();
                break;
            }
            else if (computer == 'scissors'){
                return winGame();
                break;
            }
        case 'paper':
            if(computer == 'rock'){
                return winGame();
                break;
            }
            else if (computer == 'paper'){
                return tieGame();
                break;
            }
            else if (computer == 'scissors'){
                return loseGame();
                break;
            }
        case 'scissors':
            if(computer == 'rock'){
                return winGame();
                break;
            }
            else if (computer == 'paper'){
                return loseGame();
                break;
            }
            else if (computer == 'scissors'){
                return tieGame();
                break;
            }        
    }
}

function game(){
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        playerSelection = playerPlay();
        computerSelection = computerPlay().toLowerCase();
        let results = playRound(playerSelection, computerSelection);
        playerScore += results.playerScore;
        computerScore += results.computerScore;
        console.log(results.msg + ` Player score: ${playerScore}, Computer Score: ${computerScore}`);
    }
    return;
}

game();