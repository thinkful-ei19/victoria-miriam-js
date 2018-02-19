/*Jedi name
Write a function called jediName which takes two arguments:

firstName - a person's first name
lastName - a person's last name
The function should return the person's Jedi name. A Jedi name is formed from the first three letters of the last name, and the first two letters of the first name. For example, jediName('Beyonce', 'Knowles') should return 'KnoBe'.
*/

function jediName(firstName, lastName) {
  return lastName.substr(0,3) + firstName.substr(0, 2);
}

console.log(jediName('victoria', 'daug'))
