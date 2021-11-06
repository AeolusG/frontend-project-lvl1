#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */

import gameLogic from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = () => {
  const question = randomNum(50, 0);
  const currentAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, currentAnswer];
};

export default () => {
  gameLogic(description, isEven);
};
