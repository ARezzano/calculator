let firstNumber = "";
let operator = "";
let secondNumber = "";
let operatorPressed = false;

const numButton = document.querySelectorAll(".num-button");
const resultButton = document.getElementById("result-button");
const displayContent = document.getElementById("screen-display");
const buttonContainer = document.querySelector(".container-buttons");
const clearButton = document.getElementById("clear-button");
const decButton = document.getElementById("dec-button");

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

function operate(oper,firstNum,secondNum){
    fNum = parseFloat(firstNum);
    sNum = parseFloat(secondNum);

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

/* function calculate(){
    return operate(operator,firstNumber,secondNumber);
} */

function changeDisplay(){
    displayContent.textContent = firstNumber + operator + secondNumber;
}

buttonContainer.addEventListener("click",(button) => {
    const target = button.target;

    if(displayContent.textContent.length < 20){
        if(target.classList.contains("num-button")){
            if(!operatorPressed){
                firstNumber += target.textContent;
            }else{
                secondNumber += target.textContent;
            }
        }else if(target.classList.contains("op-button")){
            operatorPressed = true;
            decimalPressed = false;
            operator = target.textContent;
        }
    }

    changeDisplay();
});

resultButton.addEventListener("click",() => {
    if(firstNumber && operator && secondNumber){
        let resultOp = operate(operator,firstNumber,secondNumber);
        if(resultOp.toString().includes(".")){
            resultOp = resultOp.toFixed(2);
        }

        displayContent.textContent = resultOp;

        firstNumber = resultOp.toString();
        operator = "";
        secondNumber = "";
        operatorPressed = false;
    }
});

clearButton.addEventListener("click",() => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    operatorPressed = false;

    return changeDisplay();
});

decButton.addEventListener("click", (button) => {
    const target = button.target;

    if((!firstNumber.includes(".")) && (!operator)){
        firstNumber += target.textContent;
    }else if(!secondNumber.includes(".") && (operator)){
        secondNumber += target.textContent;
    }
    return changeDisplay();
});

changeDisplay();
