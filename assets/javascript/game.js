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

// reset function to start game and to reset after one of the ending conditions (win/lose)
function reset() {
    console.log(randomLetter);
    guessesLeft = 9;
    userGuesses = [];
}

// generate random letter (this is duplicate to the var in the reset function)
// var randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
// console.log(randomLetter);

reset();

// take user input (typing a letter)
document.onkeyup = function (event) {

    //determine which key was pressed
    var userInput = event.key;

    // if statement checking if letter matches and updating win tally
    if (userInput === randomLetter) {
        reset();
        wins++;
        document.getElementById("win-tally").textContent = wins;

    } else {
        userGuesses.push(userInput);
        guessesLeft--;
        document.getElementById("guesses-left").textContent = guessesLeft;
        document.getElementById("your-guesses").textContent = userGuesses;

    }
    if (guessesLeft < 1) {
        reset();
        losses++;
    }
}

// reset();


// if (guessesLeft < 1) {
//     // losses goes up by one.
//     losses++;
//     // and guesses left goes back to 9.
//     // guessesLeft = 9;
//     reset();
//     // and the computer makes a new guess.
//     // computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     // AND the letter being displayed under "youre guesses" is reset.
//     lettersGuessed.textContent = (" ");


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








