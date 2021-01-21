var header = document.createElement("h1");
var headerTwo = document.createElement("h2");
var span = document.createElement("span");

var headerText = document.createTextNode("Javascript made this!!");
header.style.fontSize = "18px";
header.style.fontFamily = "Arial"
header.style.textAlign = "right";

var fullName = document.createTextNode("Ren Gian");
headerTwo.style.color = "black";
headerTwo.style.fontFamily = "Arial";
headerTwo.style.fontSize = "10px";
headerTwo.style.textAlign = "right";

var message = document.createTextNode("wrote this JavaScript.");
span.style.padding = "5px";

header.appendChild(headerText);
span.appendChild(fullName);
span.classList.add("name");
headerTwo.appendChild(span);
headerTwo.appendChild(message);

document.body.prepend(headerTwo);
document.body.prepend(header);



//Bronze: Changing conversation text!

var conversation = document.querySelectorAll(".message");
var newMessages = ["Welcome Welcome!", "Hello, how goes it?", "It's going great!", "Super!"];

for (i = 0; i < conversation.length; i++) {
    this.conversation[i].textContent = newMessages[i];
}

// Bronze:Clear the conversation

var clearConversation = document.querySelector("#clear-button");

clearConversation.addEventListener("click", removeText);

function removeText() {
    for (i = 0; i < conversation.length; i++) {
        conversation[i].remove();
    }
};

//Silver: Changing themes!

var blueBrown = true;
var redBlack = false;
var themeDrop = document.querySelector("#theme-drop-down")
themeDrop.addEventListener("change", changeTheme);

function changeTheme() {

    var main = document.querySelector("#main");
    var colorMessage = document.querySelector(".messages");
    
    if (blueBrown){
        main.style.backgroundColor = "black"
        colorMessage.style.backgroundColor = "red"
        redBlack = true
        blueBrown = false
    } else {
        main.style.backgroundColor = "blue"
        colorMessage.style.backgroundColor = "brown"
        redBlack = false
        blueBrown = true
    }
}


