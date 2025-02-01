let firstNumber;
let operator;
let secondNumber;
const numButton = document.querySelectorAll(".num-button");
const displayContent = document.getElementById("screen-display");
const buttonContainer = document.querySelector(".container-buttons");

function add(val1, val2){
    return val1 + val2;
}

function subtract(val1,val2){
    return val1- val2;
}

function multiply(val1,val2){
    return val1*val2;
}

function divide(val1,val2){
    return val1/val2;
}

function operate(oper,fNum,sNum){
    if(oper === "add"){
        return add(fNum,sNum);
    }else if(oper === "subtract"){
        return subtract(fNum,sNum);
    }else if(oper === "multiply"){
        return multiply(fNum,sNum);
    }else if(oper === "divide"){
        return divide(fNum,sNum);
    }
}

function changeDisplay(val){
    return displayContent.textContent = val;
}

buttonContainer.addEventListener("click",button => {
    return changeDisplay(button.target.textContent);
});


