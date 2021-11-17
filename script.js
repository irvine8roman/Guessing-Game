'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;

function lowerScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function gameOver() {
  document.querySelector('.message').textContent = 'Game Over';
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#CD5C5C';
}

let secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber; //Show the random number generated

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If player enters a number not within the range.
  if (!guess || guess > 20) {
    document.querySelector('.message').textContent =
      '⛔ Enter a number between 1 and 20.';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      lowerScore();
    } else {
      gameOver();
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      lowerScore();
    } else {
      gameOver();
    }
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number';
    // document.body.style.backgroundColor = '#7CFC00'; //This is the way I found out how to change the background color.
    document.querySelector('body').style.backgroundColor = '#60b347'; //This is the way the tutorial found out how to change the background color.
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

//Reset the game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
