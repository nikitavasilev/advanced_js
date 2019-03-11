(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

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

  const questions = [firstQuestion, secondQuestion, thirdQuestion];
  const num = Math.floor(Math.random() * questions.length);

  function displayQuestion() {
    console.log(questions[num].question);

    for (let i = 0; i < questions[num].answers.length; i++) {
      console.log(i + ': ' + questions[num].answers[i]);
    }
  }

  function checkAnswer(clientAnswer) {
    if (clientAnswer === questions[num].correct) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again :)')
    }
  }

  displayQuestion();
  let answer = parseInt(prompt('Please select the correct answer.'));
  checkAnswer(answer);
})();