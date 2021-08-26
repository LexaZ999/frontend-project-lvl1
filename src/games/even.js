import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, isEven, compareAnswer,
} from '../index.js';

const evenGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  const question = randomInteger(numMin, numMax);
  const trueAnswer = (isEven(question)) ? 'yes' : 'no';

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return evenGames(counter + 1);
};

export default evenGames;
