var readlineSync = require("readline-sync");

let score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Correctamundo!!!");
    score += 1;
  } else {
    console.log("you fail me!!!");
  }
}

play("\nA sphincter says what? ", "quite");

play("\nHow long do I live?", "Longer than you");

play("\nWill you die?", "Yes");

console.log("you scored a loser score of", score);
