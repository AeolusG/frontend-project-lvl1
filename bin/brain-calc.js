#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
    cons, car, cdr, toString, isPair,
  } from '@hexlet/pairs';

const randomNum = () => Math.round(Math.random() * (100 - 0) + 1);
const randomNum2 = () => Math.round(Math.random() * (50 - 0) + 1);

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let counter = 0;
    let randomNumber = randomNum();
    let randomNumber2 = randomNum2();
      while (counter < 3) {
        const sum = randomNumber + randomNumber2;
        console.log(`Question: ${randomNumber} + ${randomNumber2}`);
        let answer = readlineSync.question('Your answer: ');
          if(`${sum}` === `${answer}`) {
              counter += 1;
              console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}. \nLet's try again, ${userName}!`);
            break;
        }
        randomNumber = randomNum();
        randomNumber2 = randomNum2();
        const subtract = randomNumber - randomNumber2;
        console.log(`Question: ${randomNumber} - ${randomNumber2}`);
        answer = readlineSync.question('Your answer: ');
        if(`${subtract}` === `${answer}`) {
            counter += 1;
            console.log('Correct!');
      } else {
          console.log(`${answer} is wrong answer ;(. Correct answer was ${subtract}. \nLet's try again, ${userName}!`);
          break;
      }
      randomNumber = randomNum();
      randomNumber2 = randomNum2();
      const multiply = randomNumber * randomNumber2;
      console.log(`Question: ${randomNumber} * ${randomNumber2}`);
      answer = readlineSync.question('Your answer: ');

      if(`${multiply}` === `${answer}`) {
        counter += 1;
        console.log('Correct!');
  } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${multiply}. \nLet's try again, ${userName}!`);
      break;
  }
}
      if (counter === 3 ){
      console.log(`Congratulations, ${userName}!`);
      }
  }
brainCalc();