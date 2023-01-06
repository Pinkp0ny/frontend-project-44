import game from '../index.js';
import randomNumber from '../randomNumber.js';

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
const data = () => {
  const num = randomNumber();
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
  game(task, data);
};
export default startPrime;
