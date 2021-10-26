#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNum = () => Math.round(Math.random() * (100 - 1) + 1);
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  let result = true;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      result = false;
    }
  }
  return result;
};

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const randomNumber = randomNum();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPrime(randomNumber) && answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (isPrime(randomNumber) === true && answer === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (isPrime(randomNumber) === false && answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else if (isPrime(randomNumber) === false && answer === 'yes') {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

brainPrime();
