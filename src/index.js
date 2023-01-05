import readlineSync from 'readline-sync';

const  game = (task, data) =>{
const Rounds = 3;
console.log("Welcome to the Brain Games!");
const username = readlineSync.question('May I have your name? ');
console.log (`Hello, ${username} !`);
console.log(task);
    for (let i = 0; i < Rounds; i++){
        const [correctAnswer, question] = data(); 
        console.log(question);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer == correctAnswer){
            console.log('Correct!');
        }
        else{
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${username}!`);
            return;
        }
    }
    console.log(`Congratulations, ${username}!`);
};
export default game;