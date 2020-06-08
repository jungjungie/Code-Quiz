// Start Quiz Button
var startBtn = document.querySelector("#startBtn");

// Array of Q&A
var questionArr = [
    {q1: "Which one of these is not a JavaScript data type?",
    choice1: "boolean",
    choice2: "var",
    choice3: "string",
    choice4: "undefined",
    answer: 2
    },
    {q2: "What does 'DOM' stand for?",
    choice1: "Document Object Model",
    choice2: "Direct Object Model",
    choice3: "Div Object Main",
    choice4: "Done Object Modeling",
    answer: 1 
    },
    {q3: "What does 'this' keyword refer to in JavaScript?",
    choice1: "The current variable",
    choice2: "The current website",
    choice3: "The current function",
    choice4: "The current object",
    answer: 4
    }
]

// Function to loop through Q&A array
function runQuiz() {

// make h1 disappear
// add p to display question
// add ol with li to display multiple choices
// create for loop to run through the Q&A array
// create for loop that will add each choice to each li
// create if statement to determine correct & incorrect answers
        // if incorrect, timer deducts 5 seconds & goes to next q&a
        // if correct, no impact to timer & go to next q&a
// when a multiple choice is clicked, replace the p and ol/li with next Q&A choices


var currentTime = 75;

// When start button is clicked, timer starts to countdown
var timer = setInterval(function() {
    if (currentTime > 0) {
        currentTime--; 
        document.querySelector("#countdown").textContent = currentTime;
    }
}, 1000);

}
var questionIndex = 0;





// Quiz starts to run when Start Quiz Button is clicked
startBtn.addEventListener("click",runQuiz)