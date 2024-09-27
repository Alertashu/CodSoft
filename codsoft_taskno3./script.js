let displayValue = ''; 
let currentOperator = null;
let result = null; 

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay(displayValue);
}

function appendOperator(operator) {
    if (displayValue === '' || /[\+\-\*\/%]$/.test(displayValue)) return;
    if (currentOperator) {
        calculateResult();
    }
    displayValue += ` ${operator} `;
    currentOperator = operator;
    updateDisplay(displayValue);
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay(displayValue);
    }
}

function calculateResult() {
    try {
        result = eval(displayValue.replace(/×/g, '*').replace(/÷/g, '/'));
        displayValue = result.toString();
        updateDisplay(displayValue);
        currentOperator = null;
    } catch (e) {
        updateDisplay('Error');
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay('0');
}
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay(displayValue || '0');
}
