import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, gcd, compareAnswer,
} from '../index.js';

const gcdGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('Find the greatest common divisor of given numbers.');
  }

  const firstNumber = randomInteger(numMin, numMax);
  const secondNumber = randomInteger(numMin, numMax);
  const question = `${firstNumber} ${secondNumber}`;
  const trueAnswer = gcd(firstNumber, secondNumber);

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return gcdGames(counter + 1);
};

export default gcdGames;
