import readlineSync from 'readline-sync';

const playGame = (task, getGameData) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username} !`);
  console.log(task);
  for (let i = 0; i < rounds; i += 1) {
    const [correctAnswer, question] = getGameData();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${username}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};
export default playGame;
