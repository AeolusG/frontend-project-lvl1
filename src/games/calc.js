#!/usr/bin / env node;
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import run from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

let i = null;

const randomOperation = () => {
  i = generateRandomNumber(2, 0);
  const operation = ['+', '-', '*'];
  return operation[i];
};
let expressions = [];
const askQuestion = () => {
  const randomNumber = generateRandomNumber(100, 0);
  const randomNumber2 = generateRandomNumber(100, 0);
  expressions = [
    randomNumber + randomNumber2,
    randomNumber - randomNumber2,
    randomNumber * randomNumber2,
  ];
  return `${randomNumber} ${randomOperation()} ${randomNumber2}`;
};

const makeRound = () => {
  const question = `${askQuestion()}`;
  const trueAnswer = `${expressions[i]}`;
  return [question, trueAnswer];
};

export default () => {
  run(description, makeRound);
};
