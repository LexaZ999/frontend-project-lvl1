import { userName } from '../cli.js';
import {
  numMin, numMax, numberQuestions, randomInteger, getAnswer,
} from '../index.js';

const calcGames = () => {
  console.log('What is the result of the expression?');
  for (let i = 1; i <= numberQuestions; i += 1) {
    const firstOperand = randomInteger(numMin, numMax);
    const secondOperand = randomInteger(numMin, numMax);
    const operators = ['+', '-', '*'];
    const operator = randomInteger(0, operators.length - 1);
    let trueAnswer;
    if (operator === 0) {
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      trueAnswer = firstOperand + secondOperand;
    }
    if (operator === 1) {
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      trueAnswer = firstOperand - secondOperand;
    }
    if (operator === 2) {
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      trueAnswer = firstOperand * secondOperand;
    }

    const yourAnswer = getAnswer();

    if (yourAnswer === String(trueAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
    }
  }
  return console.log(`Congratulations, ${userName[0]}!`);
};

export default calcGames;
