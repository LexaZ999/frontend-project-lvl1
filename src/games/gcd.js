import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, getAnswer, gcd,
} from '../index.js';

const gcdGames = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= numberQuestions; i += 1) {
    const firstNumber = randomInteger(numMin, numMax);
    const secondNumber = randomInteger(numMin, numMax);
    const question = `${firstNumber} ${secondNumber}`;
    const trueAnswer = gcd(firstNumber, secondNumber);
    console.log(`Question: ${question}`);
    const yourAnswer = getAnswer();

    if (yourAnswer === String(trueAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'
Let's try again, ${userName[0]}!`);
    }
  }
  return console.log(`Congratulations, ${userName[0]}!`);
};

export default gcdGames;
