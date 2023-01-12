import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';
const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('error');
  }
};
const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const signs = ['+', '-', '*'];
  const randomSign = signs[getRandomNumber(0, signs.length)];
  const question = `Question: ${num1} ${randomSign} ${num2} `;
  const correctAnswer = calculate(num1, num2, randomSign);
  return [correctAnswer, question];
};
const startCalc = () => {
  playGame(task, getGameData);
};
export default startCalc;
