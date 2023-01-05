import game from "../index.js";
import randomNumber from '../randomNumber.js'

const getGcd = (num1, num2) =>{
    Math.abs(num1);
    Math.abs(num2);
        if (!num2){
            return num1;
        }
        else {
            return getGcd(num2, num1 % num2);
        }
    };
const task = 'Find the greatest common divisor of given numbers.';
const data = () =>{
    const num1 = randomNumber();
    const num2 = randomNumber(); 
    const question = `Question: ${num1} ${num2}`;
    const correctAnswer = getGcd(num1, num2);
    return [correctAnswer, question];
};
const startGcd = () => {
game(task,data);
};
export default startGcd;