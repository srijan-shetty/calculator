const defaultResult = 0;
let currentResult = defaultResult;

const getUserInput = () => {
  return parseInt(userInput.value);
};

const add = () => {
  const enteredValue = getUserInput();
  const currentDesc = `${currentResult} + ${enteredValue}`;
  currentResult = currentResult + enteredValue;
  outputResult(currentResult, currentDesc);
};
const multiply = () => {
  const enteredValue = getUserInput();
  const currentDesc = `${currentResult} * ${enteredValue}`;
  currentResult = currentResult * enteredValue;
  outputResult(currentResult, currentDesc);
};
const substract = () => {
  const enteredValue = getUserInput();
  const currentDesc = `${currentResult} - ${enteredValue}`;
  currentResult = currentResult - enteredValue;
  outputResult(currentResult, currentDesc);
};
const divide = () => {
  const enteredValue = getUserInput();
  const currentDesc = `${currentResult} / ${enteredValue}`;
  currentResult = currentResult / enteredValue;
  outputResult(currentResult, currentDesc);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
