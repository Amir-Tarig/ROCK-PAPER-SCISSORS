const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const text = document.querySelector('.text')
const pImg = document.querySelector('.personImg')
const mImg = document.querySelector('.machineImg')
const crock = document.querySelector('.crock')
const cpaper = document.querySelector('.cpaper')
const ssicss = document.querySelector('.cscissors')
const selectImg = document.querySelector('.choice')


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
            console.log(pImg.src) 
        }
    });
}

//playing the game and setting the score 
function setTheScore() {
    personChoice()
    const pscore = document.querySelector('.p')
    const mscore = document.querySelector('.m')

    if(pImg.src === mImg.src) {
        pscore.innerHTML;
        mscore.innerHTML;
        text.textContent = "It's a tie"
    }
    else if(pImg.src === 'images/rock.png' && mImg.src === 'images/scissors.png'){
        pscore.innerHTML + 1;
        mscore.innerHTML;
        text.textContent = 'human wines rock crushes scissors!!'
    }
    else if (pImg.src === 'images/paper.png' && mImg.src === "images/rock.png"){
        pscore.innerHTML + 1;
        mscore.innerHTML;
        text.textContent = "human wines paper covers rock!!"
    }
    else if (pImg.src === 'images/scissors.png' && mImg.src === "images/paper.png"){
        pscore.innerHTML + 1;
        mscore.innerHTML;
        text.textContent = "human wines scissors cuts paper!!"
    }
    else if (mImg.src === 'images/paper.png' && pImg.src === "images/rock.png"){
        pscore.innerHTML;
        mscore.innerHTML + 1;
        text.textContent = "machine wines paper covers rock try again human!!"
    }
    else if (mImg.src === 'images/scissors.png' && pImg.src === "images/paper.png"){
        pscore.innerHTML;
        mscore.innerHTML + 1;
        text.textContent = "machine wines scissors cuts paper try again human!!"
    }
    else if (mImg.src === 'images/rock.png' && pImg.src === "images/scissors.png"){
        pscore.innerHTML;
        mscore.innerHTML + 1;
        text.textContent = "machine wines rock crushes scissors try again human!!"
    }

}

setTheScore()
