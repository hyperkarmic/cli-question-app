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

let questionOne = {
  question: "Who is John Galt",
  answer: "A twat",
};

let questionTwo = {
  question: "What is the sound of one hand clapping",
  answer: "slap",
};

let questionThree = {
  question: "Who is the god who makes the grass green",
  answer: "moo",
};

let questionFour = {
  question: "And women and Children?",
  answer: "And women and Children",
};

let questionFive = {
  question:
    "Ever fallen in love with somebody at a party you shouldn't have fallen in love with?",
  answer: "no",
};

let questions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];

for (let x = 0; x < questions.length; x++) {
  let currentQuestion = questions[x];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("you scored a loser score of", score);
