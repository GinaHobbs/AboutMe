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

// let correctAnswer = 4;
// let gameWon = false;
// let guessCount = 1;

// while ((gameWon != true) && (guessCount <= 4)) {
//   let userGuess = prompt('Guess a number in the range of 1 and 10');
//   if ((userGuess < 1) || (userGuess > 10)) {
//     alert('Please input a value in the range of 1 and 10');
//   }
//   else {
//     // console.log('here is the answer in the else branch: ' + userGuess);
//     for (let i = 0; i < guessCount; i++) {
//       // console.log('here is the answer in the for loop:' + userGuess);
//       if (userGuess < correctAnswer){
//         alert('Your guess is too low.');
//         break;
//       }
//       else if (userGuess > correctAnswer) {
//         alert('Your guess is too high');
//         break;
//       }
//       else if (userGuess == correctAnswer) {
//         alert('You are correct!');
//         gameWon = true;
//         break;
//       }
//     }
//   }
//   if (gameWon === true) {
//     break;
//   }
//   guessCount++;
// }

let castlevaniaArray = ['alucard', 'trevor', 'sypha', 'grant'];
let castlevaniaGameWon = false;
let castlevaniaGuessCount = 0;

while ((castlevaniaGameWon != true) && (castlevaniaGuessCount < 6)) {
  let castlevaniaAnswer = prompt('Who is a party member in Castlevania 2?');
  let castlevaniaAnswerLower = castlevaniaAnswer.toLowerCase();

  for (let i = 0; i < castlevaniaArray.length; i++) {
    if (castlevaniaAnswerLower == castlevaniaArray[i].toString()) {
      alert('You are correct!');
      castlevaniaGameWon = true;
    }
  }
  if (castlevaniaGameWon === true) {
    break;
  }
  alert('Guess again.');
  castlevaniaGuessCount++;
}
