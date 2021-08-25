import readlineSync from 'readline-sync';

export const userName = [];
export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  userName[0] = name;
  console.log(`Hello, ${name}!`);
};
