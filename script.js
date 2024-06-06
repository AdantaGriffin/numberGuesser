let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
};
//console.log(generateTarget())
const checkHumanGuess = (humanGuess) => {
    if(humanGuess < 0 || humanGuess > 9){ //edited this as I pasted the wrong code earlier
        window.alert("Please make sure your guess is between 0 and 9");
    }
};


const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(humanGuess - targetGuess);
  const computerDifference = Math.abs(computerGuess - targetGuess);
  if (humanDifference <= computerDifference) {
    return true
  } else {
    return false
  }
};
//console.log(compareGuesses())



const updateScore = winner => {
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++
  }
};



const advanceRound = () => {
  currentRoundNumber++
};





