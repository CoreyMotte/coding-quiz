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
var currentQuestionPos = 0;

var answerOne = document.getElementById("answerone");
var answerTwo = document.getElementById("answertwo");
var answerThree = document.getElementById("answerthree");
var answerFour = document.getElementById("answerfour");
var questionContainer = document.getElementById("questioncontainer");
var questionContent = document.getElementById("title");
var quizForm = document.getElementById("quizform");
var timer = document.getElementById("timeremaining");
var timeText = document.getElementById("timetext");

// decrement timer every second and update text on timer span
var handleTimer = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft.toString();

    if (timeLeft <= 0) {
        endQuiz();
        clearInterval(handleTimer);
    }
}, 1000);

// function to generate question text and buttons
function createQuestion() {
    if (currentQuestionPos < questions.length) {
        questionContent.textContent = questions[currentQuestionPos].text;

        questions[currentQuestionPos].choices.map((answer) => {
            var answerButton = document.createElement("button");
            answerButton.textContent = answer;
            quizForm.appendChild(answerButton);
            answerButton.setAttribute("value", answer);
            answerButton.setAttribute("class", "btn btn-primary");
            answerButton.addEventListener("click", answerCheck);
        });
    } else {
        endQuiz();
    }

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
        alert("Correct!");
    } else {
        timeLeft -= 10;
        alert("Incorrect!");
    }

    currentQuestionPos++;
    clearQuestion();
    createQuestion();
}

// function to end quiz, clear question/answers, and display time remaining and score
function endQuiz() {
    clearQuestion();
    console.log("You did it idiot");
    clearInterval(handleTimer);
    timeText.textContent = "You finished with " + timeLeft.toString() + " seconds remaining.";
    var completeText = document.createElement("h3");
    completeText.textContent = "Congratulations! Your final score was: " + score.toString();
    quizForm.appendChild(completeText);
    setLocalStorage();
}

function setLocalStorage () {
    var topScores = localStorage.getItem("scoreList");
    let listOfScores = topScores ? JSON.parse(topScores) : [];
    listOfScores.push({ score: score });
    localStorage.setItem("scoreList", JSON.stringify(listOfScores));
    console.log(JSON.parse(localStorage.getItem('scoreList')))
}

createQuestion();