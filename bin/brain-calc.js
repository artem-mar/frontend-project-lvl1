#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playGame, getRandomInt } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}`);

const description = 'What is the result of the expression?';
let expression = null;
let result = null;

const reloadData = () => {
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);

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
};
reloadData();
const exam = (userValue, correctValue) => userValue === correctValue;

const gameLauncher = (name, reloader) => {
  let counter = 0;
  while (counter < 3) {
    if (playGame(description, expression, exam, result)) {
      counter += 1;
      reloader();
    } else break;
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

gameLauncher(userName, reloadData);
