import playGame from '../index.js';
import { getRandomNumber, getRandomSign } from '../utils.js';

const task = 'What is the result of the expression?';
const gameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = getRandomSign();
  const question = `Question: ${num1} ${sign} ${num2} `;
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      return 'error';
  }
  return [correctAnswer, question];
};
const startCalc = () => {
  playGame(task, gameData);
};
export default startCalc;
