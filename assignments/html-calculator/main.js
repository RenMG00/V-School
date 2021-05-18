const addForm = document["addForm"];
const subForm = document["subForm"];
const mulForm = document["mulForm"];

let addDiv = document.getElementById("addition");
let subDiv = document.getElementById("subtraction");
let mulDiv = document.getElementById("multiplication");


let addBox = document.getElementById("addResult");
let subBox = document.getElementById("subResult");
let mulBox = document.getElementById("mulResult");


addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let num1 = addForm.addNum1.value;
    let num2 = addForm.addNum2.value;

    let addResults = (Number(num1) + Number(num2));

    let addResult = document.createElement("p");
    addResult.textContent = addResults;
    addBox.appendChild(addResult);

    // clearResults();

});

subForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let num1 = subForm.subNum1.value;
    let num2 = subForm.subNum2.value;

    let subResults = (Number(num1) - Number(num2));

    let subResult = document.createElement("p");
    subResult.textContent = subResults;
    subBox.appendChild(subResult)
    
    if (subResult < 0) {
        return subResult;
    }
    // clearResults();
});

mulForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let num1 = mulForm.mulNum1.value;
    let num2 = mulForm.mulNum2.value;

    let mulResults = (Number(num1) * Number(num2));

    let mulResult = document.createElement("p");
    mulResult.textContent = mulResults;
    mulBox.appendChild(mulResult);
  // clearResults();
});

// const clearResults = () => {
//     addBox.textContent = "";
//     subBox.textContent = "";
//     mulBox.textContent = "";
// }



