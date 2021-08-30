import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, getRandomInteger, compareAnswer, isPrime,
} from '../index.js';

const runPrimeGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
  const question = getRandomInteger(numMin, numMax);
  const trueAnswer = (isPrime(question)) ? 'yes' : 'no';

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return runPrimeGames(counter + 1);
};

export default runPrimeGames;
