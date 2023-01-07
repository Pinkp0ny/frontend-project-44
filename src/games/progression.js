import playGame from '../index.js';
import {getRandomNumber} from '../utils.js';

const progression = () => {
  const diff = getRandomNumber(0, 100);
  let startnumber = getRandomNumber(0, 100);
  const arr = [startnumber];
  for (let i = 0; i < 10; i += 1) {
    startnumber += diff;
    arr.push(startnumber);
  }
  return arr;
};
function replace(arr, del) {
  arr.splice(del, 1, '..');
  return arr.join(' ');
}
const task = 'What number is missing in the progression?';
const gameData = () => {
  let arr = progression();
  const del = (Math.floor(Math.random() * arr.length));
  const correctAnswer = arr[del];
  arr = replace(arr, del);
  const question = `Question: ${arr}`;
  return [correctAnswer, question];
};
const startProgression = () => {
  playGame(task, gameData);
};
export default startProgression;
