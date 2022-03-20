import gameLauncher from '../index.js';
import getRandomInt from '../getRandomInt.js';
import greeting from '../greeting.js';

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const reloadData = () => {
    const number = getRandomInt(0, 100);
    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];
    const answer = primes.includes(number) ? 'yes' : 'no';
    return [number, answer];
  };

  const userName = greeting();
  gameLauncher(userName, description, reloadData);
};
