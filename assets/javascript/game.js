//Alphabet letters to choose from, all 26 choices.  
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Counters all set to starting points. Init array for 
//storing letter guesses.
var yourWins = 0;
var yourLosses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
/**/
/**/ 
//Allow the computer to select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};
/*End of function*/
/**/
var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {

  // Incorrect guessed displayed here, separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
/*End of function*/
/**/
// Anonymous function to reset the game. 
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}
/*End of function*/
//
//
updateLetterToGuess();
updateGuessesLeft();
//
//
//Event listener for the chosen letter. 
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
//
//Nested if and else if statements to handle correct or incorrect letter guesses. 
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                yourWins++;
                document.querySelector('#wins').innerHTML = "Wins: " + yourWins;
                alert("OK, you might be psychic, do it again!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Update the HTML, send the LoserAlert to the user.
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + yourLosses;
            alert("Dude, you're a fraud!!!");
            // Reset the game 
            reset();
        }
};
