function clear_display(){
document.getElementById("display").value = ''
}
function backspace() {
    const display = document.getElementById("display")
    display.value = display.value.slice(0, -1);
}
function appendToDisplay(value) {
    const display = document.getElementById("display")
    //if (display.innerText === "0") {
        display.value += value
    }
    //else {
        //display.innerText += value
    //}
//}
function Calculate() {
    const display = document.getElementById("display")
        display.value = eval(display.value)
       // console.log(eval(display.value))
    }
//}
