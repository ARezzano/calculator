let firstNumber;
let operator;
let secondNumber;


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
        add(fNum,sNum);
    }else if(oper === "subtract"){
        subtract(fNum,sNum);
    }else if(oper === "multiply"){
        multiply(fNum,sNum);
    }else if(oper === "divide"){
        divide(fNum,sNum);
    }
}