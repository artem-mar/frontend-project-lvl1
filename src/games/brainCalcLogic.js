import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';

const generateData = () => {
  const a = getRandomInt(0, 10);
  const b = getRandomInt(0, 10);
  let expression = null;
  let correctAnswer = null;

  switch (getRandomInt(1, 3)) {
    case 1:
      expression = `${a} + ${b}`;
      correctAnswer = `${a + b}`;
      break;
    case 2:
      expression = `${a} - ${b}`;
      correctAnswer = `${a - b}`;
      break;
    case 3:
      expression = `${a} * ${b}`;
      correctAnswer = `${a * b}`;
      break;
    default:
      break;
  }
  return [expression, correctAnswer];
};

export default () => {
  const description = 'What is the result of the expression?';

  gameLauncher(description, generateData);
};
