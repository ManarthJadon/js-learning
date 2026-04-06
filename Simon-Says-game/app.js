let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started === false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.textContent = `Level: ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor =btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}

function checkSeq(idx) {
    // console.log("current level: " + level);

    if(userSeq[idx]===gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else{
         h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to restart`;
         resetGame();
        }
    }

function btnPress(){
    if(started === false) {
        return;
    }
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    let body = document.querySelector("body");
    body.classList.remove("gameFlash");
    body.classList.add("red");

    setTimeout(function(){
        body.classList.remove("red");
        body.classList.add("gameFlash");
    }, 180);

    setTimeout(function(){
        body.classList.remove("gameFlash");
    }, 200);
}
