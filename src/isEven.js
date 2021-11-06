#!/usr/bin/env node

import { randomNum, gameLogic } from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = () => {
  const question = randomNum(50, 0);
  const currentAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, currentAnswer];
};

export default () => {
  gameLogic(description, isEven);
};
