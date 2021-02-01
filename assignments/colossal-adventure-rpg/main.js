var readlineSync = require('readline-sync');

let game = true;
let forestPosition = 0;
let battleOpts = ["run", "fight", "drink pink champagne on ice"];
let player = {};
let inventory = [];


let treasures = ["A Diamond Toothpick", "A Brand New Iphone X", "A Candle", "Pink Champagne on Ice"];
let allEnemies = ["Shiba the Spider", "Ork", "Gollum"];

// The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// The user can decide to attack or run
// If attacking, a random amount of damage will be delt between a min and max.

let startGame = () => {
    const playerName = readlineSync.question("Hello weary traveler! You seem lost. What is your name?:");
    player = createPlayer(playerName);
    console.log("Why hello, " + playerName + "...");
    console.log("You should rest. There is an Inne up ahead, but you must cross through the wood on foot.");
    console.log("Be warned! The woods hold all types of surprises!");
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


let createPlayer = (userName) => {
    let currentPlayer = {
        name: userName,
        hp: 50,
        str: 10,
    }
    return currentPlayer;
}
let enemy = () => {
    let enemyName = getRandomInt(allEnemies.length);
    let treasureName = getRandomInt(treasures.length);
    let currentEnemy = {
        name: allEnemies[enemyName],
        hp: 30 - getRandomInt(4),
        winHp: 10,
        item: treasures[treasureName],
        str: 10 - getRandomInt(6)
    }
    return currentEnemy;
}


function battle() {
    let thisEnemy = enemy();
    let fighting = true;
    console.log("You've encountered " + thisEnemy.name);

    while (fighting) {
        const fight = readlineSync.keyInSelect(battleOpts, "Fight or Run for your life!");

        if (fight === 1) {
            thisEnemy.hp -= player.str;
            console.log(`You stabbed ${thisEnemy.name} with your steely knife and did ${player.str} damage!`);
            if (thisEnemy.hp < 1) {
                console.log(`Slay Queen! You defeated ${thisEnemy.name}`);
                console.log(`The enemy dropped ${thisEnemy.item} and you earned ${thisEnemy.winHp} points`);
                inventory.push(thisEnemy.item);
                if (inventory.includes("A Diamond Toothpick" && "A Brand New Iphone X" && "A Candle" && "Pink Champagne on Ice")) {
                    console.log("Congrats you collected all of the treasures. You have won the game and earned your keep!");
                }
                player.hp += thisEnemy.winHp;
                fighting = false;
            }
            console.log(`${thisEnemy.name} did ${thisEnemy.str} damage!`);
            player.hp -= thisEnemy.str;
            console.log(player.hp);
            console.log(thisEnemy.hp);
        }

        if (fight === 0) {
            let run = getRandomInt(2);
            if (run === 0) {
                console.log("You escaped!");
                fighting = false;
            } else {
                console.log("Oh no! You weren't fast enough! The enemy is here!");
                console.log(`${thisEnemy.name} did ${thisEnemy.str} damage!`);
                player.hp -= thisEnemy.str;
                console.log(player.hp);
            }
        }
        if (fight === 2) {
            if (inventory.includes("Pink Champagne on Ice")) {
                const index = inventory.indexOf("Pink Champagne on Ice");
                inventory.splice(index, 1);
                console.log("You drank the pink champagne on ice!")
                player.hp = 50;
            } else {
                console.log("We haven't had that spirit here since 1969!");
            }
        }
    }
    if (player.hp < 1) {
        console.log("You just can't kill the beast!!");
        game = false;
    }
}

startGame();
while (game) {
    const action = readlineSync.question("Press w to walk or i for player information or p for pink champagne on ice.");
    console.log(forestPosition);
    switch (forestPosition) {
        case 0:
            console.log("You're on a dark desert highway. There's a cool wind in your hair.");
            break;
        case 1:
            console.log("Up ahead in the distance, you see a shimmering light.");
            break;
        case 2:
            console.log("This could be heaven or this could be hell!");
            break;
        case 3:
            console.log("Your head grows heavy and your sight grows dim.");
            break;
        case 4:
            console.log("There she stands in the doorway. You hear the mission bell!");
            break;
        case 5:
            console.log("She lights up a candle and she shows you the way.");
            break;
        case 6:
            console.log("There are voices down the corridor, you can hear them say.");
            break;
        case 7:
            console.log("Welcome to the Hotel California! You win but you can never leave!");
            game = false;
            break;
        default:
            break;
    }
    if (action === "w") {
        forestPosition++;
        const enemyEncounter = getRandomInt(3);
        if (enemyEncounter === 0) {
            battle();
        }
    }
    if (action === "i") {
        console.log(`Player: ${player.name}, HP: ${player.hp}, Items: ${inventory}`);
    }
    if (action === "p") {
        console.log(inventory);
        if (inventory.includes("Pink Champagne on Ice")) {
            console.log("You drank the pink champagne on ice. Your HP is maxed out!")
            const index = inventory.indexOf("Pink Champagne on Ice");
            inventory.splice(index, 1);
            player.hp = 50;
        } else {
            console.log("We haven't had that spirit here since 1969!");
        }
    }
}
