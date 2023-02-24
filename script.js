'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const hiddenNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
const scoreNumber = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No number typed
  if (!guess) {
    displayMessage('⛔ No Number!');
    //Correct guess
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    hiddenNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.check').style.visibility = 'hidden';
    document.querySelector('.number').style.width = '30rem';
    while (highscore < currentScore) {
      highscore = currentScore;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Guess is wrong
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('body').style.backgroundColor = '#f01e2c';
      displayMessage('💥 You lost the game!');
      scoreNumber(0);
      document.querySelector('.check').style.visibility = 'hidden';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  hiddenNumber('?');
  scoreNumber(20);
  currentScore = 20;
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.visibility = 'visible';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
