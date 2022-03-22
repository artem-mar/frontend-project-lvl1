import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';

const findGCD = (a, b) => {
  let divisor = a < b ? a : b;

  while (a % divisor !== 0 || b % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const generateData = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const expression = `${firstNum} ${secondNum}`;
  const correctAnswer = findGCD(firstNum, secondNum).toString();

  return [expression, correctAnswer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  gameLauncher(description, generateData);
};
