//declare global variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// generate random letter when window loads/refreshes/user wins/user loses
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];

console.log(randomLetter);

// take user input (typing a letter)
document.onkeyup = function(event) {
    //determine which key was pressed
    var userInput = event.key; 
    
if (userInput == randomLetter) {

}
    


};


// these will update the html as the game progresses
document.getElementById("win-tally").textContent = wins;
document.getElementById("loss-tally").textContent = losses;
document.getElementById("guesses-left").textContent = guessesLeft;
document.getElementById("your-guesses").textContent = userGuesses;



// if user letter is not a match:
    //  while (guessesLeft > 0 && guessesLeft <= 9)
        //  push letter to yourGuesses array
        //  guessesLeft--
        

// if user letter is a match:
    // wins++






// counter variable
    // var count= 0;

    // function incrementCount(){
    //    count++;
    // }

    // console.log(count);
    // incrementCount();
    // console.log(count);   

