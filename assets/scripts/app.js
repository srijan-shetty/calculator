const defaultResult = 0;
let currentResult = defaultResult;

const getUserInput = () => {
  return parseInt(userInput.value);
};
const outputfn = (operator, initialResult, enteredNum) => {
  const currentDesc = `${initialResult} ${operator} ${enteredNum}`;
  outputResult(currentResult, currentDesc);
};

const add = () => {
  const enteredValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult + enteredValue;
  outputfn("+", initialValue, enteredValue);
};
const multiply = () => {
  const enteredValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult * enteredValue;
  outputfn("*", initialValue, enteredValue);
};
const substract = () => {
  const enteredValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult - enteredValue;
  outputfn("-", initialValue, enteredValue);
};
const divide = () => {
  const enteredValue = getUserInput();
  const initialValue = currentResult;
  currentResult = currentResult / enteredValue;
  outputfn("/", initialValue, enteredValue);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
