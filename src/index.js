import readlineSync from 'readline-sync';

export const playGame = (gameRules, question, check, correctAnswer) => {
  console.log(gameRules);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let result = null;
  if (check(userAnswer, correctAnswer)) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(
      `${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}`,
    );
    result = false;
  }
  return result;
};

export const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
