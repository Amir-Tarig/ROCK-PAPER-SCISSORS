const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const text = document.querySelector('.text')
const pImg = document.querySelector('.personImg')
const mImg = document.querySelector('.machineImg')
const pscore = document.querySelector('.p')
const mscore = document.querySelector('.m')
const crock = document.querySelector('.crock')
const cpaper = document.querySelector('.cpaper')
const ssicss = document.querySelector('.cscissors')
const imgChoise = document.querySelector('.choise')


//starting the game
btn.addEventListener('click', () => {
    container.style.opacity = '1'
    btn.style.opacity = '0'
})

function randomImg () {

}