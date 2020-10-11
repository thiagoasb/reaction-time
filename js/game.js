function getRandomColor() {
    let colors = ['#D00000', '#00b8e6', '#ffff00', '#33cc33'];
    let pickedColor;

    for(let i=0; i<5; i++) {
        pickedColor = Math.floor(Math.random() * 4);
    }

    return colors[pickedColor];
}

function getRandomPosition(color) {

    
    let top = Math.random() * 500; //altura - tamanho do circulo
    let left = Math.random() * 1100;

    document.getElementById('circle').style.backgroundColor = color;
    document.getElementById('circle').style.top = top + "px";
    document.getElementById('circle').style.left = left + "px";
    
}

function circleApperanceInterval() {
    setTimeout(getRandomPosition, 1000);
}

function keyChosen(event) {
    
    switch (event.keyCode) {
        case 37: //left 33cc33
            color === '#33cc33'? score++ : score--;
            showScore.value = score;
            timeEnd = new Date().getTime();        
            timeTaken = (timeEnd - timeStart) / 1000;
            console.log(score);
            break;
        case 38: //up D00000
            color === '#D00000'? score++ : score--;
            showScore.value = score;
            timeEnd = new Date().getTime();        
            timeTaken = (timeEnd - timeStart) / 1000;
            console.log(score);
            break;
        case 39: //right ffff00
            color === '#ffff00'? score++ : score--;
            showScore.value = score;
            timeEnd = new Date().getTime();        
            timeTaken = (timeEnd - timeStart) / 1000;
            console.log(score);
            break;
        case 40: //down 00b8e6
            color === '#00b8e6'? score++ : score--;
            showScore.value = score;
            timeEnd = new Date().getTime();        
            timeTaken = (timeEnd - timeStart) / 1000;
            console.log(score);
            break;
        default:
    }

    timeStart = new Date().getTime();
    reactionTime.value = timeTaken;

    color = getRandomColor();
    getRandomPosition(color);
}

function Game() {
    if (score < 0) {
        alert('Seu score foi menor que o limite, tente novamente!');
        score = 0;
    } else if (socre < 10) {
        alert('Você demorou XXXXXX segundos para chegar ao score de 10.')
    }
}

var score = 0;
var color = getRandomColor();
var timeStart;
var timeEnd;
var timeTaken;
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const reactionTime = document.getElementById('time');
const averageTime = document.getElementById('average');
const showScore = document.getElementById('score');

start.onclick = function() {
    document.getElementById('circle').style.display = 'block';
}
reset.onclick = function() {
    score = 0;
    showScore.value = score;
    document.getElementById('circle').style.display = 'none';
    console.log(score);
}

showScore.value = score;

getRandomPosition(color);
timeStart = new Date().getTime();
document.addEventListener('keydown', keyChosen);
console.log(score);
