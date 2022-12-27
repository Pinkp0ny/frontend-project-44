
import game from '../index.js'

function random() {
    return (Math.floor(Math.random() * 100));
}
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
function iseven (num) {
    if (num % 2 === 0){
        return 'yes';
 }
 else {
    return 'no';
}
}; 
const data = () =>{
    const num = random();
    const question = `Question: ${num} `;
    const correctAnswer = iseven(num);
    return [correctAnswer, question];
};
game(task, data);
export default data;