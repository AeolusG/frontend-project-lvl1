#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
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
    const pair = cons(randomNumber, randomNumber2);
    const operations = ['+', '-', '*'];
    const expressions = [car(pair) + cdr(pair), car(pair) - cdr(pair), car(pair) * cdr(pair)];
    console.log(`Question: ${car(pair)} ${operations[i]} ${cdr(pair)}`);
    const answer = readlineSync.question('Your answer: ');
    if (`${expressions[i]}` === `${answer}`) {
      counter += 1;
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expressions[i]}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
brainCalc();
