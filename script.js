let images = document.querySelectorAll('.img-items');
let Computerimages = document.querySelectorAll('.img-computer');


for (let i = 0; i <= images.length - 1; i++) {
    images[i].addEventListener('click', () => {
        invisibleSelect(i);
        randomComputer = Math.floor((Math.random() * 10) / 4);
        Computerimages[randomComputer].classList.remove('invisible');
        gameLogic(i, randomComputer);
    })
}

function invisibleSelect(i) {
    for (let j = 0; j <= images.length - 1; j++) {
        if (j !== i) {
            images[j].classList.add('invisible');
        }
    }
}

document.querySelector('.resetBtn').addEventListener('click', ()=>{
    for (let i = 0; i <= images.length - 1; i++) {
        images[i].classList.remove('invisible');
        Computerimages[i].classList.add('invisible');
    }
})

function gameLogic(user, computer) {
    const userScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    if (user !== computer) {
        if (user == 0) {
            if (computer == 1) {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
            } else {
                userScore.textContent = parseInt(userScore.textContent) + 1;
            }
        }
        if (user == 1) {
            if (computer == 0) {
                userScore.textContent = parseInt(userScore.textContent) + 1;
            } else {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
            }
        }
        if (user == 2) {
            if (computer == 0) {
                computerScore.textContent = parseInt(computerScore.textContent) + 1;
            } else {
                userScore.textContent = parseInt(userScore.textContent) + 1;
            }
        }
        if (parseInt(userScore.textContent) === finalScore || parseInt(computerScore.textContent) === finalScore) {
            winner(finalScore);
        }
    }
}

let finalScore = 0;
document.querySelector('.finalScoreBtn').addEventListener('click', ()=>{
    const score = parseInt(prompt("Let's Challange! Choose Winner Score"));
    finalScore = score;
    document.querySelector('.final-score').textContent= finalScore;
});

function winner(finalScore){
    const computerScore = document.querySelector('.computer-score').textContent;
    const userScore = document.querySelector('.player-score').textContent;
    if (parseInt(computerScore) === finalScore) {
        alert(`Computer Win with score ${computerScore}`);
    }else if (parseInt(userScore) === finalScore){
        alert(`You Win with score ${userScore}`);
    }
    for (let i = 0; i <= images.length - 1; i++) {
        images[i].classList.remove('invisible');
        Computerimages[i].classList.add('invisible');
        let finalScore = 0;
        document.querySelector('.final-score').textContent= finalScore;
        document.querySelector('.computer-score').textContent =0;
        document.querySelector('.player-score').textContent=0;
    }
    
}

