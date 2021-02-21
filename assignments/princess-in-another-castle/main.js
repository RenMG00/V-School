const readline = require("readline-sync")
let playerStatus = ["Small", "Large", "Powered Up", "Dead"];
let playerName = ["Luigi", "Mario"];
let gameActive = true;
let nameSelect = readline.keyInSelect(playerName);
let timer = 0;
let endTime = 0;

const setName = (playerToChange) => {
    playerToChange.name = playerName[nameSelect];
}

class Player {
    constructor(playerIndex) {
        this.name = playerName[playerIndex];
        this.status = playerStatus[0];
        this.coins = 0;
        this.hasStar = false;
    }
}

const gotHit = (hitPlayer) => {

    switch (hitPlayer.status) {
        case "Small":
            hitPlayer.status = playerStatus[3];
            gameActive = false;
            break;
        case "Large":
            hitPlayer.status = playerStatus[0];
            break;
        case "Powered Up":
            hitPlayer.status = playerStatus[1];
    }
}

const powerUp = (powerPlayer) => {

    switch (powerPlayer.status) {
        case "Small":
            powerPlayer.status = playerStatus[1];
            break;
        case "Large":
            powerPlayer.status = playerStatus[2];
            break;
        case "Powered Up":
            console.log("You're Juiced!");
    }
}
const addCoins = (totalCoins) => {
    totalCoins.coins++;
}
const starPower = (playerStar, timer) => {
    endTime = timer + 10;
    playerStar.hasStar = true;
}
const print = (playerPrint) => {

    console.log(`
            Player: ${playerPrint.name}
            Status: ${playerPrint.status}
            Coins: ${playerPrint.coins}`)
            if (playerPrint.hasStar === true) {
            console.log("You have a star!")
         }
}
const gameOn = () => {

    const player = new Player();
    setName(player);
    const gameInterval = setInterval(() => {

        let numRandom = Math.floor(Math.random() * (3 - 0 + 1));

        timer++;
        if (timer === endTime) {
            player.hasStar = false;
        }

        switch (numRandom) {
            case 0:
                gotHit(player)
                break;
            case 1:
                powerUp(player);
                break;
            case 2:
                addCoins(player);
                break;
            case 3:
                starPower(player, timer);
                break;
        }
        if (player.status === "Dead") {
            clearInterval(gameInterval);
            console.log("Game Over!")
        }
        print(player);
    }, 1000);

}

gameOn();
