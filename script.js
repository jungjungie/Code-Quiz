// Start Quiz Button
var startBtn = document.querySelector("#startBtn");

// Variables
var currentTime = 75;
var questionIndex = -1;
var score = 0;
var mcBtnArr = document.querySelectorAll(".mcBtns");
console.log(mcBtnArr);

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
    }
]

// Function to start quiz
function runQuiz() {

    // When start button is clicked, timer starts to countdown
    var timer = setInterval(function() {
        if (currentTime > 0) {
            currentTime--; 
            document.querySelector("#countdown").textContent = currentTime;
        }
    }, 1000);

    // h1 disappears
    document.querySelector("h1").style.display = "none";

    // Shows ol & li for multiple choice
    document.querySelector("#multipleChoice").style.display = "block";
    
    // Runs function to populate question
    populateQ();
}

// Function to populate questions & multiple choice
function populateQ() {
    if (currentTime > 0 && questionIndex < questionArr.length) {
        questionIndex++;
        console.log(questionIndex);
    
        // Populates question
        document.querySelector("#changingTxt").textContent = questionArr[questionIndex].q;
            
        // Populates multiple choice
        for (var i=0; i < mcBtnArr.length; i++) {
            mcBtnArr[i].textContent = questionArr[questionIndex].choices[i]
        }
    }

    // Runs function to check answer 
    checkAnswer();
}

// Function to check answer & determine next steps
function checkAnswer() {
    // if incorrect, timer deducts 5 seconds & goes to next q&a
    // if correct, no impact to timer, add score, & go to next q&a
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





// Quiz starts to run when Start Quiz Button is clicked
startBtn.addEventListener("click",runQuiz)