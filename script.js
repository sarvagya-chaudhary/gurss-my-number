// 'use strict';
// document.querySelector('.message').textContent = 'Congrats you are a winner';

// document.querySelector('.guess').value = 12;

// if (document.querySelector('.guess').value == 22) {
//   document.querySelector('.message').textContent = 'Score 22';
// } else {
//   document.querySelector('.message').textContent = 'Congrats you are a winner';
// }

// document.querySelector('.guess').value = 555552;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let v1 = Number(document.querySelector('.guess').value);
  // When there is no number
  if (!v1) {
    document.querySelector('.message').textContent = '⛔️ No Number';

    // When Player Wins
  } else if (v1 === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;

    // Change background colour when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Increse size of center box when player wins
    document.querySelector('.number').style.width = '30rem';

    // When you guessed lower value
  } else if (v1 < secretNumber && v1 >= 1) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😅 Try Higher Value';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥲 You Lost The Game';

      document.querySelector('.score').textContent = 0;
    }

    // When you guessed lower value
  } else if (v1 > secretNumber && v1 <= 20) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😅 Try Lower Value';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥲 You Lost The Game';

      document.querySelector('.score').textContent = 0;
    }

    // When value is out of range
  } else {
    document.querySelector('.message').textContent =
      'Please enter a number between 1️⃣ to 20 ';
  }
});

// Reset the gave values to zero

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
