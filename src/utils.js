export function getRandomNumber(min = 0, max = 100) {
  return (min + Math.floor(Math.random() * (max - min)));
}
export function getRandomSign() {
  const signs = ['+', '-', '*'];
  return signs[Math.floor(Math.random() * signs.length)];
}
