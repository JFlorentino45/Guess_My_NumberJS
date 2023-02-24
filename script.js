'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //No number typed
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    //Correct guess
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.check').style.visibility = 'hidden';
    document.querySelector('.number').style.width = '30rem';
    while (highscore < currentScore) {
      highscore = currentScore;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Guess is too high
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('body').style.backgroundColor = '#f01e2c';
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').style.display = 'none';
    }
    //Guess is too low
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('body').style.backgroundColor = '#f01e2c';
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').style.display = 'none';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').style.visibility = 'visible';
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
