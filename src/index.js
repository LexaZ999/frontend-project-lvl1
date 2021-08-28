import readlineSync from 'readline-sync';
import { userName } from './cli.js';

export const numMin = 0;
export const numMax = 23;
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

export const arithmeticProgression = (firstMember, difference) => {
  const arrayProgression = [firstMember];
  const lengthProgression = randomInteger(5, 10);
  let firstNumber = firstMember;
  for (let i = 1; i < lengthProgression; i += 1) {
    const subsequentMember = firstNumber + difference;
    firstNumber = subsequentMember;
    arrayProgression.push(subsequentMember);
  }
  return arrayProgression;
};

export const hideOneMember = (array) => {
  const arrayQuestion = array;
  const number = randomInteger(0, arrayQuestion.length - 1);
  const hidden = arrayQuestion[number];
  arrayQuestion[number] = '..';
  const stringQuestion = arrayQuestion.join(' ');
  const questionAnswer = [stringQuestion, hidden];

  return questionAnswer;
};

export const prime = (number) => {
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
