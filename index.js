// Create a number guessing game to generate a number between the range of 1 and 2.
console.log("A number guessing game that generate a number between the range of 1 and another number and prompts the user to guess the number and move to next stage with the right guess.");
console.log('');

// The game should prompt users for their username
let userName = prompt('Enter your username: ');
console.log(`Welcome to Zuri Number Guessing Game ${userName} `);

// Set range as function parameter and prompt the player to predict the generated number between the given range
let stage = 1;
let points = 0;
const randomRange = range => {
  return Math.floor(Math.random() * range) + 1;
}

// At a correct guess, the game should award the player a point, and move them to stage 2
let rangeIncrease = 2;
let result = randomRange(rangeIncrease);

let userGuess = prompt(`Guess between 1 to ${rangeIncrease} for stage One: `);

// Using a while loop,if guessed wrong else move to the next stage
while(true){
  if(parseInt(userGuess) !== result){
    console.log(`Oops!Wrong guess.\nYou finished at stage ${stage} with ${points} point. Try again!`);
    break;
  }
  else{
    console.log('Well done!unto the next stage .\n');

    //  by increasing the range limit value by 1, e.g range is from 1 and 3 for stage 2 and so on
    rangeIncrease++;
    stage++;
    points++;
    result = randomRange(rangeIncrease);
    userGuess = prompt(`Guess between 1 to ${rangeIncrease} for stage ${stage}: `);    
  }
}