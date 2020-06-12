// Button Variables
var startBtn = document.querySelector("#startBtn");
var submitBtn = document.querySelector("#submitBtn");
var mainPgBtn = document.querySelector("#mainPgBtn");
var clearScoreBtn = document.querySelector("#clearScoreBtn");

// Other HTML Variables
var wrapper1 = document.querySelector("#wrapper1");
var wrapper2 = document.querySelector("#wrapper2");
var wrapper3 = document.querySelector("#wrapper3");
var wrapper4 = document.querySelector("#wrapper4");
var changingTxt = document.querySelector("#changingTxt");
var mcBtnArr = document.querySelectorAll(".mcBtns");
var result = document.querySelector("#correctOrWrong");
var scoreboard = document.querySelector("#scoreboard");
var finalScore = document.querySelector("#finalScore");
var username = document.querySelector("#username");

// New Variables
var currentTime = 75;
var timer = null;
var questionIndex = 0;
var scoreTable = [];
var score = 0;

// Array of Q&A
var questionArr = [
    {
        q: "Which one of these is not a JavaScript data type?",
        choices: ["boolean", "loop", "string", "null"],
        answer: "loop"
    },
    {
        q: "What does 'DOM' stand for?",
        choices: ["Document Object Model", "Direct Object Model", "Div Object Main", "Done Object Modeling"],
        answer: "Document Object Model"
    },
    {
        q: "What does the keyword 'this' refer to?",
        choices: ["The current variable", "The current website", "The current function", "The current object"],
        answer: "The current object"
    },
    {
        q: "Which of these does not equal the others?",
        choices: ["+1count", "count + 1", "count += 1", "count++"],
        answer: "+1count"
    },
    {
        q: "__________ is used to select an element and assign it to a variable.",
        choices: [".GetThisElement()", ".getElementId()", ".setElement", ".querySelector()"],
        answer: ".querySelector()"
    },
    {
        q: "What type of programming language is JavaScript?",
        choices: ["Front-end", "Back-end", "Full-stack", "None of the above"],
        answer: "Full-stack"
    },
    {
        q: "If you have an array of letters A through D, which letter is at index 1?",
        choices: ["A", "B", "C", "D"],
        answer: "B"
    },
    {
        q: "Which of these has the correct syntax to display 'Hello World' in an alert?",
        choices: ["alert('Hello World')", "prompt('Hello World')", "alert(Hello World)", "prompt(Hello World)"],
        answer: "alert('Hello World')"
    },
    {
        q: "Which of the following is true about JavaScript variables?",
        choices: ["Variable values cannot be overridden", "Variables only exist in the global scope", "Variable names are case sensitive", "None of the above"],
        answer: "Variable names are case sensitive"
    },
    {
        q: "When you console.log() something, where does it show up?",
        choices: ["Webpage", "Console", "Both of the above", "None of the above"],
        answer: "Console"
    }
]

wrapper2.style.display = "none";
wrapper3.style.display = "none";
wrapper4.style.display = "none";

// Function to start countdown
function runTimer() {

    if (timer == null) {
        timer = setInterval(function() {
            currentTime--; 
            document.querySelector("#countdown").textContent = currentTime;
        }, 1000);
    }

    wrapper1.style.display = "none";
    wrapper2.style.display = "block";
    
    populateQ();
}

// Function to populate questions & multiple choice
function populateQ() {
    if (currentTime > 0 && questionIndex < questionArr.length) {
        
        // Populates question
        changingTxt.textContent = questionArr[questionIndex].q;
            
        // Populates multiple choice & assigns values
        for (var i=0; i < mcBtnArr.length; i++) {
            mcBtnArr[i].textContent = questionArr[questionIndex].choices[i];
        } 
    } 
    timeOut();
}

// Function to check answer & determine next steps
function checkAnswer(event) {

    // If answer is correct, add to score & go to next Q&A
    if (event.target.textContent == questionArr[questionIndex].answer) {
        score += 10;
        document.querySelector("#score").textContent = score; 

        result.textContent = "Great job! That's correct!";
    // If incorrect, timer deducts 10 seconds & goes to next Q&A
    } else {
        currentTime -= 10;

        result.textContent = "Nope. Better luck next time!";
    }

    questionIndex++;
    populateQ();
    timeOut();

    // Show commentary (right vs. wrong) for 1 second
    result.style.display = "block";
    setTimeout(function() {
        result.style.display = "none";
     }, 1000);
}

// Function to save player's name & score to localStorage
function saveScore(event) {
    event.preventDefault();

    var nameSubmitted = username.value;

    // Add name & score to scoreTable array
    scoreTable = JSON.parse(localStorage.getItem("entry")) || [];
    scoreTable.push({Name: nameSubmitted, Scored: score});

    // Store array in localStorage
    localStorage.setItem("entry", JSON.stringify(scoreTable));

    viewScores();
}

function viewScores() {

    wrapper1.style.display = "none";
    wrapper2.style.display = "none";
    wrapper3.style.display = "none";
    wrapper4.style.display = "block";

    scoreboard.innerHTML = "";

    // Retrieve from localStorage
    scoreTable = JSON.parse(localStorage.getItem("entry"));
    
    // Loop through showScores array and display on screen
    if (scoreTable == null) {
        return;
    } else {
        for (var i=0; i < scoreTable.length; i++) {
            var player = scoreTable[i].Name;
            var playerScore = scoreTable[i].Scored;

            var rank = i + 1;

            var p = document.createElement("p");
            p.setAttribute("class", "topscores")
            scoreboard.appendChild(p);
            p.textContent = rank + ". " + player + " (Score: " + playerScore + ")";
        }
    }

    questionIndex = 0;
     clearInterval(timer);
}

// Function to go back to main page
function returnHome () {
    wrapper4.style.display = "none";
    wrapper1.style.display = "block";

    if (startBtn.style.display === "none") {
        startBtn.style.display = "block";
      }  
      else {
        startBtn.style.display = "block";
      }

    currentTime = 75;
    score = 0;
    document.querySelector("#countdown").textContent = currentTime;
    document.querySelector("#score").textContent = score; 
}

// Timer stops if it reaches 0 or if no more questions left
function timeOut() {
    if (currentTime <= 0 || questionIndex == questionArr.length) {
        clearInterval(timer);
        
        wrapper2.style.display = "none";
        wrapper3.style.display = "block";
        finalScore.textContent = score;
        return;
    }
}

timeOut();

// Event listeners
startBtn.addEventListener("click",runTimer);
mainPgBtn.addEventListener("click", returnHome)
submitBtn.addEventListener("click",saveScore);
clearScoreBtn.addEventListener("click", function() {
    localStorage.clear("entry");
    scoreboard.innerHTML = "";
})

// Event listeners for multiple choice buttons
for (var i=0; i < mcBtnArr.length; i++) {
    mcBtnArr[i].addEventListener("click",checkAnswer);
}

// Hides Start button when quiz starts
function hideBtn() {
    if (startBtn.style.display === "block") {
      startBtn.style.display = "none";
    }  
    else {
      startBtn.style.display = "none";
    }
}