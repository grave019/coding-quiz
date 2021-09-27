//Array of questions for quiz
var questions = [
    {
        title: "Which type of values return a true of false statement?",
        choice: ["Boolean", "Empty Values", "Strings", "Numbers"],
        answer: "Boolean" 
    },
    {
        title: "Where is the link for JavaScript inserted into a Web Page?",
        choice: {"footer", "header", "top of the body", "bottom of the body"},
        answer: "bottom of the body"

    },
    
    {
        title: "Which of the following is an example of a comparison operator?",
        choice: [ "*", "&&", "!=", "?:"],
        answer: "!="
    },
    {
        title: "What happens if the tested condition is false?",
        choice: ["The code's execution will be stopped", "The code in the braces gets executed anyway",     "The code does nothing and moves to the next section", "The code executes the section"],
        answer: "The code does nothing and moves to the next section"
    },
    {   
        title: "What is the result of trying to reference an array member which does not exist?",
        choice: ["false", "0", "undefined", "null"],
        anwser: "undefined"

    },
    {
        title: "An array has the length property, because it is:",
        choice: ["an object", "a function", "a variable", "a element"],
        anwser: "an object"
    },
    {
        title: "The concat method takes two arrays and:",
        choice: ["combines them into 1 new array", "compares their members", "outputs them to the screen",
        "deletes the larger array"],
        answer: "combines the into 1 new array"             
    },
    {
        title: "In the Math Object, which of the following constants do not exist?",
        choice: ["Math.PI", "Math.E", "Math.ABC", "Math.LN10"],
        answer: "Math.ABC"
    },
    {
        title: "In the Math Object, which of the following methods is used to calculate the square root?",
        choice: ["round", "ceil", "sqrt", "root"],
        answer: "sqrt"
    },
    {
        title: "What does DOM stand for?",
        choice: ["Document Object Model", "Document Orientation Model", "Definitive Orientation Model","Definitive Object Model"],
        answer: "Document Object Model"
    }
];
//declared variables
var timerId;
var currentQuestionIndex = 0;
var score = 0;

//DOM elements
var wrapper = document.querySelector("#wrapper");
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#choices");

// seconds left is 15 seconds per question and 10 questions
var secondsLeft = 150;
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
                currentTime.textContent = "Sorry Time's Up!!";
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


//start the quiz
function startQuiz() {
    //hides hides start screen
    var startscreen = document.querySelector("#start-screen");
    startscreen.setAttribute("class", "hide");
    

    // shows questions
    questionsElement.removeAttribute("class");
    getcurrentQuestion();
    
}  


startBtn.addEventListener("click", startQuiz);
