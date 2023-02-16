'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // kiedy nie ma liczby
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Brak liczby!';
  }
  // kiedy wygrwa
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Brawo! 🎊';
    document.querySelector('body').style.backgroundColor = '#40c057';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // kiedy za wysoko
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Za wysoko!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Przegrales';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#e03131';
    }
  }
  // kiedy za nisko
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Za nisko!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Przegrales';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#e03131';
    }
  }
});
console.log(typeof score, secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Zacznij zgadywac...';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
