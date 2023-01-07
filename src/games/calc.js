import playGame from '../index.js';
import {getRandomNumber} from '../utils.js';
import {getRandomSign} from '../utils.js';

const task = 'What is the result of the expression?';
const gameData = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
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
