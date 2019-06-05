const toClick = document.querySelectorAll('.question');
const boxes = document.querySelectorAll('.game div p');
const startBtn = document.querySelector('.start');
const gameSection = document.querySelector('.game');
let opened = [];

const question = document.querySelectorAll('.question');
const text = document.querySelectorAll('.text');


const wordTab = ["Tomek", "Romek", "Masza", "DJ Premier", "Piłka do kosza", "Telefon", "Szklanka", "Ferrari", "Tomek", "Romek", "Masza", "DJ Premier", "Piłka do kosza", "Telefon", "Szklanka", "Ferrari"];


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

function click() {
    toClick.forEach(element => {
    
        element.addEventListener('click', function(){
            if (opened.length == 0 || opened.length == 1) {
                this.classList.add('hidden');
                this.previousElementSibling.classList.remove('hidden');
                opened.push(this.previousElementSibling);
                console.log(opened);
            if (opened.length == 2) {
                if (opened[0].innerText == opened[1].innerText) {
                    opened.length = 0;
                    console.log("Wygrałeś")
                }
                else {
                    setTimeout(function(){
                        opened[0].classList.add('hidden');
                        opened[1].classList.add('hidden');
                        opened[0].nextSibling.classList.remove('hidden');
                        opened[1].nextSibling.classList.remove('hidden');
                        opened.length = 0
    
                    }, 2000)
                    console.log("przegrałeś")
                }
                 
                
            }
    
            }
            
        });
        
    });
}



function textInBoxes(text, box) {
    for (let i = 0; i < box.length; i++) {
        box[i].innerText = text[i]
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


function startGame(button, game) {
    button.addEventListener('click', function() {
        this.classList.add('hidden');
        game.classList.remove('hidden')

    });
    
    shuffle(wordTab);
    textInBoxes(wordTab, boxes);
    hidden(text, question);
    click();
    
    
}







startGame(startBtn, gameSection);






