import readlineSync from 'readline-sync';
import { userName } from './cli.js';

export const numMin = 0;
export const numMax = 5;
export const numberQuestions = 3;

export const randomInteger = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const gcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

export const compareAnswer = (question, trueAnswer) => {
  console.log(`Question: ${question}`);
  const yourAnswer = getAnswer();
  if (yourAnswer === String(trueAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}' 
  Let's try again, ${userName[0]}!`);
  return false;
};
