const square = document.querySelectorAll('.game div');
const boxes = document.querySelectorAll('.game div p');
const startBtn = document.querySelector('.start');
const gameSection = document.querySelector('.game');
let opened = document.querySelectorAll('.open');
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
    }, 3000)
    
}

function click (boxes) {
    boxes.forEach(element => {
        element.addEventListener('click', function(){
            this.querySelector('.question').classList.add('hidden');
            this.querySelector('.text').classList.remove('hidden')
        })
    });
};



function startGame(button, game) {
    button.addEventListener('click', function() {
        this.classList.add('hidden');
        game.classList.remove('hidden')

    });
    
    shuffle(wordTab);
    textInBoxes(wordTab, boxes);
    hidden(text, question)
    
    click(square)
}







startGame(startBtn, gameSection)






