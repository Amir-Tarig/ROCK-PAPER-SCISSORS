const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const text = document.querySelector('.text')
const playerImg = document.querySelector('.personImg')
const machineImg = document.querySelector('.machineImg')
const crock = document.querySelector('.crock')
const cpaper = document.querySelector('.cpaper')
const ssicss = document.querySelector('.cscissors')
const playerOptions = document.querySelectorAll('.choice img')
//console.log(playerOptions)
let humanScore = 0;
let machineScore = 0;


//starting the game
btn.addEventListener('click', () => {
    container.style.opacity = '1'
    btn.style.opacity = '0'
})

function computerPlay () {
    const RPS = ['rock','paper','scissors']
    const randomNumber = Math.floor(Math.random() * RPS.length)
    const machineChoice = `images/${RPS[randomNumber]}.png`
    return machineChoice;
}

function playerPlay () {
    
    for(let i = 0; i < playerOptions.length; i++){
        console.log(playerOptions[i])
    }
}
playerPlay()

function playGame (playerSelection, computerSelection) {

    computerSelection = computerPlay();

}
