var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 10 ) +1;
//Prompts the user for a guess
var guess = prompt(' I am thinking of a random number between 1 and 10. Can you guess it?');

if (parseInt(guess) === randomNumber) {
  correctGuess = true;
  //asks the user to guess higher
} else if( parseInt(guess) < randomNumber ) {
  var guessMore = prompt("Try again, the number I am thinking of is Higher than your guess");
    if (parseInt(guessMore) === randomNumber) {
      correctGuess = true; 
    }
  //asks the user to guess lower
} else if( parseInt(guess) > randomNumber ) {
  var guessLess = prompt("Try again, the number I am thinking of is Lower than your guess");
    if (parseInt(guessLess) === randomNumber) {
      correctGuess = true; 
    }
}
if (correctGuess) {
  document.write("Well done! You guessed the number!");
} else {
  document.write("Sorry, the number was " + randomNumber);
}