
import game from '../src/index.js'

function random() {
    return (Math.floor(Math.random() * 100));
}
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
function iseven (num) {
    if ((num % 2 === 0) /*|| (num % 2 === 1)*/){
        return 'yes';
 }
 else {
    return 'no';
}
}; 
//const iseven (num) = num % 2 === 0;
const data = () =>{
    const num = random();
    //const iseven = (num) => num % 2 === 0;
    const question = `Question: ${num} `;
    const correctAnswer = iseven(num);
    return [correctAnswer, question];
};
//console.log (data);
game(task, data);