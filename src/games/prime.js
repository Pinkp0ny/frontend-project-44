import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const gameData = () => {
  const num = getRandomNumber(0, 100);
  const question = `Question: ${num}`;
  const answer = () => {
    if (isPrime(num)) {
      return 'yes';
    }
    return 'no';
  };
  const correctAnswer = answer();
  return [correctAnswer, question];
};
const startPrime = () => {
  playGame(task, gameData);
};
export default startPrime;
