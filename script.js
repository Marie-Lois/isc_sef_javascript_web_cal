function clearDisplay(){
document.getElementById("display").value = ' '
}
function backspace() {
    const display = document.getElementById("display")
    display.value = display.value.slice(0, -1);
}
function appendToDisplay(value) {
    const display = document.getElementById("display")
    if (display.innerText === "0") {
        display.innerText = value
    }
    else {
        display.innerText += value
    }
}
function calculate() {
    const display = document.getElementById("display")
    if(display.innerText === "0") {
        display.innerText = value
    }
}
