import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';

const getProgression = () => {
  const step = getRandomInt(2, 10);
  const progression = [];
  const firstElement = getRandomInt(0, 10);
  const progressionLength = getRandomInt(5, 10);

  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(firstElement + step * i);
  }
  return progression;
};

const generateData = () => {
  let progression = getProgression();
  const index = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  progression = progression.join(' ');

  return [progression, correctAnswer];
};

export default () => {
  const description = 'What number is missing in the progression?';

  gameLauncher(description, generateData);
};
