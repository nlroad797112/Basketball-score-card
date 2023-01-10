let homescore = document.getElementById("homescore");
let guestscore = document.getElementById("guestscore");

let point = 0
let score = 0

function one(){
    point+=1;
    homescore.textContent = point;
}

function two(){
    point+=2;
    homescore.textContent = point;
}

function three(){
    point+=3;
    homescore.textContent = point;
}

function four(){
    score+=1;
    guestscore.textContent = score;
}

function five(){
    score+=2;
    guestscore.textContent = score;
}

function six(){
    score+=3;
    guestscore.textContent = score;
}

function reset(){
    point = 0;
    score = 0;
    guestscore.textContent = 0;
    homescore.textContent = 0;
}