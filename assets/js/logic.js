//Array of questions to be inserted for quiz
var questions = [
    {
        title: "Which type of values return a true of false statement?",
        choices: ["Boolean", "Empty Values", "Strings", "Numbers"],
        answer: "Boolean" 
    },
    {
        title: "Where is the link for JavaScript inserted into a Web Page?",
        choices: ["footer", "header", "top of the body", "bottom of the body"],
        answer: "bottom of the body"

    },
    
    {
        title: "Which of the following is an example of a comparison operator?",
        choices: [ "*", "&&", "!=", "?:"],
        answer: "!="
    },
    {
        title: "What happens if the tested condition is false?",
        choices: ["The code's execution will be stopped", "The code in the braces gets executed anyway","The code does nothing and moves to the next section", "The code executes the section"],
        answer: "The code does nothing and moves to the next section"
    },
    {   
        title: "What is the result of trying to reference an array member which does not exist?",
        choices: ["false", "0", "undefined", "null"],
        answer: "undefined"

    },
    {
        title: "An array has the length property, because it is:",
        choices: ["an object", "a function", "a variable", "a element"],
        answer: "an object"
    },
    {
        title: "The concat method takes two arrays and:",
        choices: ["combines them into 1 new array", "compares their members", "outputs them to the screen",
        "deletes the larger array"],
        answer: "combines them into 1 new array"             
    },
    {
        title: "In the Math Object, which of the following constants do not exist?",
        choices: ["Math.PI", "Math.E", "Math.ABC", "Math.LN10"],
        answer: "Math.ABC"
    },
    {
        title: "In the Math Object, which of the following methods is used to calculate the square root?",
        choices: ["round", "ceil", "sqrt", "root"],
        answer: "sqrt"
    },
    {
        title: "What does DOM stand for?",
        choices: ["Document Object Model", "Document Orientation Model", "Definitive Orientation Model","Definitive Object Model"],
        answer: "Document Object Model"
    }
];
// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 10 seconds per question:
var secondsLeft = 100;
// Holds interval time
var holdInterval = 0;
// penalty time for incorrect answer is 10 seconds
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -10 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

// Calculates time remaining and replaces it with score
if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;
        questionsDiv.appendChild(createP2);
    }

// Label
var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your initials: ";
questionsDiv.appendChild(createLabel);

// input
var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";
questionsDiv.appendChild(createInput);
 // submit
 var createSubmit = document.createElement("button");
 createSubmit.setAttribute("type", "submit");
 createSubmit.setAttribute("id", "Submit");
 createSubmit.textContent = "Submit";

 questionsDiv.appendChild(createSubmit);

 // Event listener to capture initials and local storage for initials and score
 createSubmit.addEventListener("click", function () {
     var initials = createInput.value;

     if (initials === null) {

         console.log("No value entered!");

     } 
        else {
         var finalScore = {
             initials: initials,
             score: timeRemaining
         }
         console.log(finalScore);
         var allScores = localStorage.getItem("allScores");
         if (allScores === null) {
             allScores = [];
         } else {
             allScores = JSON.parse(allScores);
         }
         allScores.push(finalScore);
         var newScore = JSON.stringify(allScores);
         localStorage.setItem("allScores", newScore);
         // Travels to final page
         window.location.replace("./highscore.html");
     }
 });

}
