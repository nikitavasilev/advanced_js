// 1
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
};

// 2
const firstQuestion = new Question(
  'Is JavaScript the coolest programming language in the world?',
  ['Yes', 'No'],
  0
);

const secondQuestion = new Question(
  'What is the name of this course\'s teacher?',
  ['John', 'Mike', 'Jonas'],
  2
);

const thirdQuestion = new Question(
  'What does best describe coding?',
  ['Boring', 'Hard', 'Fun', 'Tedious'],
  2
);

// 3
const questions = [firstQuestion, secondQuestion, thirdQuestion];

// 4
function randomSelect(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  console.log(questions[num].question);

  for (let i = 0; i < questions[num].answers.length; i++) {
    console.log(i + ': ' + questions[num].answers[i]);
  }
}

// 5
let answer = prompt('Please select the correct answer.');

// Logs
randomSelect(0, questions.length);