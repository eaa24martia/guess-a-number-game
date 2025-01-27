"use strict";

let gamerunning = true;
let min = 0;
let max = 100;
let RandomNum = Math.floor(Math.random() * (max - min)) + min;

while (gamerunning) {
  let guess = parseInt(prompt(`Guess a number between ${min} and ${max}`));

  if (guess === RandomNum) {
    alert(`Congratulations! The correct number is ${RandomNum}`);
    gamerunning = false;
  } else if (guess < RandomNum) {
    alert(`The number is too low!`);
  } else if (guess > RandomNum) {
    alert(`The number is too high!`);
  }
}
