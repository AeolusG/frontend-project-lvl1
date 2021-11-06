#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import run from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

let trueAnswer = null;

const randomProgression = () => {
  const result = [];
  result.push(generateRandomNumber(10, 0));
  let i = 1;
  const d = generateRandomNumber(10, 0);
  while (result.length < 10) {
    result.push(d + result[i - 1]);
    i += 1;
  }
  const missingNum = generateRandomNumber(9, 0);
  trueAnswer = result[missingNum];
  result[missingNum] = '..';
  return result.join(' ');
};

const makeRound = () => {
  const question = randomProgression();
  const currentAnswer = `${trueAnswer}`;
  return [question, currentAnswer];
};

export default () => {
  run(description, makeRound);
};
