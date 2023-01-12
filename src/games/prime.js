import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getGameData = () => {
  const num = getRandomNumber();
  const question = `Question: ${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [correctAnswer, question];
};
const startPrime = () => {
  playGame(task, getGameData);
};
export default startPrime;
