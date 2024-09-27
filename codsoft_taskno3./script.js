let displayValue = ''; // The current value displayed on the calculator
let currentOperator = null; // The current operator used in the calculation
let result = null; // The result of the calculation

// Update the display with the current value
function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

// Append a number to the display
function appendNumber(number) {
    // Append the number to the display value
    displayValue += number;
    updateDisplay(displayValue);
}

// Append an operator to the display
function appendOperator(operator) {
    // If display value is empty or ends with an operator, do nothing
    if (displayValue === '' || /[\+\-\*\/%]$/.test(displayValue)) return;
    if (currentOperator) {
        calculateResult();
    }
    displayValue += ` ${operator} `;
    currentOperator = operator;
    updateDisplay(displayValue);
}

// Append a decimal point to the display
function appendDot() {
    // Only allow one dot in the display value
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay(displayValue);
    }
}

// Calculate the result of the current expression
function calculateResult() {
    try {
        // Evaluate the expression and update display with the result
        result = eval(displayValue.replace(/×/g, '*').replace(/÷/g, '/'));
        displayValue = result.toString();
        updateDisplay(displayValue);
        currentOperator = null;
    } catch (e) {
        updateDisplay('Error');
    }
}

// Clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay('0');
}

// Delete the last character from the display
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay(displayValue || '0');
}
