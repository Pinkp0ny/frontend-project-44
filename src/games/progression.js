import game from '../index.js';
import randomNumber from '../randomNumber.js';

const progression = () => {
  const diff = randomNumber();
  let startnumber = randomNumber();
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
const data = () => {
  let arr = progression();
  const del = (Math.floor(Math.random() * arr.length));
  const correctAnswer = arr[del];
  arr = replace(arr, del);
  const question = `Question: ${arr}`;
  return [correctAnswer, question];
};
const startProgression = () => {
  game(task, data);
};
export default startProgression;
