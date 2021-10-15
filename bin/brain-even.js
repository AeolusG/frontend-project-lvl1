#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const randomNumber = Math.round(Math.random() * (50 - 0) + 1);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
isEven();
