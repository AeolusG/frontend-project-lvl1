#!/usr/bin/env node

import { cons, car, cdr } from '@hexlet/pairs';
import { randomNum, gameLogic } from '../src/index.js';

const description = 'What is the result of the expression?';

let i = null;

const randomOperation = () => {
  i = randomNum(2, 0);
  const operation = ['+', '-', '*'];
  return operation[i];
};

const brainCalc = () => {
  const randomNumber = randomNum(100, 0);
  const randomNumber2 = randomNum(100, 0);
  const pair = cons(randomNumber, randomNumber2);
  const expressions = [
    car(pair) + cdr(pair),
    car(pair) - cdr(pair),
    car(pair) * cdr(pair),
  ];
  const question = `${car(pair)} ${randomOperation()} ${cdr(pair)}`;
  const currentAnswer = `${expressions[i]}`;
  return [question, currentAnswer];
};

export default () => {
  gameLogic(description, brainCalc);
};
