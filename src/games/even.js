import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }

  return false;
}
const gameData = () => {
  const num = getRandomNumber(0, 100);
  const question = `Question: ${num} `;
  const answer = isEven(num) ? 'yes' : 'no';
  const correctAnswer = answer;
  return [correctAnswer, question];
};
const startEven = () => {
  playGame(task, gameData);
};
export default startEven;
