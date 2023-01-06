export default function randomSign() {
  const signs = ['+', '-', '*'];
  return signs[Math.floor(Math.random() * signs.length)];
}
