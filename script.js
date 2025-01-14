"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
// });
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    //when the player guess too high
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
    // when the player guesses too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
