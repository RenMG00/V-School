var colorCube = document.getElementById("cube");

colorCube.addEventListener("dblclick", colorGreen);
colorCube.addEventListener("mouseover", colorBlue);
colorCube.addEventListener("mousedown", colorRed);
colorCube.addEventListener("mouseout", colorYellow);

window.addEventListener("scroll", colorOrange);
window.addEventListener("keydown", colorKeys);

function colorRed() {
    colorCube.style.backgroundColor = "red";
};

function colorOrange() {
    colorCube.style.backgroundColor = "#CC5500";
};

function colorYellow() {
    colorCube.style.backgroundColor = "yellow";
}

function colorGreen() {
    colorCube.style.backgroundColor = "green";
}

function colorBlue() {
    colorCube.style.backgroundColor = "blue";
}

function colorKeys(event) {
    switch (event.which) {
        case 82:
            colorRed();
            break;
        case 79:
            colorOrange();
            break;
        case 89:
            colorYellow();
            break;
        case 71:
            colorGreen();
            break;
        case 66:
            colorBlue();
            break;
        default:
            break;
    }
}
