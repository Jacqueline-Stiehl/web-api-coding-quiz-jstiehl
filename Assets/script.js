var generateBtn = document.querySelector("#generate");

var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until game ends.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 6000);
}

function sendMessage() {
  timeEl.textContent = "You have run out of time. Please try again.";
}

setTime();

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
