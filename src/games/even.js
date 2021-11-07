#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import run from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const makeRound = () => {
  const question = generateRandomNumber(50, 0);
  const trueAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, trueAnswer];
};

export default () => {
  run(description, makeRound);
};
