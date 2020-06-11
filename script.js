// Button Variables
var startBtn = document.querySelector("#startBtn");
var btnA = document.querySelector("#choiceA");
var btnB = document.querySelector("#choiceB");
var btnC = document.querySelector("#choiceC");
var btnD = document.querySelector("#choiceD");
var submitBtn = document.querySelector("#submitBtn");
var mainPgBtn = document.querySelector("#mainPgBtn");

// Other HTML Variables
var wrapper1 = document.querySelector("#wrapper1");
var wrapper2 = document.querySelector("#wrapper2");
var wrapper3 = document.querySelector("#wrapper3");
var wrapper4 = document.querySelector("#wrapper4");
var changingTxt = document.querySelector("#changingTxt");
var mcBtnArr = document.querySelectorAll(".mcBtns");
var result = document.querySelector("#correctOrWrong");
var scoreDiv = document.querySelector("#scoreDiv");
var finalScore = document.querySelector("#finalScore");
var username = document.querySelector("#username");

// New Variables
var currentTime = 75;
var timer = null;
var questionIndex = 0;
var scoreTable = [];
score = 0;

// Array of Q&A
var questionArr = [
    {
        q: "Which one of these is not a JavaScript data type?",
        choices: ["boolean", "var", "string", "undefined"],
        answer: "var"
    },
    {
        q: "What does 'DOM' stand for?",
        choices: ["Document Object Model", "Direct Object Model", "Div Object Main", "Done Object Modeling"],
        answer: "Document Object Model"
    },
    {
        q: "What does 'this' keyword refer to in JavaScript?",
        choices: ["The current variable", "The current website", "The current function", "The current object"],
        answer: "The current object"
    },
    {
        q: "Which of these does not mean the same thing as the others?",
        choices: ["count + 1", "count = count + 1", "count += 1", "count++"],
        answer: "count + 1"
    },
    {
        q: "__________ is used to select an element and assign it to a variable.",
        choices: [".GetThisElement()", ".getElementId()", ".setElement", ".querySelector()"],
        answer: ".querySelector()"
    },
    {
        q: "If you have an array of letters A through D, which letter is at index 1?",
        choices: ["A", "B", "C", "D"],
        answer: "B"
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

        questionIndex++;
    } 
}

// Function to check answer & determine next steps
function checkAnswer(event) {
    // If answer is correct, add to score & go to next Q&A
    if (event.target.textContent == questionArr[questionIndex].answer) {
        score += 10;
        document.querySelector("#score").textContent = score; 

        result.textContent = "Great job! That's correct!";
       
        populateQ();
    // If incorrect, timer deducts 10 seconds & goes to next Q&A
    } else {
        currentTime -= 10;

        result.textContent = "Nope. Better luck next time!";

        populateQ();
    }

    timeOut();

    // Shows commentary
    result.style.display = "block";
    // Hides commentary after 1.5 seconds
    setTimeout(function() {
        result.style.display = "none";
     }, 1500);

    // btnA = null;
    // btnB = null;
    // btnC = null;
    // btnD = null;
}

// Function to save player's name & score to localStorage
function saveScore(event) {
    event.preventDefault();

    var nameSubmitted = username.value;

    // Add name & score to scoreTable array & then clear the name entered
    scoreTable.push({Name: nameSubmitted, Scored: score});

    // Store in localStorage
    localStorage.setItem("entry", JSON.stringify(scoreTable));

    viewScores();
}

function viewScores() {

    wrapper1.style.display = "none";
    wrapper2.style.display = "none";
    wrapper3.style.display = "none";
    wrapper4.style.display = "block";

    // Retrieve from localStorage
    var showScores = JSON.parse(localStorage.getItem("entry"));
    
    // Loop through showScores array and display on screen
    if (username.value == null) {
        return;
    } 
    for (var i=0; i < showScores.length; i++) {
        var player = showScores[i].Name;
        var playerScore = showScores[i].Scored;

        var rank = i + 1;

        var p = document.createElement("p");
        p.setAttribute("class", "topscores")
        scoreDiv.appendChild(p);
        p.textContent = rank + ". " + player + " (Score: " + playerScore + ")";
    }

    username.value == null;
    questionIndex = 0;
}

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
    if (currentTime < 0 || questionIndex == questionArr.length) {
        clearInterval(timer);
        
        wrapper2.style.display = "none";
        wrapper3.style.display = "block";
        finalScore.textContent = score;
    }
}

timeOut();

// Quiz starts to run when Start Quiz Button is clicked
startBtn.addEventListener("click",runTimer);

// Adding event to multiple choice buttons
for (var i=0; i < mcBtnArr.length; i++) {
    mcBtnArr[i].addEventListener("click",checkAnswer);
}

// Save username & score when submit button clicked
submitBtn.addEventListener("click",saveScore);

// Hides Start button when quiz starts
function hideBtn() {
    if (startBtn.style.display === "block") {
      startBtn.style.display = "none";
    }  
    else {
      startBtn.style.display = "none";
    }
}

mainPgBtn.addEventListener("click", returnHome)