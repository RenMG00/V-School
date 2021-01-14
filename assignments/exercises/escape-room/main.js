const readline = require("readline-sync");
const name = readline.question("What is your name?");
console.log("Welcome" + "" + name + "to the Escape Room!");
console.log("In the escape room you will see a door and a hole in the wall!");
console.log("If you want to live you must find your way out!");


let gameOver = false;
let foundKey = false;

const options = ["Put hand in the hole", "Open the door", "Find the key"];

while (!gameOver) {
    let index = readline.keyInSelect(options, 'Make your choice wisely!');
    switch (index) {
        case 0:
            console.log("Oh no! You died! Try again!");
            console.log(foundKey);
            gameOver = true;
            break;
        case 1:
            if (!foundKey) {
                console.log("You must find the key before opening the door!");
            }
            else {
                console.log("Woah, you found the key! Run as fast as you can!");
                gameOver = true;
            }
            break;
        case 2:
            console.log("Congratjulations! You found the key! Now get out while you still can!");
            foundKey = true;
            break;
        default:
            gameOver = true;
    }
}




