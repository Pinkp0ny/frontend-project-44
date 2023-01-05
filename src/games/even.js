import game from '../index.js'
import randomNumber from '../randomNumber.js'

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
function isEven (num) {
    if (num % 2 === 0){
        return true;
 }
 else {
    return false;
}
}; 
const data = () =>{
    const num = randomNumber();
    const question = `Question: ${num} `;
    const answer = () => {
        if (isEven(num)) {
            return   'yes'
        } else {
          return  'no';
        }
    };
    const correctAnswer = answer();
    return [correctAnswer, question];
};
const startEven = () => {
game(task, data);
};
export default startEven;