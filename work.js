let num1, num2

let num1Input = document.getElementById("num1-el")
let num2Input = document.getElementById("num2-el")

function updateInputValues(){
    num1 = parseInt(num1Input.value, 10);
    num2 = parseInt(num2Input.value, 10);
}

let resultEl = document.getElementById("result-el")
let zeroDivisionError = document.getElementById("zero-div-err")


function add(){
    updateInputValues()
    resultEl.textContent += (num1 + num2).toString()
}

function subtract(){
    updateInputValues()
    if(num1 > num2){
        resultEl.textContent += (num1 - num2).toString()
    }
    else{
        resultEl.textContent += (num2 - num1).toString()
    }
}

function divide(){
    updateInputValues()
    if(num2 == 0){
        zeroDivisionError.textContent = "ZERO DIVISION ERROR !!!!"
        window.alert("You cannot divide a number to zero.")
    }
    else{
        resultEl.textContent += (num1 / num2).toString()
    }
}

function multiply(){
    updateInputValues()
    resultEl.textContent += (num1 * num2).toString()
}

function clearentries(){
    num1Input.value = null;
    num2Input.value = null;
    resultEl.textContent = "Result: ";
    zeroDivisionError.textContent = "";
}