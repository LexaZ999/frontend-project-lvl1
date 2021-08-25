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
    if ((yourAnswer === 'yes' && isEven(question))
        || (yourAnswer === 'no' && !isEven(question))) {
      console.log('Correct!');
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
    }
  }
  return console.log(`Congratulations, ${userName[0]}!`);
};

export default evenGames;
