// variables to keep track of quiz
var currentQuestionsIndex = 0;
var time = questions.length * 15;
var timerId;

//variables to refrence DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialEl = document.getElementById("initial");
var feedbackEl = document.getElementById("feedback");