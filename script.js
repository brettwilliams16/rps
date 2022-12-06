let playerWins = 0;
let computerWins = 0;
let ties = 0;

function getComputerChoice() {  // generates the computers choice
    let num = Math.floor(Math.random() * 3) + 1;
    switch(num) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) { // invokes a round from user input and automatically
                                                         // generated value from getComputerChoice()
    computerSelection = getComputerChoice();
    if(playerSelection != 'rock' || playerSelection != 'paper' || playerSelection != 'scissors'){ 
        return 'Player has chosen an invalid choice!';
    }
    console.log(computerSelection);
    switch(playerSelection){ // switch statements decides upon player choice
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    ties++;
                    return 'It was a tie!';
                case 'paper':
                    computerWins++;
                    return 'You lost!';
                case 'scissors':
                    playerWins++;
                    return 'You won!';
            }
        case 'paper':
            switch(computerSelection){
                case 'rock':
                    playerWins++;
                    return 'You won!';
                case 'paper':
                    ties++;
                    return 'It was a tie!';
                case 'scissors':
                    computerWins++;
                    return 'You lost!';
            }
        case 'scissors':
            switch(computerSelection){
                case 'rock':
                    computerWins++;
                    return 'You lost!';
                case 'paper':
                    playerWins++;
                    return 'You won!';
                case 'scissors':
                    ties++;
                    return 'It was a tie!';
            }
        }
            
    }
    
function game() {
    for(let i = 0; i < 5; i++){
        let player = prompt('Please choose your choice!');
        playRound(player);
    }
}