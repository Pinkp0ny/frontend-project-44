export function getRandomNumber(min, max) {
  return (min + Math.floor(Math.random() * (max - min)));
}
export function getRandomSign() {
  const signs = ['+', '-', '*'];
  return signs[Math.floor(Math.random() * signs.length)];
}
