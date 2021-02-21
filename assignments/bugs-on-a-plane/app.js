
let form = document.getElementById("airlineForm");
form.addEventListener("submit", formAlert);

function formAlert() {
    e.preventDefault();

    let firstName = form.elements["firstName"].value;
    let lastName = form.elements["lastName"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    let diet = [];

    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    //document.form.addEventListener("submit", formAlert);
    alert("First Name: " + firstName +
    "Last Name: " + lastName + 
    "Age: " + age + 
    "Gender: " + gender + 
    "Travel Location: " + location + 
    "Diet: " + diet + "Awesome, now if you die, it won't be an accident..");
}
