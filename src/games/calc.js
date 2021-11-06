#!/usr/bin / env node;
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import { cons, car, cdr } from '@hexlet/pairs';
import run from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

let i = null;

const randomOperation = () => {
  i = generateRandomNumber(2, 0);
  const operation = ['+', '-', '*'];
  return operation[i];
};

const makeRound = () => {
  const randomNumber = generateRandomNumber(100, 0);
  const randomNumber2 = generateRandomNumber(100, 0);
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
  run(description, makeRound);
};
