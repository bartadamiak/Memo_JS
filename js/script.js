let game = document.querySelectorAll('.game div');
let counter = 0;
let redCounter = document.querySelectorAll('.red');
let redTab = [];



function reverse() {
    setTimeout(function() {
        if (redTab.length == 2) {
           game[0].classList.remove('red')
        }
    }, 3000)
}

function counterReset() {
    
    if (counter >= 2) {
        counter = 0
    }
}

for (let i = 0; i < game.length; i++) {
    game[i].addEventListener('click', function(e) {
        e.preventDefault;
        counter +=1;
        
        if (counter <= 2) {
            this.classList.toggle('red');
            redTab.push(this);
        };

       
        
        
        
    })
    
}

counterReset();
reverse();
