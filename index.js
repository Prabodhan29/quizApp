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
  $(".quiz_start_button").hide();
  $(".next_question_button").show();
  $(".quiz_content").show();
  $(".start_again").hide();
  loadQuestion();
});

$(".next_question_button").click(function (e) {
  e.preventDefault();
  var correctAnswer = $('input[name="answer"]:checked').val();
  if (correctAnswer == quizData[questionNumber].answer) {
    score++;
  }

  questionNumber++;
  if (questionNumber < quizData.length) {
    loadQuestion();
  } else {
    $(".quiz_container").hide();
    $(".score").show();
    $(".score").html(
      "<h1> Your score is:  " + score + " / " + questionNumber + "</h1>"
    );
    $(".score").addClass("score_text");
    $(".start_again").show();
  }
});

$(".start_again").click(function (e) {
  e.preventDefault();
  $(".score").hide();
  location.reload();
});
