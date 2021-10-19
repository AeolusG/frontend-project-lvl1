#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNum = () => Math.round(Math.random() * (10 - 1) + 1);
let trueAnswer = null;
const randomProgression = () => {
  const result = [];
  result.push(randomNum());
  let i = 1;
  const d = randomNum();
  while (result.length < 10) {
    result.push(d + result[i - 1]);
    i += 1;
  }
  const m = randomNum();
  trueAnswer = result[m];
  result[m] = '..';
  return result.join(' ');
};

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter < 3) {
    console.log(`Question: ${randomProgression()}`);
    const answer = readlineSync.question('Your answer: ');
    if (`${answer}` === `${trueAnswer}`) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainProgression();
