const readline = require("readline-sync");

const num1= readline.question("Please enter your first number:");
console.log("First Number:" + num1);
const num2 = readline.question("Please enter your second number:")
console.log("Second Number:" + num2);

const mathOperations = ["Add (+)", "Sub (-)", "Mul (*)", " Div(/)"];
const index = readline.keyInSelect(mathOperations, 'Choose your math operation');

switch(Number(index)) {
    case '+':
        console.log("Results:" + add(num1 + num2));
        break;
    case '-':
        console.log("Results:" + sub(num1 - num2));
        break;
    case '*':
        console.log("Results:" + mul(num1 + num2));
        break;
    case '/':
        console.log("Results:" + div(num1 / num2));
        break;
}

function add(num1, num2) {
    return (Number(num1) + Number(num2));
};

function sub(num1, num2) {
    return (Number(num1) - Number(num2));
};

function mul(num1, num2) {
    return (Number(num1) * Number(num2));
};

function div(num1, num2) {
    if (Number(num2 === 0))
    console.log("Do not divide by 0.");
    return (Number(num1) / Number(num2));
};

