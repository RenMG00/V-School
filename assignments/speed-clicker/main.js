
let counter = 0;
let countBox = document.getElementById("countBox");
countBox.textContent = localStorage.getItem("click-count");
let timerRunning = true;

let userCount = () => {
    if (timerRunning) {
    if (localStorage.getItem("click-count") != 0) {
        counter = localStorage.getItem("click-count");
    }
    counter++;
    localStorage.setItem("click-count", counter);
    let countBox = document.getElementById("countBox");
    countBox.textContent = counter;
} else {
    console.log("Times up! Select reset to count again.")
}
}

let resetPage = () => {
    localStorage.setItem("click-count", 0);
    counter = 0;
    countBox.textContent = counter;
    timerRunning = true;
}

setTimeout(function () {
    console.log('Times Up!');
    timerRunning = false;
}, 10000);

