#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import run from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

let missingAnswer = null;

const randomProgression = () => {
  const result = [];
  result.push(generateRandomNumber(10, 0));
  const stepOfArithmeticProgression = generateRandomNumber(10, 0);
  for (let i = 1; result.length < 10; i += 1) {
    result.push(stepOfArithmeticProgression + result[i - 1]);
  }
  const missingNum = generateRandomNumber(9, 0);
  missingAnswer = result[missingNum];
  result[missingNum] = '..';
  return result.join(' ');
};

const makeRound = () => {
  const question = randomProgression();
  const trueAnswer = `${missingAnswer}`;
  return [question, trueAnswer];
};

export default () => {
  run(description, makeRound);
};
