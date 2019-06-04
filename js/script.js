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


toClick.forEach(element => {
    element.addEventListener('click', function(){
        this.classList.add('hidden');
        this.previousElementSibling.classList.remove('hidden');
        opened.push(this.previousElementSibling.innerText);
        console.log(opened);
        if (opened.length == 2) {
            if (opened[0] == opened[1]) {
                opened.length = 0;
            }
             
            
        }
    });
    
});





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
    hidden(text, question)
    
    
}







startGame(startBtn, gameSection);






