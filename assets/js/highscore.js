// declare variables 
var highScore = document.querySelector("#highscore");
var clear = document.querySelector("#clear");
var goback = document.querySelector("#goback");

// adds eventListener to clear scores from the page
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();

});

// retrieves scores from local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

// creates list of high scores and puts highest score at the top of the list
if (allScores !== null) {
    let (var i = 0; i < allScores.length; i++) {
        var createli = document.createElement("li");
        createli.textContent = allScores[i].initials + " " + allScores[i].allScores;
        highScore.appendChild(createli);
    } 
}

// Adds Eventlistener to go back the quiz page

goback.addEventListener("click", function(){
    window.location.replace("./quiz.html")
});