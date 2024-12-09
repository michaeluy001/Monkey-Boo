const bgMusic = new Audio('./sounds/Jungle music.wav'); 
bgMusic.autoplay;
const monkeySound = new Audio('./sounds/Monkey scream.wav');
monkeySound.load();
const hitSound = new Audio('./sounds/Fail guess.wav'); 
const youWonSound = new Audio('./sounds/you won.wav');
youWonSound.load();
const tryAgainButton = document.getElementById("try-again");

tryAgainButton.addEventListener("click", tryAgain);


    

let grid = document.querySelector(".grid"); /* This is for the element itself (as a whole) */
let cells = document.querySelector(".grid").children; /* These are comprised of the cells in the grid */



function randNum(min, max) { return Math.floor(Math.random()*cells.length); } /* Generate a random index */
let monkeyCell = cells[randNum(0,cells.length)];


for (let i = 0; i < cells.length; i++) { cells[i].addEventListener("click", checkThisCell); }

let counter = 0;
const board = document.getElementById("status");
const score = document.getElementById("score");


function checkThisCell(event) { /* checks if the cell has been hit. If so, remove its actionlistener */

    const clickedCell = event.target;
    const hitSound = new Audio('./sounds/Fail guess.wav');
    hitSound.currentTime = 0;
    hitSound.load();
    
    
    if(clickedCell == monkeyCell) {
       
        revealTheMonkey (clickedCell);

    } else {
        updateScore();
        const markedCell = event.target.getAttribute("id");

        document.getElementById(markedCell).style.backgroundImage = "url('banana.png')";
        hitSound.play();
    }
    clickedCell.removeEventListener("click", checkThisCell);

}

function updateScore() {
    counter++;
    score.innerText = counter;
    board.innerText = randomPhrase();
console.log("current score is ", counter);
}

function randomPhrase() {

    const phrases = [
        "You’ve got the instincts of a tiger!",
        "Swinging through like a true jungle explorer!",
        "That’s a wild success!",
        "You’re roaring with confidence!",
        "Spot on, just like a jaguar in the night!",
        "That’s the way, jungle master!",
        "Perfect aim, like an eagle’s!",
        "You’re as clever as a monkey!",
        "Trekking through like a pro adventurer!",
        "Bingo! You’re the king of this jungle!",
    ];

    function randNum(min, max) { return Math.floor(Math.random()*phrases.length); } /* Generate a random index */ 
    let randPhrase = phrases.at([randNum(0,cells.length)]); 
    phrases.splice(randNum);
    return randPhrase;
    
}
let remainingCell;
function revealTheMonkey (e) {

     remainingCell = cells.length - counter; /* THis is to determine whether you won or lose. */
     console.log("Remaining Cell: ", remainingCell = cells.length - counter);

    if (remainingCell < 2) {

        document.getElementById(e.getAttribute("id")).style.backgroundImage = "url('frustrated monkey.png')";
        board.innerHTML = "You Won! \n You Got:";
        youWonSound.play();
        

    } else {
        monkeySound.play();
        document.getElementById(monkeyCell.getAttribute("id")).style.backgroundImage = "url('monkey.png')";
        board.innerHTML = "Game Over! You didn't get all the bananas. \n You Got:";

    }
    
    removeListeners();

    let finalScore = counter;
    score.innerText = finalScore;
    tryAgainButton.style.display = "block";
}

function tryAgain() {
    location.reload();
}

function removeListeners() {

    for (let i = 0; i < cells.length; i++) { 
        cells[i].removeEventListener("click", checkThisCell);   
    }
}





















