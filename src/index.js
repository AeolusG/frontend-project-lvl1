#!/usr/bin/env node
/* eslint-disable comma-dangle */

import readlineSync from 'readline-sync';

export default (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);
  let numberOfRounds = 0;

  while (numberOfRounds < 3) {
    const [question, correctAnswer] = game();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    numberOfRounds += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
