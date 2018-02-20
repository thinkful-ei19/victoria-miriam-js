/*Jedi name
Write a function called jediName which takes two arguments:

firstName - a person's first name
lastName - a person's last name
The function should return the person's Jedi name. A Jedi name is formed from the first three letters of the last name, and the first two letters of the first name. For example, jediName('Beyonce', 'Knowles') should return 'KnoBe'.

function jediName(firstName, lastName) {
  return lastName.substr(0,3) + firstName.substr(0, 2);
}

console.log(jediName('victoria', 'daug'))


To infinity...
Write a function called beyond which takes a single argument, num and logs a different message depending on its value.

If num is infinite (either positive or negative) it should log out 'And beyond'.
If num is finite and positive it should log out 'To infinity'.
If num is finite and negative it should log out 'To negative infinity'.
If num is zero it should log out 'Staying home'.


function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home')
  }
  return
}

beyond(Infinity)


A code has been invented which replaces each character in a sentence with a five letter word. The first letter of each encoded word determines which of the remaining four characters contains the decoded character according to this table:

First letter	Character number
a	2
b	3
c	4
d	5
So for example, the encoded word 'cycle' would be decoded to the character 'l'. This is because the first letter is a 'c', so you look for the fourth character, which is 'l'.

If the first letter of the encoded word isn't 'a', 'b', 'c', or 'd' (for example 'mouse') this should be decoded to a space.

Write a function called decode which takes an encoded word as an argument, and returns the correct decoded character.

Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.

function code(word){
  var i = word[0];
  if(i === 'a'){
    return word[1];
  } else if (i === 'b'){
    return word[2];
  } else if (i === 'c'){
    return word[3];
  } else if (i === 'd'){
    return word[4];
  } else {
    return ' ';
  }
}

function message(str) {
  const word = str.split(' ');
  var outputMessage = '';
  for(w = 0; w < word.length; w++) {
    outputMessage += code(word[w]);
  }
  return outputMessage;
}
console.log(message('craft block argon meter bells brown croon droop'));

In the game Rock Paper Scissors, two players simultaneously choose one of the three options: rock, paper, or scissors. If both players choose the same option, the result is a tie. Otherwise the winner is determined as follows:

Rock beats scissors
Scissors beats paper
Paper beats rock
Create a game in which you are playing against the computer. The computer randomly chooses rock, paper, or scissors. Your function should take a number as an argument of 1, 2, or 3 to represent rock, paper, or scissors, respectively, and determine the winner. If you enter anything other than a number between 1-3, throw an error.


function rps(playerNum) {
  const compNum = Math.floor(Math.random() * 3) + 1;
  if ([1,2,3].indexOf(playerNum) === -1) {
    throw new Error('Number must be between 1-3');
  } else if (playerNum === compNum) {
    return 'No winners today';
  } else if (playerNum === 1 && compNum === 2) {
    return 'Computer wins';
  } else if (playerNum === 1 && compNum === 3) {
    return 'Player wins';
  } else if (playerNum === 2 && compNum === 1) {
    return 'Computer wins';
  } else if (playerNum === 2 && compNum === 3) {
    return 'Player wins';
  } else if (playerNum === 3 && compNum === 1) {
    return 'Computer wins';
  } else if (playerNum === 3 && compNum === 2) {
    return 'Player wins';
  }
}
console.log(rps(1))
Write a function that takes the arguments month (string) and leapYear (boolean, optional) and use a switch statement to return a sentence explaining how many days there are in that month.

For example if the argument provided is 'January', the function should return "January has 31 days". For February, it should return the appropriate 29 for leap years and 28 for non-leap. If the string doesn't match a valid month, throw an error with the message: 'Must provide a valid month.'
*/
/*if (str != month) {
  throw new Error('Must provide a valid month.');*/
function daysInMonth(month, leapYear) {
  if (leapYear === true && month === 'February') {
    month = 'leapFebruary';
  }
  switch(month) {
    case 'September':
    case 'April':
    case 'June':
    case 'November':
      days = 30;
      break;
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = 31;
      break;
    case 'February':
      days = 28;
      break;
    case 'leapFebruary':
      days = 29;
      break;
    default:
      throw new Error('Must provide a valid month.')
      break;
  }
  return days
}
console.log(daysInMonth('April',true))
