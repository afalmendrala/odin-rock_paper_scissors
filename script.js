function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)].toLowerCase();

}

function playerWin(player, computer){
    console.log(`You win! ${player} beats ${computer}!`);
}

function playerLose(player, computer){
    console.log(`You lose! ${computer} beats ${player}!`);
}

function tie(player){
    console.log(`Tie! both players chose ${player}!`);
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


let buttons = document.querySelectorAll('#btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = btn.className;
        playRound(playerSelection, computerSelection);
    })
})