var generateBtn = document.querySelector("#generate");

var message = document.querySelector(".message");
var timerElement = document.querySelector(".timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var questions = [
  "Question One: Select the answer with primitive data types",
  "Question Two: What does global scope mean?",
];
var answers = [
  "boolean, string, numeric",
  "object, derived, array",
  "Occurs when you create a variable inside a function",
  "All parts of the code have access to functions in the global scope",
];

var secondsLeft = 60;

//this is called when the page loads
function init() {
  getWins();
  getlosses();
}

//this is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 60;
  //prevents start button from being clicked when game is in progress
  generateBtn.disabled = true;
  questions();
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 6000);
}

//function questions(0) {
//not sure what to add here to call first question in array
//}

function winGame() {
  message.textContent = "You won!";
  winCounter++;
  generateBtn.disabled = false;
  setWins();
}

function loseGame() {
  message.textContent = "You lost. Game over.";
  loseCounter++;
  generateBtn.disabled = false;
  setLosses();
}

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
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

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

document.addEventListener("keydown", function (event) {
  if (timerCount === 0) {
    return;
  }
});

generateBtn.addEventListener("click", startGame);

init();

var resetButton = document.querySelector(".reset-button");
function resetGame() {
  winCounter = 0;
  loseCounter = 0;

  setWins();
  setLosses();
}

resetButton.addEventListener("click", resetGame);
// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left until game ends.";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 6000);
// }

function sendMessage() {
  timeEl.textContent = "You have run out of time. Please try again.";
}

//setTime();

var saveButton = document.getElementById("save");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var userScore = {
    questionOne: true.value,
    questionTwo: true.value,
  };

  var stringyVersion = JSON.stringify(userScore);
  console.log(stringyVersion);

  localStorage.setItem("userScore", JSON.stringyVersion);
  renderMessage();
});

// function renderMessage(){
//     var scoreTotal = JSON.parse(localStorage.getItem("userScore"));
//     if (scoreTotal !== null){
//         document.querySelector(".message").textContent = "You have a score of " scoreTotal;
//     }
// }

var quizQuestions = {
  //questionOne: primitiveTypes.value,
  //questionTwo: globalScope.value,
};
console.log(quizQuestions);

//questions for quiz:
//primitive types
//iteration
//local vs global scope
//objects/this
//

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
