const btn = document.querySelector('.btn')
const container = document.querySelector('.container')




//console.log(playerOptions)
let humanScore = 0;
let machineScore = 0;


//starting the game
btn.addEventListener('click', () => {
    container.style.opacity = '1';
    btn.style.opacity = '0';
})
function game() {

    const playerImg = document.querySelector('.personImg')
    const machineImg = document.querySelector('.machineImg')
    const playerOptions = document.querySelectorAll('.choice img')

    playerOptions.forEach(option => {
        option.addEventListener('click', function() {

            const RPS = ['rock','paper','scissors'];
            const randomNumber = Math.floor(Math.random() * 3);
            const machineChoice = `images/${RPS[randomNumber]}.png`;
            const playerChoice = `images/${this.className}.png`;

            playGame(this.className, RPS[randomNumber]);

            playerImg.src = playerChoice;
            machineImg.src = machineChoice;

          
            console.log(this.className, RPS[randomNumber])
        });
    });

}

const playGame = (playerSelection, computerSelection) => {
      
    console.log(playerSelection)
    console.log(computerSelection)
    const text = document.querySelector('.text')

    if(playerSelection === computerSelection) {
        console.log('ya')
        text.textContent = 'its a tie';
        return;
    }

    if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            text.textContent = `${computerSelection} beats ${playerSelection} try again human`;
            return;
        } else {
            text.textContent = `${playerSelection} beats ${computerSelection}`;
            return;
        }
    } 

     if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            text.textContent = `${computerSelection} beats ${playerSelection} try again human`;
            return;
        } else {
            text.textContent = `${playerSelection} beats ${computerSelection} `;
            return;
        }
    }

     if(playerSelection === 'paper') {
        if(computerSelection === 'scissors'){
            text.textContent = `${computerSelection} beats ${playerSelection} try again human`;
            return;
        } else { 
            text.textContent = `${playerSelection} beats ${computerSelection} `;
            return;
        }
    }

}
game()