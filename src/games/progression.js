import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, compareAnswer, hideOneMember,
  arithmeticProgression,
} from '../index.js';

const progressionGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('What number is missing in the progression?');
  }

  const questionAnswer = hideOneMember(arithmeticProgression(randomInteger(numMin, numMax),
    randomInteger(numMin, numMax)));
  const question = questionAnswer[0];
  const trueAnswer = questionAnswer[1];

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return progressionGames(counter + 1);
};

export default progressionGames;
