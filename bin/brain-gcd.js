#!/usr/bin/env node

import { getRandomInt, greeting, gameLauncher } from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const reloadData = () => {
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);
  const expression = `${a} ${b}`;

  let divider = a < b ? a : b;

  while (a % divider !== 0 || b % divider !== 0) {
    divider -= 1;
  }
  divider = divider.toString();

  return [expression, divider];
};

const userName = greeting();
gameLauncher(userName, description, reloadData);
