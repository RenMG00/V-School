let readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let charString = "";

for (let i = 0; i < input.length; i++) {
    const index = alphabet.indexOf(input[i]);
    const newChar = alphabet[(index + shift)%26]
    charString += newChar;
}
  
  console.log(charString)
