"use strict";

let hiddenNumber = Math.trunc(Math.random() * 10 + 1);
console.log(hiddenNumber);

let score = 100;

document.querySelector(".guess").addEventListener("click", (x) => {
  const square = Number(document.querySelector(".square").value);
  console.log(square);

  // if Player selects No number //
  if (!square) {
    document.querySelector(".message").textContent = "Oops No Number!";

    document.querySelector(".message").style.color = "Yellow";

    score = score - 10;

    document.querySelector(".score").textContent = score;
  }

  // if player guesses the Right Answer //
  else if (square === hiddenNumber) {
    document.querySelector(
      ".heading"
    ).textContent = `WOW! You've Guessed it ❤️`;

    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector(".message").style.color = "white";

    document.querySelector(".game").style.background = "#60b376";

    document.querySelector("body").style.background = "#60b376";
  }
  //if selected number is Bigger than hidden number //
  else if (square > hiddenNumber) {
    document.querySelector(".message").textContent = "HINT: 📈 Too High!";

    document.querySelector(".message").style.color = "red";

    score = score - 10;

    document.querySelector(".score").textContent = score;
  }

  //if selected number is Smaller than hidden number //
  else if (square < hiddenNumber) {
    document.querySelector(".message").textContent = "HINT: 📉 Too Low!";

    document.querySelector(".message").style.color = "red";

    score = score - 10;

    document.querySelector(".score").textContent = score;
  }

  // Score will stop at 0 if player loses the game //
  if (score <= 0) {
    document.querySelector(".message").textContent = "You've Lost";
    document.querySelector(".score").textContent = "0";
  }

  /// RESET BUTTON   (when player clicks the RESET button)  ///

  document.querySelector(".reset").addEventListener("click", (x) => {
    score = 100;
    hiddenNumber = Math.trunc(Math.random() * 10 + 1);
    console.log(hiddenNumber, typeof hiddenNumber);
    document.querySelector("body").style.background = "";
    document.querySelector(".game").style.background = "#602376";
    document.querySelector(".square").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".heading").textContent = "Guess The Number ?";
    document.querySelector(".message").textContent = "Let's Guess...😋";
    document.querySelector(".message").style.color = "#000";
  });
});
