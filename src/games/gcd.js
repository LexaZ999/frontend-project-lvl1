import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, getRandomInteger, getGcd, compareAnswer,
} from '../index.js';

const runGcdGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('Find the greatest common divisor of given numbers.');
  }

  const firstNumber = getRandomInteger(numMin, numMax);
  const secondNumber = getRandomInteger(numMin, numMax);
  const question = `${firstNumber} ${secondNumber}`;
  const trueAnswer = getGcd(firstNumber, secondNumber);

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return runGcdGames(counter + 1);
};

export default runGcdGames;
