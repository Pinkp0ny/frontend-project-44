import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (num1, num2) => {
  Math.abs(num1);
  Math.abs(num2);
  if (!num2) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};
const task = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [correctAnswer, question];
};
const startGcd = () => {
  playGame(task, getGameData);
};
export default startGcd;
