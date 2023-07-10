var generateBtn = document.querySelector("#generate");

var timer = document.querySelector(".time");
var main = document.getElementById("#main");

var secondsLeft = 20;

var win = document.querySelector("#win");

var winCounter = 0;
var wins;
var losses;
var totalPoints = 0;

var totalQuestions = 3;
var correctAnswers = 0;

var stillPlaying = false;

var saveButton = document.getElementById("save");

function loadScores() {
  var score = JSON.parse(localStorage.getItem("score"));
  wins = score?.wins || 0;
  losses = score?.losses || 0;
}

generateBtn.addEventListener("click", setTime);

function setTime(event) {
  event.preventDefault();
  loadScores();
  stillPlaying = true;
  correctAnswers = 0;
  document.getElementById("q1").className = "show";
  document.getElementById("string").className = "show";
  var timerInterval = setInterval(function () {
    secondsLeft--;

    if (stillPlaying) {
      // put win-game logic here
      totalPoints += correctAnswers * 10;

      wins++;
    }

    timer.textContent = secondsLeft + " seconds left until game ends.";
    if (secondsLeft === 0) {
      losses++;
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 2000);
}

function updateLocalStorage() {
  var score = {
    totalPoints: totalPoints,
    initial: document.querySelector("#initial").value,
  };
  console.log(document.querySelector("#initial").value);
  console.log(totalPoints);
  localStorage.setItem("score", JSON.stringify(score));
}

function sendMessage() {
  timer.textContent = "You have run out of time. Please try again.";
}

document.querySelector(".correct1").addEventListener("click", function () {
  document.getElementById("q1").className = "hide";
  document.getElementById("string").className = "hide";
  document.getElementById("q2").className = "show";
  document.getElementById("notequal").className = "show";
  correctAnswers++;
});

document.querySelector(".wrong1").addEventListener("click", function () {
  document.getElementById("q1").className = "hide";
  document.getElementById("string").className = "hide";
  secondsLeft = secondsLeft - 5;
  document.getElementById("q2").className = "show";
  document.getElementById("notequal").className = "show";
});

document.querySelector(".wrong2").addEventListener("click", function () {
  document.getElementById("q1").className = "hide";
  document.getElementById("string").className = "hide";
  secondsLeft = secondsLeft - 5;
  document.getElementById("q2").className = "show";
  document.getElementById("notequal").className = "show";
});

document.querySelector(".correct2").addEventListener("click", function () {
  document.getElementById("q2").className = "hide";
  document.getElementById("notequal").className = "hide";
  document.getElementById("q3").className = "show";
  document.getElementById("variables").className = "show";
  correctAnswers++;
});

document.querySelector(".wrong3").addEventListener("click", function () {
  document.getElementById("q2").className = "hide";
  document.getElementById("notequal").className = "hide";
  secondsLeft = secondsLeft - 5;
  document.getElementById("q3").className = "show";
  document.getElementById("variables").className = "show";
});

document.querySelector(".wrong4").addEventListener("click", function () {
  document.getElementById("q2").className = "hide";
  document.getElementById("notequal").className = "hide";
  secondsLeft = secondsLeft - 5;
  document.getElementById("q3").className = "show";
  document.getElementById("variables").className = "show";
});

document.querySelector(".correct3").addEventListener("click", function () {
  document.getElementById("q3").className = "hide";
  document.getElementById("variables").className = "hide";
  document.getElementById("wins").className = "show";
  document.getElementById("initial").className = "show";
  correctAnswers++;
  stillPlaying = false;
});

document.querySelector(".wrong5").addEventListener("click", function () {
  document.getElementById("q3").className = "hide";
  document.getElementById("variables").className = "hide";
  secondsLeft = secondsLeft - 5;
  document.getElementById("wins").className = "show";
  document.getElementById("initial").className = "show";
});

document.querySelector(".wrong6").addEventListener("click", function () {
  document.getElementById("q3").className = "hide";
  document.getElementById("variables").className = "hide";
  secondsLeft = secondsLeft - 5;
  document.getElementById("wins").className = "show";
  document.getElementById("initial").className = "show";
});

// });

function winGame() {
  winCounter++;
  generateBtn.disabled = false;
  setWins();
}

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function getWins() {
  var storedWins = localStorage.getItem("winCount");
  if (storedWins === null) {
    winCounter = 0;
  } else {
    winCounter = storedWins;
  }
  win.textContent = winCounter;
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  updateLocalStorage();

  var userScore = {
    questionOne: true.value,
    questionTwo: true.value,
  };

  var stringyVersion = JSON.stringify(userScore);
  console.log(stringyVersion);

  localStorage.setItem("userScore", JSON.stringyVersion);
  renderMessage();
});

function renderMessage() {
  document.querySelector(".message").textContent =
    "You have a score of " + totalPoints;
}

// Done--GIVEN I am taking a code quiz
// Done--WHEN I click the start button
// Done--THEN a timer starts and I am presented with a question
// Done--WHEN I answer a question
// Done--THEN I am presented with another question
// Done--WHEN I answer a question incorrectly
// Done--THEN time is subtracted from the clock
// Done--WHEN all questions are answered or the timer reaches 0
// Done--THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
