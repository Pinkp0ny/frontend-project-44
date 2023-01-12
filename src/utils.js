const getRandomNumber = (min = 0, max = 100) => (min + Math.floor(Math.random() * (max - min)));
export default getRandomNumber;
