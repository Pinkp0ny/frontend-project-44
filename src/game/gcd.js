import game from "../index.js";

function random() {
    return (Math.floor(Math.random() * 100));
}
const getGcd = (num1, num2) =>{
    Math.abs(num1);
    Math.abs(num2);
        if(num1 % num2){
            return getGcd (num2, num1 % num2);
        }
        else {
            return  Math.abs(num2);
        }
    };
const task = 'Find the greatest common divisor of given numbers.';
const data = () =>{
    const num1 = random();
    const num2 = random();
    const question = `Question: ${num1} ${num2}`;
    const correctAnswer = getGcd(num1, num2);
    return [correctAnswer, question];
};

game(task,data);
export default data;