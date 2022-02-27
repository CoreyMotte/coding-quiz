// array to hold questions, choices, and correct answers
var questions = [
    {
        text: "Insert question 1 here",
        choices: ["option1", "option2", "option3", "option4"],
        answer: "option3"
    },

    {
        text: "Insert question 2 here",
        choices: ["option", "option", "option", "option"],
        answer: "option"
    },

    {
        text: "Insert question 3 here",
        choices: ["option", "option", "option", "option"],
        answer: "option"
    },

    {
        text: "Insert question 4 here",
        choices: ["option", "option", "option", "option"],
        answer: "option"
    },
]

// declare variables for score, time
// declare variables for timer interval and current question
var score = 0;
var timeLeft = 60;
var timerInterval = 0;
var currentQuestionPos = 0;

var answerOne = document.getElementById("answerone");
var answerTwo = document.getElementById("answertwo");
var answerThree = document.getElementById("answerthree");
var answerFour = document.getElementById("answerfour");
var questionContainer = document.getElementById("questioncontainer");
var questionContent = document.getElementById("title");

var quizForm = document.getElementById("quizform");

// function to generate question text and buttons
function createQuestion() {
    questionContent.textContent = questions[currentQuestionPos].text;

    questions[currentQuestionPos].choices.map((answer) => {
        var answerButton = document.createElement("button");
        answerButton.textContent = answer;
        quizForm.appendChild(answerButton);
        answerButton.setAttribute("value", answer)
        answerButton.addEventListener("click", answerCheck);
    });  
}

// function to remove children of quizform once question is answered
function clearQuestion() {
    while (quizForm.hasChildNodes()) {
        quizForm.removeChild(quizForm.lastChild);
    }
    questionContent.textContent = '';
}

// function to check answer selected, clear the question, and generate the next question
function answerCheck(event) {
    var answer = event.target.value;
    if (answer === questions[currentQuestionPos].answer) {
        score += 25;
    } else {
        timeLeft -= 10;
    }

    currentQuestionPos++;
    clearQuestion();
    createQuestion();
    
}



createQuestion();