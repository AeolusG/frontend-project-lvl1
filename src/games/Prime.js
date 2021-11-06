#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import gameLogic from '../index.js';
import randomNum from '../utils.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  let result = true;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      result = false;
    }
  }
  return result;
};
// eslint-disable-next-line operator-linebreak
const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const question = randomNum(100, 0);
  const currentAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, currentAnswer];
};
export default () => {
  gameLogic(description, brainPrime);
};
