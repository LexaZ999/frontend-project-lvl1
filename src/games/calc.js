import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, getRandomInteger, compareAnswer,
} from '../index.js';

const runCalcGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('What is the result of the expression?');
  }

  const firstOperand = getRandomInteger(numMin, numMax);
  const secondOperand = getRandomInteger(numMin, numMax);
  const operators = ['+', '-', '*'];
  const operator = getRandomInteger(0, operators.length - 1);
  let trueAnswer;
  let question;
  if (operator === 0) {
    question = `${firstOperand} + ${secondOperand}`;
    trueAnswer = firstOperand + secondOperand;
  }
  if (operator === 1) {
    question = `${firstOperand} - ${secondOperand}`;
    trueAnswer = firstOperand - secondOperand;
  }
  if (operator === 2) {
    question = `${firstOperand} * ${secondOperand}`;
    trueAnswer = firstOperand * secondOperand;
  }

  if (!compareAnswer(question, trueAnswer)) {
    return false;
  }
  return runCalcGames(counter + 1);
};

export default runCalcGames;
