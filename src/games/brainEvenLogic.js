import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';

const generateData = () => {
  const expression = getRandomInt(0, 100);
  const correctAnswer = expression % 2 === 0 ? 'yes' : 'no';

  return [expression, correctAnswer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLauncher(description, generateData);
};
