import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, compareAnswer, prime,
} from '../index.js';

const primeGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
  const question = randomInteger(numMin, numMax);
  const trueAnswer = (prime(question)) ? 'yes' : 'no';

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return primeGames(counter + 1);
};

export default primeGames;
