'use strict';

let totalCorrect = 0;

// let userName = prompt('What is you name?');
// alert('Hello ' + userName + '! Welcome to my site.');

function questions() {
  let questionArray = ['Am I 33?', 'Am I from California?', 'Is my hobby ice skating?', 'Am I attending Code Fellows?', 'Is my degree in English?']
  let answerQuestionArray1 = ['y', 'n', 'n', 'y', 'n'];
  let answerQuestionArray2 = ['yes', 'no', 'no', 'yes', 'no'];

  for (let i = 0; i < questionArray.length; i++) {
    let userAnswer = prompt(questionArray[i]);
    let userAnswerLower = userAnswer.toLowerCase();
    if ((userAnswerLower == answerQuestionArray1[i]) || (userAnswerLower == answerQuestionArray2[i])) {
      alert('You are correct!');
      totalCorrect++;
    } else {
      alert('You are incorrect.');
    }
  }
}
questions();

function guessingGame() {
    
  let correctAnswer = Math.floor((Math.random() * 10));
  console.log(correctAnswer);
  let gameWon = false;
  let guessCount = 1;

  while ((gameWon != true) && (guessCount <= 4)) {
    let userGuess = prompt('Guess a number in the range of 1 and 10');
    if ((userGuess < 1) || (userGuess > 10)) {
      alert('Please input a value in the range of 1 and 10');
    }
    else {
      // console.log('here is the answer in the else branch: ' + userGuess);
      for (let i = 0; i < guessCount; i++) {
        // console.log('here is the answer in the for loop:' + userGuess);
        if (userGuess < correctAnswer){
          alert('Your guess is too low.');
          break;
        }
        else if (userGuess > correctAnswer) {
          alert('Your guess is too high');
          break;
        }
        else if (userGuess == correctAnswer) {
          alert('You are correct!');
          gameWon = true;
          totalCorrect++;
          break;
        }
      }
    }
    if (gameWon === true) {
      break;
    }
    guessCount++;
  }
}
guessingGame();

function castlevania() {
  
  let castlevaniaArray = ['alucard', 'trevor', 'sypha', 'grant'];
  let castlevaniaGameWon = false;
  let castlevaniaGuessCount = 0;

  while ((castlevaniaGameWon != true) && (castlevaniaGuessCount < 6)) {
    let castlevaniaAnswer = prompt('Who is a party member in Castlevania 2?');
    let castlevaniaAnswerLower = castlevaniaAnswer.toLowerCase();

    for (let i = 0; i < castlevaniaArray.length; i++) {
      if (castlevaniaAnswerLower == castlevaniaArray[i]) {
        alert('You are correct!');
        castlevaniaGameWon = true;
      }
    }
    if (castlevaniaGameWon === true) {
      totalCorrect++;
      break;
    }
    alert('Guess again.');
    castlevaniaGuessCount++;
  }
}
castlevania();

alert('You guessed ' + totalCorrect + ' out of 7 questions correctly.');