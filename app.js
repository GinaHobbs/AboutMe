'use strict';

// let userName = prompt('What is you name?');
// alert('Hello ' + userName + '! Welcome to my site.');

// let howOld = prompt('Am I 33?');
// let howOldLower = howOld.toLowerCase();
// if ((howOldLower === 'y') || (howOldLower === 'yes')) {  alert('You are correct!');
// // console.log('You are correct!')
// } else if ((howOldLower === 'n') || (howOldLower === 'no')) {
//   alert('Wrong! I am 33 years old.');
// } else {
//   alert('I do not understand your input');
// }

// let whereFrom = prompt('Am I from California?');
// let whereFromLower = whereFrom.toLowerCase();
// if ((whereFromLower === 'y') || (whereFromLower === 'yes')) {  alert('Wrong! I am from Oklahoma.');
// } else if ((whereFromLower === 'n') || (whereFromLower === 'no')) {
//   alert('You are correct!.');
//   // console.log('You are correct!')
// } else {
//   alert('I do not understand your input');
// }

// let whatHobby = prompt('Is my hobby ice skating?');
// let whatHobbyLower = whatHobby.toLowerCase();
// if ((whatHobbyLower === 'y') || (whatHobbyLower === 'yes')) {  alert('Wrong! My hobby is playing guitar.');
// } else if ((whatHobbyLower === 'n') || (whatHobbyLower === 'no')) {
//   alert('You are correct! My hobby is playing guitar.');
//   // console.log('You are correct!')
// } else {
//   alert('I do not understand your input');
// }

// let whatSchool = prompt('Am I attending Code Fellows?');
// let whatSchoolLower = whatSchool.toLowerCase();
// if ((whatSchoolLower === 'y') || (whatSchoolLower === 'yes')) {  alert('You are correct!');
// // console.log('You are correct!')
// } else if ((whatSchoolLower === 'n') || (whatSchoolLower === 'no')) {
//   alert('Wrong!');
// } else {
//   alert('I do not understand your input');
// }

// let whatDegree = prompt('Is my degree in English?');
// let whatDegreeLower = whatDegree.toLowerCase();
// if ((whatDegreeLower === 'y') || (whatDegreeLower === 'yes')) {  alert('Wrong! My degree is in Chinese Mandarin.');
// } else if ((whatDegreeLower === 'n') || (whatDegreeLower === 'no')) {
//   alert('You are correct!');
//   // console.log('You are correct!')
// } else {
//   alert('I do not understand your input');
// }

let userGuess = prompt('Guess a number in the range of 1 and 10');
let answer = 4;
let gameWon = false;
let guessCount = 0;

while (gameWon === false && guessCount < 4) {
  if (userGuess < 1 || userGuess > 10) {
    alert('Please input a value in the range of 1 and 10');
  }
  else {
    for (i = 0; i < guessCount; i++){
      if (userGuess < answer){
        alert('Your guess is too low.');
      }
      else if (userGuess > answer) {
        alert('Your guess is too high');
      }
      else if (userGuess == answer) {
        alert('You are correct!');
        gameWon = true;
        break;
      }
    }
  }
  guessCount++;
}
