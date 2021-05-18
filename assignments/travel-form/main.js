const travelForm = document["travelForm"];

travelForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstName = travelForm.elements["firstName"].value;
    let lastName = travelForm.elements["lastName"].value;
    let age = travelForm.elements["age"].value;
    let gender = travelForm.elements["gender"].value;
    let destination = travelForm.elements["destination"].value;
    let food = [];

    if (travelForm.elements['vegan'].checked) {
        food.push(document.getElementById('vegan').value);
    }
    if (travelForm.elements['gluten'].checked) {
        food.push(document.getElementById('gluten').value);
    }
    if (travelForm.elements['paleo'].checked) {
        food.push(document.getElementById('paleo').value);
    }
    //document.form.addEventListener("submit", formAlert);
    alert("First Name: " + "" + firstName +
        "Last Name: " + lastName +
        "Age: " + age +
        "Gender: " + gender +
        "Travel Location: " + destination +
        "Diet: " + food + "" + "Thank you! You're now registered to travel!");
});

