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

function keyChosen(event) {
    
    switch (event.keyCode) {
        case 37: //left 33cc33 verde
            if (color === '#33cc33') {
                score++;
                timeEnd = new Date().getTime();        
                timeTaken = (timeEnd - timeStart) / 1000;
                document.getElementById('score').style.color = '#008000';
                soma += timeTaken;
            } else {
                score--;
                document.getElementById('score').style.color = '#ff0000';
            }
            showScore.value = score;
            break;
        case 38: //up D00000 vermelho
            if (color === '#D00000') {
                score++;
                timeEnd = new Date().getTime();        
                timeTaken = (timeEnd - timeStart) / 1000;
                document.getElementById('score').style.color = '#008000';
                soma += timeTaken;
            } else {
                score--;
                document.getElementById('score').style.color = '#ff0000';
            }
            break;
        case 39: //right ffff00 amarelo
            if (color === '#ffff00') {
                score++;
                timeEnd = new Date().getTime();        
                timeTaken = (timeEnd - timeStart) / 1000;
                document.getElementById('score').style.color = '#008000';
                soma += timeTaken;
            } else {
                score--;
                document.getElementById('score').style.color = '#ff0000';
            }
            break;
        case 40: //down 00b8e6 azul
            if (color === '#00b8e6') {
                score++;
                timeEnd = new Date().getTime();        
                timeTaken = (timeEnd - timeStart) / 1000;
                document.getElementById('score').style.color = '#008000';
                soma += timeTaken;
            } else {
                score--;
                document.getElementById('score').style.color = '#ff0000';
            }
            break;
        default:
    }

    timeStart = new Date().getTime();
    reactionTime.value = timeTaken;
    showScore.value = score;
    average = soma / 10;
    averageTime.value = average;
    color = getRandomColor();
    getRandomPosition(color);

    if (score === 10) {
        score = 0;
        showScore.value = score;
        reactionTime.value = '';
        averageTime.value='';
        document.getElementById('circle').style.display = 'none';
        alert('Você demorou ' + average + 's para chegar ao score de 10');
    }
}

var score = 0;
var soma = 0;
var average = 0;
var timeEnd;
var timeTaken;
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const reactionTime = document.getElementById('time');
const averageTime = document.getElementById('average');
const showScore = document.getElementById('score');
var color = getRandomColor();

start.onclick = function() {
    timeStart = new Date().getTime();
    document.getElementById('circle').style.display = 'block';
}
reset.onclick = function() {
    score = 0;
    average = 0;
    showScore.value = score;
    reactionTime.value = '';
    averageTime.value='';
    document.getElementById('circle').style.display = 'none';
    console.log(score);
}

showScore.value = score;
getRandomPosition(color);
document.addEventListener('keydown', keyChosen);
console.log(score);
