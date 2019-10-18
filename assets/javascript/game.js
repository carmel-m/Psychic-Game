//declare global variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//displayed when page opens:
document.getElementById("win-tally").textContent = wins;
document.getElementById("loss-tally").textContent = losses;
document.getElementById("guesses-left").textContent = guessesLeft;
document.getElementById("your-guesses").textContent = userGuesses;

// generate random letter 
var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
console.log(randomLetter);

// reset function to start game and to reset after one of the ending conditions (win/lose) - I think this might be in the wrong spot
function reset() {
    guessesLeft = 9;
    userGuesses = [];
    randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
    console.log(randomLetter);
}

// generate random letter (this is duplicate to the var in the reset function)
// randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
// console.log(randomLetter);

// reset();

// take user input (typing a letter)
document.onkeyup = function (event) {
    console.log(losses);

    //determine which key was pressed
    var userInput = event.key;

    // if statement checking if letter matches and updating win tally
    if (userInput === randomLetter) {
        wins++;
        document.getElementById("win-tally").textContent = wins;
        reset();

    } else {
        // if  { //check for letter already in array - only push if not in array (NEED TO ADD3)
        userGuesses.push(userInput);
        // }

        guessesLeft--;
        document.getElementById("guesses-left").textContent = guessesLeft;
        document.getElementById("your-guesses").textContent = userGuesses;

    }
    if (guessesLeft < 1) {
        losses++;
        console.log(losses);
        document.getElementById("loss-tally").textContent = losses;
        reset();
        
    }
}

// reset();


// when guessesLeft reaches 0
    // loss++
    // reset guessesLeft to 9
    // clear userGuesses
    // generate new random letter
    // keep wins and losses tally

// if user letter is not a match:
    //  while (guessesLeft > 0 && guessesLeft <= 9)
        //  push letter to yourGuesses array
        //  guessesLeft--

// if user letter is a match:
    // wins++

// if guessesLeft reaches 0, add to loss and restart








