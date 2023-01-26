const defaultResult = 0;
let result = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function outputWrite(operator, numBeforeCalc, num){
    const desc = `${numBeforeCalc} ${operator} ${num}`;
    outputResult(result,desc);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initNum = result;
    result = result + enteredNumber;
    outputWrite('+',initNum,enteredNumber);
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initNum = result;
    result = result - enteredNumber;
    outputWrite('-',initNum,enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initNum = result;
    result = result * enteredNumber;
    outputWrite('*',initNum,enteredNumber);
}

function divivde(){
    const enteredNumber = getUserNumberInput();
    const initNum = result;
    result = result / enteredNumber;
    outputWrite('/',initNum,enteredNumber);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divivde);

