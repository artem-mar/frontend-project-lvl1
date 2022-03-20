import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const exam = (userValue, correctValue) => userValue === correctValue;

export const playGame = (question, check, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let result = null;
  if (check(userAnswer, correctAnswer)) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(
      `"${userAnswer}" is wrong answer ;( Correct answer was "${correctAnswer}"`,
    );
    result = false;
  }
  return result;
};

export const gameLauncher = (name, gameRules, reloader) => {
  let counter = 0;
  console.log(gameRules);
  while (counter < 3) {
    const [expression, result] = reloader();
    if (playGame(expression, exam, result)) {
      counter += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
