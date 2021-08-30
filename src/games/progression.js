import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, getRandomInteger, compareAnswer, hideOneMember,
  getArithmeticProgression,
} from '../index.js';

const runProgressionGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('What number is missing in the progression?');
  }

  const questionAnswer = hideOneMember(getArithmeticProgression(getRandomInteger(numMin, numMax),
    getRandomInteger(numMin, numMax)));
  const question = questionAnswer[0];
  const trueAnswer = questionAnswer[1];

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return runProgressionGames(counter + 1);
};

export default runProgressionGames;
