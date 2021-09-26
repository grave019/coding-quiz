//declared variables
var time = questions.length * 15;
var timerId;
var currentQuestionIndex = 0;
var score = 0

//DOM elements
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#choices");



//start the quiz
function startQuiz() {
    //hides hides start screen
    let startscreen = document.querySelector("#start-screen");
    startscreen.setAttribute("class", "hide")

    // shows questions
    questionsElement.removeAttribute("class");
    getcurrentQuestion();
    
}  
function getcurrentQuestion(){ 
    let = currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    let titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title
    questionChoices.textContent = "";

    for (var i = 0; i < currentQuestion.questionChoices.length; i++) {
        let choices = document.createElement("button");
        choices.setAttribute("class", "choice");
        choices.setAttribute("value", currentQuestion.choice[i]);

        choices.textContent = i + "." + currentQuestion.choice[i];
        questionChoices.appendChild(choices);

    }
}

startBtn.addEventListener("click", startQuiz);
