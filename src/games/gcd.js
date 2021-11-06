#!/usr/bin/env node
/* eslint-disable comma-dangle */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import run from '../index.js';
import generateRandomNumber from '../utils.js';

const gcd = (divident, divisor) => {
  if (divisor === 0) {
    return divident;
  }

  return gcd(divisor, divident % divisor);
};
const description = 'Find the greatest common divisor of given numbers.';

const makeRound = () => {
  const randomNumber = generateRandomNumber(10, 0);
  const randomNumber2 = generateRandomNumber(10, 0);
  const question = `${randomNumber} ${randomNumber2}`;
  const currentAnswer = `${gcd(randomNumber, randomNumber2)}`;
  return [question, currentAnswer];
};

export default () => {
  run(description, makeRound);
};
