const body = document.body;

function computerPlay(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
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

function getScore(playerScore, computerScore){
    return ` Player score: ${playerScore}, Computer Score: ${computerScore}`
}

function playRound(player, computer){
    let playerScore = 0;
    let computerScore = 0;

    const gameResult = (result, score) => {
        const message = document.createElement('h1');
        message.textContent = result + score;
        body.appendChild(message);
    }
    
    let tieGame = function(){
        return gameResult(tie(player), getScore(playerScore, computerScore));
    }
    let winGame = function(){
        playerScore += 1;
        return gameResult(playerWin(player, computer), getScore(playerScore, computerScore));
    }
    let loseGame = function(){
        computerScore += 1;
        return gameResult(playerLose(player, computer), getScore(playerScore, computerScore));
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


let buttons = document.querySelectorAll('#btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = btn.className;
        playRound(playerSelection, computerSelection);
    })
})