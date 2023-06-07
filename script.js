'use strict';
const checkbtn = document.querySelector('.check');
const againbtn = document.querySelector('.again');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
let state = true;
let currentScore = 20;
let currentHighScore = 0;
let randomNumber = Math.trunc(Math.random() * 20 + 1);
checkbtn.addEventListener('click', function () {
  if (state) {
    if (!guess.value || guess.value < 1 || guess.value > 20) {
      message.textContent = 'Incorrect Number 🚫';
    } else if (guess.value == randomNumber) {
      message.textContent = 'Correct 🎉';
      number.textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (currentScore > currentHighScore) {
        currentHighScore = currentScore;
        highscore.textContent = currentHighScore;
      }
      !state;
    } else {
      if (guess.value > randomNumber) {
        message.textContent = 'Too High 📈';
      } else {
        message.textContent = 'Too Low 📉';
      }
      currentScore--;
      score.textContent = currentScore;
      if (currentScore < 1) {
        message.textContent = 'Game Over';
        !state;
      }
    }
  }
});
againbtn.addEventListener('click', function () {
  !state;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  currentScore = 20;
  score.textContent = currentScore;
  number.textContent = '?';
  message.textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  guess.value = '';
});
