import readlineSync from 'readline-sync';

const playGame = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let result = null;
  if (userAnswer === correctAnswer) {
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

export default (userName, gameRules, reloader) => {
  let counter = 0;
  console.log(gameRules);
  while (counter < 3) {
    const [expression, result] = reloader();
    if (playGame(expression, result)) {
      counter += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
