//  Bubble Game...
let timer = 5;
let score = 0;
let hitrn = 0;

function increaseScore(){
    score += 10;
    let scoreval = document.querySelector("#scoreval");
    scoreval.textContent = score;
}

function getNewHit(){
    let hitrn = Math.floor(Math.random()*10);
    let hitval = document.querySelector("#hitval");
    hitval.textContent = hitrn;
}

function makeBubble(){

    let clutter = "";

    for(let i=1; i<=5533; i++){
        let r = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${r}</div>`;
    }
    let pbtm = document.querySelector("#pbtm");
    pbtm.innerHTML = clutter;
}


function runTimer(){

    let timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over ! </h1>`;
        }
       
    },1000);
}

let pbtm = document.querySelector("#pbtm");
pbtm.addEventListener("click", function(dets){
    let clickednum = (Number(dets.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
