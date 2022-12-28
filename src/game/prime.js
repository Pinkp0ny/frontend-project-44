import game from "../index.js";

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function random() {
    return (Math.floor(Math.random() * 100));
}
function isPrime(num) {
    if (num < 2){
        return 'no';
    }
    for (let i = 2; i < num - 1; i++){
        if (num % i === 0){
            return 'no';
        }
    }
    return 'yes';
}
const data = () => {
    const num = random();
    const question = `Question: ${num}`;
    const correctAnswer = isPrime(num);
    return [correctAnswer, question];
};
game(task, data);
export default data;