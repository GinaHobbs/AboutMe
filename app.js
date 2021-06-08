'use strict';

let userName = prompt('What is you name?')
alert('Hello ' + userName + '! Welcome to my site.')

let howOld = prompt('Am I 33?')
let howOldLower = howOld.toLowerCase();
if ((howOldLower === 'y') || (howOldLower === 'yes')) {  alert('You are correct!')
} else if ((howOldLower === 'n') || (howOldLower === 'no')) {
  alert('Wrong! I am 33 years old.')
} else {
  alert('I do not understand your input')
}

let whereFrom = prompt('Am I from California?')
let whereFromLower = whereFrom.toLowerCase();
if ((whereFromLower === 'y') || (whereFromLower === 'yes')) {  alert('Wrong! I am from Oklahoma.')
} else if ((whereFromLower === 'n') || (whereFromLower === 'no')) {
  alert('You are correct!.')
} else {
  alert('I do not understand your input')
}

let whatHobby = prompt('Is my hobby ice skating?')
let whatHobbyLower = whatHobby.toLowerCase();
if ((whatHobbyLower === 'y') || (whatHobbyLower === 'yes')) {  alert('Wrong! My hobby is playing guitar.')
} else if ((whatHobbyLower === 'n') || (whatHobbyLower === 'no')) {
  alert('You are correct!.')
} else {
  alert('I do not understand your input')
}

let whatSchool = prompt('What school am I attending?')
let whatHobbyLower = whatHobby.toLowerCase();
if ((whatHobbyLower === 'y') || (whatHobbyLower === 'yes')) {  alert('Wrong! My hobby is playing guitar.')
} else if ((whatHobbyLower === 'n') || (whatHobbyLower === 'no')) {
  alert('You are correct!.')
} else {
  alert('I do not understand your input')
}
let whatDegree = prompt('What is my degree in?')
