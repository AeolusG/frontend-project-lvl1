#!/usr/bin/env node
import { randomNum, gameLogic } from '../src/index.js';

const description = 'What number is missing in the progression?';

let trueAnswer = null;

const randomProgression = () => {
  const result = [];
  result.push(randomNum(10, 0));
  let i = 1;
  const d = randomNum(10, 0);
  while (result.length < 10) {
    result.push(d + result[i - 1]);
    i += 1;
  }
  const missingNum = randomNum(10, 0);
  trueAnswer = result[missingNum];
  result[missingNum] = '..';
  return result.join(' ');
};

const progression = () => {
  const question = randomProgression();
  const currentAnswer = `${trueAnswer}`;
  return [question, currentAnswer];
};

export default () => {
  gameLogic(description, progression);
};
