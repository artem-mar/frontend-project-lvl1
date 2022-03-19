#!/usr/bin/env node

import { getRandomInt, greeting, gameLauncher } from '../src/index.js';

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

// еще 1 способ написания функции reloadData()
// const reloadData = () => {
//   const operators = ['+', '-', '*'];
//   const firstValue = getRandomInt(0, 10);
//   const secondValue = getRandomInt(0, 10);
//   const operator = operators[getRandomInt(0, operators.length - 1)];

//   const expression = `${firstValue} ${operator} ${secondValue}`;
//   const result = `${eval(expression)}`;
//   return [expression, result];
// };
