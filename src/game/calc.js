import game from '../index.js'

const task = 'What is the result of the expression?';
function random() {
    return (Math.floor(Math.random() * 100));
}
const arr = ['+', '-', '*'];
function randznak(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

const data = () =>{
    const num1 = random();
    const num2 = random();
    const znak = randznak(arr);
    const question = `Question: ${num1} ${znak} ${num2} `;
    let correctAnswer;
    switch (znak){
        case '+':
             correctAnswer = num1 + num2;
            break;
        case '-':
             correctAnswer = num1 - num2;
            break;
        case '*':
             correctAnswer = num1 * num2;
            break;
            default:
                return null;
    }
    return [correctAnswer, question];
};
game(task, data);
export default data;