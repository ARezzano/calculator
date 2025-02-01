let firstNumber;
let operator;
let secondNumber;
let currentDisplay;

const numButton = document.querySelectorAll(".num-button");
const resultButton = document.getElementById("result-button");
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
    if(oper === "+"){
        return add(fNum,sNum);
    }else if(oper === "-"){
        return subtract(fNum,sNum);
    }else if(oper === "*"){
        return multiply(fNum,sNum);
    }else if(oper === "/"){
        return divide(fNum,sNum);
    }
}

function calculate(){
    return operate(operator,firstNumber,secondNumber);
}

function changeDisplay(){
    if((firstNumber === undefined) && (operator === undefined) && (secondNumber === undefined)){
        currentDisplay = "";
    }else{
        currentDisplay = firstNumber + operator + secondNumber;
    }
    return displayContent.textContent = currentDisplay;
}

buttonContainer.addEventListener("click",button => {
    if(parseInt(button.target.textContent) !=undefined){
        if(firstNumber === undefined){
            firstNumber = button.target.textContent;
        }else if(secondNumber === undefined){
            secondNumber = button.target.textContent;
        }
    }else{
        operator = button.target.textContent;
    }
    return changeDisplay();
});

resultButton.addEventListener("click",button => {
    if((firstNumber != undefined) && (secondNumber != undefined) && (operator != undefined)){
        let resultOp = operate(operator,firstNumber,secondNumber);
        currentDisplay = resultOp;
        changeDisplay();
    }
});

changeDisplay();
