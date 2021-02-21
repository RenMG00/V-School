const form = document["baddieForm"];

let goombaCoins = 5;
let bombCoins = 7;
let cheepCoins = 11;
let resultBox = document.getElementById("totalCost");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let numGoomba = form.numGoomba.value;
    let numBomb = form.numBomb.value;
    let numCheep = form.numCheep.value;

    if (numGoomba || numBomb || numCheep > 0) {
        let goombaCost = goombaCoins * numGoomba;
        let bombCost = bombCoins * numBomb;
        let cheepCost = cheepCoins * numCheep;
        let total = goombaCost + bombCost + cheepCost;

        let costBox = document.createElement("output");
        costBox.textContent = "$" + total;
        resultBox.appendChild(costBox);
    }
    
})