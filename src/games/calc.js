import game from '../index.js';
import randomNumber from '../randomNumber.js';
import randomSign from '../randomSign.js';

const task = 'What is the result of the expression?';
const data = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const sign = randomSign();
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
  game(task, data);
};
export default startCalc;
