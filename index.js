const quizData = [
  {
    question: "Which is the world’s largest flower?",
    a: "Rose",
    b: "Rafflesia",
    c: "Lily",
    d: "Sunflower",
    answer: "b",
  },
  {
    question: " How many hours are there in two days?",
    a: "23",
    b: "24",
    c: "48",
    d: "64",
    answer: "c",
  },
  {
    question: "How many months of the year have 31 days?",
    a: "3",
    b: "6",
    c: "5",
    d: "7",
    answer: "d",
  },
  {
    question: "How many bones does an adult human have?",
    a: "206",
    b: "190",
    c: "280",
    d: "360",
    answer: "a",
  },
  {
    question: "Which is the longest river on the earth?",
    a: "Nile",
    b: "Indus",
    c: "Ganges",
    d: "Amazon",
    answer: "a",
  },
];

var questionNumber = 0;
var score = 0;

function loadQuestion() {
  $(".answer").prop("checked", false);
  var currentQuestion = quizData[questionNumber];

  $(".question").html(currentQuestion.question);
  $("#optionA").html(currentQuestion.a);
  $("#optionB").html(currentQuestion.b);
  $("#optionC").html(currentQuestion.c);
  $("#optionD").html(currentQuestion.d);
}

$(".quiz_start_button").click(function () {
  $(".quiz_start_button").addClass("next_question_button");
  $(".quiz_content").show();

  var answer = $(".answer").val();

  if (answer) {
    if (answer === quizData[questionNumber].answer) {
      score++;
    }

    questionNumber++;

    if (questionNumber < quizData.length) {
      loadQuestion();
    } else {
      alert("You finished the quiz!!");
    }
  }
});
