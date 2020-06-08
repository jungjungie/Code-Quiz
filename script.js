// Start Quiz Button
var startBtn = document.querySelector("#startBtn");

// Array of Q&A
var questionArr = [
    {q1: "Which one of these is not a JavaScript data type?",
    choice1: "boolean",
    choice2: "var",
    choice3: "strings",
    choice4: "undefined",
    answer: choice2 
    },
    {q2: "What does 'DOM' stand for?",
    choice1: "Document Object Model",
    choice2: "Direct Object Model",
    choice3: "Div Object Main",
    choice4: "Done Object Modeling",
    answer: choice1 
    },
    {q3: "What does 'this' keyword refer to in JavaScript?",
    choice1: "The current variable",
    choice2: "The current website",
    choice3: "The current function",
    choice4: "The current object",
    answer: 1 
    }
]

var questionIndex = 0;

run through the array to get to each question & set of choices & answer