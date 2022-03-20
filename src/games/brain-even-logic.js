import { getRandomInt, greeting, gameLauncher } from '../index.js';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const reloadData = () => {
    const expression = getRandomInt(0, 100);
    let result = null;

    if (expression % 2 === 0) {
      result = 'yes';
    } else result = 'no';
    return [expression, result];
  };

  const userName = greeting();
  gameLauncher(userName, description, reloadData);
};
