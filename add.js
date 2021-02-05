let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let black = document.getElementById('black');

function change1(){
    document.body.style.backgroundColor = 'red';
}

function change2(){
    document.body.style.backgroundColor = 'blue';
}

function change3(){
    document.body.style.backgroundColor = 'yellow';
}

function change4(){
    document.body.style.backgroundColor = 'green';
}

function change5(){
    document.body.style.backgroundColor = 'black';
}

red.addEventListener('click',change1);
blue.addEventListener('click',change2);
yellow.addEventListener('click',change3);
green.addEventListener('click',change4);
black.addEventListener('click',change5);