#!/usr/bin/env node
import readlineSync from 'readline-sync';

let counter = 0;
const getRandomNum = () => Math.round(Math.random() * 100);

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${userName}`);

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = getRandomNum();
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');

  if (randomNum % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
      return;
    }
  }

  if (randomNum % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
      return;
    }
  }

  if (counter < 3) {
    brainEven();
  } else {
    console.log(`Congratulations, ${userName}`);
  }
};

brainEven();
