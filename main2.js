let previousOperand = "";
let currentOperand = "";
let operation = "";
let result = "";

// All clear button should clear the whole calculator
const allClearButton = document.querySelector("[data-all-clear]");
allClearButton.addEventListener("click", () => {
  previousOperand = "";
  currentOperand = "";
  operation = "";
  result = "";
});

// Delete button should remove one element from the current operand
const deleteButton = document.querySelector("[data-delete]");
deleteButton.addEventListener("click", () => {
  // remove one element from current operand
  currentOperand = currentOperand.slice(0, -1);
  // updateDisplay()
});

// Equals button should show the final result as a current operand
const equalsButton = document.querySelector("[data-equals]");
equalsButton.addEventListener("click", () => {
  // calculate()
  // updateDisplay()
});

// When clicked, number buttons should appear on the display as operands
// Each number should append to the previously clicked number
// Number zero [0] must not be the first number
// Number zero [0] can be a sole operand tho...
const numberButtons = document.querySelectorAll("[data-number]");
numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    // clicked number always appends to the current operands
    // appendNumber()
    // updateDisplay()
  });
});

// When clicked, operation buttons should appear next to the previous operand
// When clicked another operation again, it should overwrite current operation
const operationButtons = document.querySelectorAll("[data-operation]");
operationButtons.forEach((operation) => {
  operation.addEventListener("click", () => {
    // choose operation for calculate() function
    // it should also update operands
    // updateDisplay()
  });
});

// Dot should only be clicked once if any
// Dot should not be clicked if the current operand is null
const dotButton = document.querySelector("[data-dot]");
dotButton.addEventListener("click", () => {
  // dot always appends to the current operand
  // appendDot()
  // updateDisplay()
});

// Calculate() function takes 3 parameters
// -> the previous operand
// -> the chosen operation
// -> the current operand
// and returns the calculated `result` => to the updateDisplay() function
function calculate(prev, op, curr) {
  prev = parseFloat(prev);
  curr = parseFloat(curr);
  switch (op) {
    case "-":
      return prev - curr;
    case "+":
      return prev + curr;
    case "*":
      return prev * curr;
    case "÷":
      return prev / curr;
  }
}

// UpdateDisplay() function should show
// -> the previous operand
// -> the chosen operation
// -> the current operand
// -> the result
// function updateDisplay() {}
