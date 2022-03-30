import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const expression = getRandomInt(0, 100);
  const correctAnswer = isPrime(expression) ? 'yes' : 'no';
  return [expression, correctAnswer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLauncher(description, generateData);
};
