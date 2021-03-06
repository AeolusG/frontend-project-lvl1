#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import run from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
// eslint-disable-next-line operator-linebreak
const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeRound = () => {
  const question = generateRandomNumber(100, 0);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};
export default () => {
  run(description, makeRound);
};
