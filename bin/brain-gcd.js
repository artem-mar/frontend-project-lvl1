#!/usr/bin/env node

import { getRandomInt, greeting, gameLauncher } from '../src/index.js';

const description = 'What is the result of the expression?';

const reloadData = () => {
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);
  const expression = `${a} ${b}`;
  let result = null;
  let divider = a < b ? a : b;
  while (divider > 0) {
    if (a % divider === 0 && b % divider === 0) {
      result = divider.toString();
      break;
    } else {
      divider -= 1;
    }
  }

  return [expression, result];
};

const userName = greeting();
gameLauncher(userName, description, reloadData);
