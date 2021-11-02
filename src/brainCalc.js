#!/usr/bin/env node

import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { randomNum, gameLogic } from '../src/index.js';

const description = 'What is the result of the expression?';

const brainCalc = () => {
  const randomNumber = randomNum(100, 0);
  const randomNumber2 = randomNum(100, 0);
  const pair = cons(randomNumber, randomNumber2);

  const operations = ['+', '-', '*'];
  const expressions = [car(pair) + cdr(pair), car(pair) - cdr(pair), car(pair) * cdr(pair)];
  for (let i = 0; i <= 3; i += 1) {
    const question = `${car(pair)} ${operations[i]} ${cdr(pair)}`;
    const currentAnswer = `${expressions[i]}`;
  }
  return [question, currentAnswer];
};

export default () => {
  gameLogic(description, brainCalc);
};
