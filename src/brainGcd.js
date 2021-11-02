#!/usr/bin/env node

import { randomNum, gameLogic } from './index.js';

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
