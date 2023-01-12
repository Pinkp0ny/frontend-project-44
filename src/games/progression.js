import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (startNumber, progressionLength, diff) => {
  const arr = [startNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = arr[i] + diff;
    arr.push(nextNumber);
  }
  return arr;
};
const task = 'What number is missing in the progression?';
const getGameData = () => {
  const startnumber = getRandomNumber();
  const progressionLength = 10;
  const diff = getRandomNumber();
  const progressionIndex = getRandomNumber(0, progressionLength);
  const arr = getProgression(startnumber, progressionLength, diff);
  const correctAnswer = arr[progressionIndex];
  arr[progressionIndex] = '..';
  const question = `Question: ${arr.join(' ')}`;
  return [correctAnswer, question];
};
const startProgression = () => {
  playGame(task, getGameData);
};
export default startProgression;
