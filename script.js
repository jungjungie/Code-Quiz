// Button Variables
var startBtn = document.querySelector("#startBtn");
var btnA = document.querySelector("#choiceA");
var btnB = document.querySelector("#choiceB");
var btnC = document.querySelector("#choiceC");
var btnD = document.querySelector("#choiceD");

// Variables
var currentTime = 75;
var questionIndex = -1;
var score = 0;
var mcBtnArr = document.querySelectorAll(".mcBtns");
var result = document.querySelector("#correctOrWrong");

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

    // Timer starts to countdown
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
    
        // Populates question
        document.querySelector("#changingTxt").textContent = questionArr[questionIndex].q;
            
        // Populates multiple choice & assigns values
        for (var i=0; i < mcBtnArr.length; i++) {
            mcBtnArr[i].textContent = questionArr[questionIndex].choices[i];
        } 
    } 
    // else go to the high scores page & show final score with list of high scores
}

// Function to check answer & determine next steps
function checkAnswer(event) {
    // If answer is correct, add to score & go to next Q&A
    if (event.target.textContent == questionArr[questionIndex].answer) {
        score++;
        document.querySelector("#score").textContent = score; 

        result.textContent = "Great job! That's correct!";
       
        populateQ();
    // If incorrect, timer deducts 10 seconds & goes to next Q&A
    } else {
        currentTime -= 10;

        result.textContent = "Nope. Better luck next time!";

        populateQ();
    }

    result.style.display = "block";
    setTimeout(function() {
        result.style.display = "none";
     }, 1500);
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

// Adding event to multiple choice buttons
for (var i=0; i < mcBtnArr.length; i++) {
    mcBtnArr[i].addEventListener("click",checkAnswer)
}






// Need to add text popup for "Correct!" and "Try Again!"
// Add more to Q&A queue
// Create high score page & link to it when time is up or when all Qs answered
// When game is over, allow user to save initials and score