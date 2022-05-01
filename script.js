function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)].toLowerCase();

}

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
            return (computer == 'rock') ? tieGame()
                    :(computer == 'paper') ? loseGame()
                    : winGame();
            break;
        case 'paper':
            return (computer == 'rock') ? winGame()
                    :(computer == 'paper') ? tieGame()
                    : loseGame();
            break;
        case 'scissors':
            return (computer == 'rock') ? loseGame()
                    :(computer == 'paper') ? winGame()
                    : tieGame();
            break;    
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