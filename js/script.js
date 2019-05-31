let allBoxes = document.querySelectorAll('.game div')
let game = document.querySelectorAll('.game div p');
const wordTab = ["Tomek", "Romek", "Masza", "DJ Premier", "Piłka do kosza", "Telefon", "Szklanka", "Ferrari", "Tomek", "Romek", "Masza", "DJ Premier", "Piłka do kosza", "Telefon", "Szklanka", "Ferrari"];
let question = document.querySelectorAll('.question')

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



function startGame(box, tab, pic) {
    
    for (let i = 0; i < tab.length; i++) {
        box[i].innerText = tab[i]
    };
    setTimeout(function(){
        for (let i = 0; i < pic.length; i++) {
         pic[i].classList.remove('hidden')   
        };
        for (let i = 0; i < box.length; i++) {
            box[i].classList.add('hidden')
        }
    }, 3000)
    
};

shuffle(wordTab);
startGame(game, wordTab, question);

allBoxes.forEach(element => {
    element.addEventListener('click', function(){
        this.classList.add('open');
        if (document.querySelectorAll('.open').length <= 2) {
            this.querySelector('.question').classList.toggle('hidden');
            this.querySelector('p').classList.toggle('hidden');
        };
        setTimeout(function(){
            document.querySelectorAll('.open').forEach(element => {
                element.classList.remove('open')
            })
        }, 3000) 
        
    })  
});