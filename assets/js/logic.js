//declared variables
var timerId;
var currentQuestionIndex = 0;
var score = 0;

//DOM elements
var wrapper = document.querySelector("#wrapper");
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#choices");

// seconds left is 15 seconds per question
var secondsLeft = questions.length * 15;
// 
var holdInterval = 0;
// penalty for incorrect answer
var penalty = 10;
// creates new element
var ulCreate = document.createElement("ul");

// creates a countdown on the button shows on the display screen counting down
timerElement.addEventListener("click", function(){
    if (holdInterval === 0) {
        holdInterval = setInterval(function(){
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's Up!";
            }
        }, 1000);
    }
    render(currentQuestionIndex)
});
// renders questions and choices to the page
function getcurrentQuestion(){ 
    var = currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    var titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title
    questionChoices.textContent = "";

    for (var i = 0; i < currentQuestion.questionChoices.length; i++) {
        var choices = document.createElement("button");
        choices.setAttribute("class", "choice");
        choices.setAttribute("value", currentQuestion.choice[i]);

        choices.textContent = i + "." + currentQuestion.choice[i];
        questionChoices.appendChild(choices);

    }
}
}

//start the quiz
function startQuiz() {
    //hides hides start screen
    let startscreen = document.querySelector("#start-screen");
    startscreen.setAttribute("class", "hide");
    

    // shows questions
    questionsElement.removeAttribute("class");
    getcurrentQuestion();
    
}  


startBtn.addEventListener("click", startQuiz);
