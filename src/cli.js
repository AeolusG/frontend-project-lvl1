#!/usr/bin/env node
/* eslint-disable import/no-unresolved */

import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

/*
  3. Вынести приветствие в отдельный модуль&7&7&?7?7 эээ, бля
*/