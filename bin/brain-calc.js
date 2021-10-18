#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  cons, car, cdr, toString, isPair,
} from '@hexlet/pairs';

const randomNum = () => Math.round(Math.random() * (100 - 0) + 1);

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let counter = 0;
  let i = 0;
  while (counter < 3) {
    const randomNumber = randomNum();
    const randomNumber2 = randomNum();
    const operations = ['+', '-', '*'];
    const expression = eval(`${randomNumber} ${operations[i]} ${randomNumber2}`);
    console.log(`Question: ${randomNumber} ${operations[i]} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (`${expression}` === `${answer}`) {
      counter += 1;
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expression}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
brainCalc();
