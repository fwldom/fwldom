function getRandomNumber() {
    return Math.floor(Math.random() * (7 - 3 + 1)) + 3;
}
function Onload() {
    setTimeout(AddText, 10)
}
function AddText() {
    setTimeout(function () {
        document.getElementById("TextWriter").innerText = "";
        document.getElementById("TextWriter").innerText += "W";
    }, 150);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "e";
    }, 300);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "b";
    }, 450);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += " D";
    }, 600);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "e";
    }, 750);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "v";
    }, 1000);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "el";
    }, 1150);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "o";
    }, 1300);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "p";
    }, 1450);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "e";
    }, 1600);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "r";
    }, 1750);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText = "";
        setTimeout(AddText2, 1750)
    }, 3750);
}
function AddText2() {
    setTimeout(function () {
        document.getElementById("TextWriter").innerText = "";
        document.getElementById("TextWriter").innerText += "J";
    }, 150);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "S";
    }, 300);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += " & ";
    }, 450);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += " P";
    }, 600);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "H";
    }, 750);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "P";
    }, 1000);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += " & ";
    }, 1150);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += " M";
    }, 1300);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "y";
    }, 1450);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "S";
    }, 1600);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText += "QL";
    }, 1750);
    setTimeout(function () {
        document.getElementById("TextWriter").innerText = "";
        setTimeout(AddText,1750)
    }, 3750);
}
Onload();
