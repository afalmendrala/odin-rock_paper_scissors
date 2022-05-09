
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

function playRound(player, computer){
    let playerScore = 0;
    let computerScore = 0;
    
    let tieGame = () => {
        return {msg:tie(player),
            playerScore:playerScore,
            computerScore: computerScore
        };
    }
    let winGame = () => {
        playerScore += 1;
        return {msg:playerWin(player, computer),
            playerScore:playerScore,
            computerScore: computerScore
        };
    }
    let loseGame = () => {
        computerScore += 1;
        return {msg:playerLose(player, computer),
                playerScore:playerScore,
                computerScore: computerScore
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
    
    const body = document.body;
    const h1 = document.createElement('h1');
    body.appendChild(h1);
    
    let buttons = document.querySelectorAll('#btn');
    let playerScore = 0;
    let computerScore = 0;
    buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = btn.className;
        const game = playRound(playerSelection, computerSelection);
        playerScore += game.playerScore;
        computerScore += game.computerScore;
        h1.textContent = game.msg + `Player score: ${playerScore}, Computer score: ${computerScore}`;
    })
})