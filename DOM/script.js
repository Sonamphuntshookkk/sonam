// Refactoring codes/ rechecking the codes ###################################################

// Math.trunc() is to remove the decimal number, it doesn't around off
let randNumber = Math.trunc(Math.random() * 50) + 1;
console.log(`Random No.: ${randNumber}`);
let score = 5;
let highScore = 0;

// Method for win and lose
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = " ❌ No number!";
    displayMessage(" ❌ No number!");

    // When the guess matches
  } else if (guess === randNumber) {
    // document.querySelector(".message").textContent =
    //   "🏆 Hurray! You got the correct Number";
    displayMessage("🏆 Hurray! You got the correct Number");
    document.querySelector(".number").textContent = randNumber;
    document.querySelector(".grid-container").style.backgroundColor = "#662283";
    document.querySelector(".number").style.backgroundColor = "#16E608";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //   When guess number is not equal to random Number
  else if (guess !== randNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > randNumber
      //       ? " ⬆️ Too high! Try Lower Number"
      //       : "⬇️ Too Low! Try Higher Number";
      displayMessage(
        guess > randNumber
          ? " ⬆️ Too high! Try Lower Number"
          : "⬇️ Too Low! Try Higher Number"
      );

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = " 😭 You Lost The Game";
      displayMessage("😭 You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   // When guess number is higher than randomNumber
  //   else if (guess > randNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent =
  //         " ⬆️ Too high! Try Lower Number";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " 😭 You Lost The Game";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     // When guess number is Lower than randomNumber
  //   } else if (guess < randNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent =
  //         " ⬇️ Too Low! Try Higher Number";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " 😭 You Lost The Game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

// The method for Try Again (To Reset the page)
document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  randNumber = Math.trunc(Math.random() * 50) + 1;
  //   document.querySelector(".message").textContent = "👍 Start guessing...";
  displayMessage("👍 Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = " ";
  document.querySelector(".grid-container").style.backgroundColor = "#0C5F66";
  document.querySelector(".number").style.backgroundColor = "#A46B6EA";
});

// method refactoring the textContent on .message -------------
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
