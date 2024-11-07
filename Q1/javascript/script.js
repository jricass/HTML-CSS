let number = 0;

function initialize() {
    document.getElementById("number").innerText = number;
}

function increment () {
    number++;
    document.getElementById("number").innerText = number;
}

function decrement () {
    number--;
    document.getElementById("number").innerText = number;
}