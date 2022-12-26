import readlineSync from 'readline-sync';
import braingame from '../src/cli.js';

function random() {
    return (Math.floor(Math.random() * 100));
}
const name = braingame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export default function braineven() {
    for (let i = 0; i < 3; i++){
    const num = random();
    let ans;
    const answer = (readlineSync.question('Question: ' + num + '\nYour answer:' ));
    if ((num % 2 === 0) || (num % 2 === 1)){
           ans = 'yes';
    }
    else { ans = 'no';}
    if ((num % 2 === 0 & answer === 'yes') || (num % 2 === 1 & answer === 'no')){
        console.log('Correct!');
    }
    else {
        console.log(answer, "is wrong answer ;(. Correct answer was " + ans +". \n Let's try again,", name, "!");
        return;
        }
    }
    console.log("Congratulations,", name  ,"!");
};