#!/usr/bin / env node;
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import { cons, car, cdr } from '@hexlet/pairs';
import gameLogic from '../index.js';
import randomNum from '../utils.js';

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
