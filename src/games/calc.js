import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, compareAnswer,
} from '../index.js';

const calcGames = (counter = 0) => {
  if (counter >= numberQuestions) {
    return console.log(`Congratulations, ${userName[0]}!`);
  }
  if (counter === 0) {
    console.log('What is the result of the expression?');
  }

  const firstOperand = randomInteger(numMin, numMax);
  const secondOperand = randomInteger(numMin, numMax);
  const operators = ['+', '-', '*'];
  const operator = randomInteger(0, operators.length - 1);
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
  return calcGames(counter + 1);
};

export default calcGames;
