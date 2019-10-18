# Psychic-Game

The game is working partially as expected, but there are a few issues:

    - I'm having trouble figuring out exactly when/where I should call my reset function. It is able to reset the guessesLeft and userGuesses variable, but doesn't generate a new randomLetter.
    - Because randomLetter isn't regenerating, the user can repeatedly press the 'correct' letter and the wins will keep being added on.
    - Losses aren't tallying properly and I'm not really sure why.
    - I haven't written anything that validates user input to make sure only letters go into the userGuesses array, or made sure that 
    - The same incorrect guess can decrement guessesLeft multiple times

I would also like to add some CSS styling to the game.


  