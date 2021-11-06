#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import gameLogic from '../index.js';
import randomNum from '../utils.js';

const gcd = (divident, divisor) => {
  if (divisor === 0) {
    return divident;
  }

  return gcd(divisor, divident % divisor);
};
const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const randomNumber = randomNum(10, 0);
  const randomNumber2 = randomNum(10, 0);
  const question = `${randomNum(10, 0)} ${randomNum(10, 0)}`;
  const currentAnswer = `${gcd(randomNumber, randomNumber2)}`;
  return [question, currentAnswer];
};

export default () => {
  gameLogic(description, brainGcd);
};
