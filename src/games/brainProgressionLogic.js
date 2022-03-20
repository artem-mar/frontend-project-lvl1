import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';
import greeting from '../cli.js';

export default () => {
  const description = 'What number is missing in the progression?';

  const getProgression = () => {
    const step = getRandomInt(2, 10);
    const prog = [getRandomInt(0, 10)];
    for (let i = getRandomInt(4, 9); i > 0; i -= 1) {
      prog.push(+prog.slice(-1) + step);
    }
    return prog;
  };

  const reloadData = () => {
    let progression = getProgression();
    const index = getRandomInt(0, progression.length - 1);
    const result = progression[index].toString();
    progression[index] = '..';
    progression = progression.join(' ');

    return [progression, result];
  };

  const userName = greeting();
  gameLauncher(userName, description, reloadData);
};
