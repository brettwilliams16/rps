let playerWins = 0;
let computerWins = 0;
let ties = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.results');
const clear = document.querySelector('.clear');


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
    if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){ 
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

rock.addEventListener('click', () => {
    const r = document.createElement("div");
    r.textContent = playRound('scissors') + ` Player wins: ${playerWins} 
    Computer wins: ${computerWins} Ties: ${ties}`;
    result.appendChild(r);
});
paper.addEventListener('click', () => {
    const r = document.createElement("div");
    r.textContent = playRound('scissors') + ` Player wins: ${playerWins} 
    Computer wins: ${computerWins} Ties: ${ties}`;
    result.appendChild(r);
});
scissors.addEventListener('click', () => {
    const r = document.createElement("div");
    r.textContent = playRound('scissors') + ` Player wins: ${playerWins} 
    Computer wins: ${computerWins} Ties: ${ties}`;
    result.appendChild(r);
});

clear.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    result.textContent = '';
})
