const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const text = document.querySelector('.text')
const pImg = document.querySelector('.personImg')
const mImg = document.querySelector('.machineImg')
const crock = document.querySelector('.crock')
const cpaper = document.querySelector('.cpaper')
const ssicss = document.querySelector('.cscissors')
const selectImg = document.querySelector('.choice')
let humanScore = 0;
let machineScore = 0;


//starting the game
btn.addEventListener('click', () => {
    container.style.opacity = '1'
    btn.style.opacity = '0'
})

//picking a random image
function computerChoice () {
    const imgNams = ['rock','paper','sicssors']
    const randomNum = Math.floor(Math.random() * imgNams.length)
    const pickImg = `images/${imgNams[randomNum]}.png`

    return pickImg
}

//the person choice depends on what he click rock,paper or sicssors
function personChoice() {
    selectImg.addEventListener('click', (e) => {
        if(e.target.hasAttribute("src")){
            pImg.setAttribute("src", e.target.src)   
            mImg.setAttribute("src", computerChoice())    
        }
        gameLogic();
    }); 
}


personChoice()
//playing the game and setting the score 

function gameLogic() {

    if(pImg.src === mImg.src) {
        text.textContent = "It's a tie";   
    } else if(pImg.src === "images/rock.png") {
        if(mImg.src === "images/sicssors.png"){
             humanScore + 1;
             text.textContent = "human wines rock crushes sicssors!!";
     } 
 }  else if(pImg.src === "images/paper.png") {
    if(mImg.src === "images/rock.png"){
         humanScore + 1;
         text.textContent = "human wines paper covers rock!!";
 }
}else if(pImg.src === "images/sicssors.png") {
    if (mImg.src === "images/paper.png"){
         humanScore + 1;
         text.textContent = "human wines sicssors cuts paper!!";
 } 
}  else if(mImg.src === "images/paper.png") {
    if(pImg.src === "images/rock.png"){
        machineScore + 1;
        text.textContent = "machine wines paper covers rock try again human!!";
    }
} 
else if(mImg.src === "images/sicssors.png") {
        if (pImg.src === "images/paper.png"){
            machineScore + 1;
            text.textContent = "machine wines sicssors cuts paper try again human!!";
        }
} else if(mImg.src === "images/rock.png") {
    if (pImg.src === "images/sicssors.png"){
        machineScore + 1;
        text.textContent = "machine wines rock crushes scissors try again human!!";
    }
}   
    
}

