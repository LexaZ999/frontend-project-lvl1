import readlineSync from 'readline-sync';
import { getName, userName } from './cli.js';

const numMin = 0;
const numMax = 32;
const numberQuestions = 3;

const randomInteger = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

getName();

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
