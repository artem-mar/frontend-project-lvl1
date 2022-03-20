import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';
import greeting from '../cli.js';

export default () => {
  const description = 'What is the result of the expression?';

  const reloadData = () => {
    const a = getRandomInt(0, 10);
    const b = getRandomInt(0, 10);
    let expression = null;
    let result = null;

    switch (getRandomInt(1, 3)) {
      case 1:
        expression = `${a} + ${b}`;
        result = `${a + b}`;
        break;
      case 2:
        expression = `${a} - ${b}`;
        result = `${a - b}`;
        break;
      case 3:
        expression = `${a} * ${b}`;
        result = `${a * b}`;
        break;
      default:
        break;
    }
    return [expression, result];
  };

  const userName = greeting();
  gameLauncher(userName, description, reloadData);
};
