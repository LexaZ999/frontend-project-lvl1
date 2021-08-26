import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, isEven, getAnswer,
} from '../index.js';

const evenGames = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= numberQuestions; i += 1) {
    const question = randomInteger(numMin, numMax);
    console.log(`Question: ${question}`);

    const yourAnswer = getAnswer();

    const trueAnswer = (isEven(question)) ? 'yes' : 'no';
    if (yourAnswer === String(trueAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'
Let's try again, ${userName[0]}!`);
    }
  }
  return console.log(`Congratulations, ${userName[0]}!`);
};

export default evenGames;
