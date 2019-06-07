const toClick = document.querySelectorAll('.question');
const boxes = document.querySelectorAll('.game div p');
const startBtn = document.querySelector('.start');
const gameSection = document.querySelector('.game');
const startSection = document.querySelector('.start-section');
const endSection = document.querySelector('.end-section')
let opened = [];
let correct = [];
let counter = 0;
let time = 0;

const question = document.querySelectorAll('.question');
const text = document.querySelectorAll('.text');


// const wordTab = ["Tomek", "Tomasz", "Tom", "DJ Premier", "Piłka do kosza", "Telefon", "Szklanka", "Ferrari", "Tomek", "Tomasz", "Tom", "DJ Premier", "Piłka do kosza", "Telefon", "Szklanka", "Ferrari"];

const wordTab = ["#16823F", "#10D95D", "#D910B7", "#1019D9", "#736825", "#B1F1AC", "#C9ACF1", "#3A0A04", "#16823F", "#10D95D", "#D910B7", "#1019D9", "#736825", "#B1F1AC", "#C9ACF1", "#3A0A04"]


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function end(correct) {
    if (correct.length == 16) {
        gameSection.classList.add('hidden');
        endSection.style.display = 'flex';

        

    }
}

function click() {
    toClick.forEach(element => {
    
        element.addEventListener('click', function(){
            if (opened.length == 0 || opened.length == 1) {
                this.classList.add('hidden');
                this.previousElementSibling.classList.remove('hidden');
                opened.push(this.previousElementSibling);
                
            if (opened.length == 2) {
                if (opened[0].innerText == opened[1].innerText) {
                    opened[0].style.background = opened[0].innerText;
                    opened[1].style.background = opened[1].innerText;
                    opened[0].style.border = "1px solid black";
                    opened[1].style.border = "1px solid black";
                    opened[0].style.animation = "bump 1s 1";
                    opened[1].style.animation = "bump 1s 1";
                    correct.push(opened[0]);
                    correct.push(opened[1]);
                    opened.length = 0;
                }
                else {
                    setTimeout(function(){
                        opened[0].classList.add('hidden');
                        opened[1].classList.add('hidden');
                        opened[0].nextSibling.classList.remove('hidden');
                        opened[1].nextSibling.classList.remove('hidden');
                        opened.length = 0
    
                    }, 1000)
                };

                 
                
            };
            if (opened.length == 2) {
                counter++;
                document.querySelector('.score').innerHTML = "Attemps: "+counter;
            };
            if (correct.length == 16) {
                score(time, counter)
            }
            
            end(correct);
    
            }
            
        });
        
    });
}



function textInBoxes(text, box) {
    for (let i = 0; i < box.length; i++) {
        box[i].innerText = text[i];
        box[i].style.color = text[i]
    }
}






function hidden(obverse, reverse) {
    
    setTimeout(function(){
        obverse.forEach(element => {
            element.classList.add('hidden')
        });
        reverse.forEach(element => {
            element.classList.remove('hidden')
        });
        
    }, 7000)
    
}

function clear(timeToClear) {
    if (correct.length == 16) {
        clearInterval(timeToClear)
    }
    
}

function score(time, counter) {
    let score = time + counter;
    
    document.querySelector(".finish").innerHTML = "Your score is: "+ score;
    console.log(score)

} 

function startGame(button, game) {
    button.addEventListener('click', function() {
        opened.length = 0;
        correct.length = 0;
        this.parentElement.style.display = 'none';
        game.classList.remove('hidden');
        var interval = setInterval(function(){
            time++;
            document.querySelector('.time').innerHTML = "Time: "+time;
            clear(interval);
        }, 1000);
        

    });
    
    shuffle(wordTab);
    textInBoxes(wordTab, boxes);
    hidden(text, question);
    click();
    
    
    
    
    
}







startGame(startBtn, gameSection);






