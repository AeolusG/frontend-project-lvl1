#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  if (a > b && a % b === 0) {
    return b;
  } if (b > a && b % a === 0) {
    return a;
  }
  let n = a;
  let m = b;
  while (n !== 0 && m !== 0) {
    if (n > m) {
      n %= m;
    } else {
      m %= n;
    }
  }
  return m + n;
};

const greatestCommonDivisor = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter < 3) {
    const randomNum = () => Math.round(Math.random() * (10 - 0) + 1);
    const randomNumber = randomNum();
    const randomNumber2 = randomNum();
    console.log(`Question: ${randomNumber} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (`${answer}` === `${gcd(randomNumber, randomNumber2)}`) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd(randomNumber, randomNumber2)}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
greatestCommonDivisor();
