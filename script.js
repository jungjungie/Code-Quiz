// Start Quiz Button
var startBtn = document.querySelector("#startBtn");

// Array of Q&A
var questionArr = [
    {q: "Which one of these is not a JavaScript data type?",
    choices: ["boolean", "var", "string", "undefined"],
    answer: "var"
    },
    {q: "What does 'DOM' stand for?",
    choices: ["Document Object Model", "Direct Object Model", "Div Object Main", "Done Object Modeling"],
    answer: "Document Object Model"
    },
    {q: "What does 'this' keyword refer to in JavaScript?",
    choices: ["The current variable", "The current website", "The current function", "The current object"],
    answer: "The current object"
    }
]

// console.log(questionArr[0].q1);
// Function to loop through Q&A array
function runQuiz() {

    var questionIndex = -1;

    // h1 disappears
    document.querySelector("h1").style.display = "none";

    // Shows ol & li for multiple choice
    document.querySelector("#multipleChoice").style.display = "block";
    
    // #changingTxt displays question
    // if(questionIndex < questionArr.length) {
    //     questionIndex = questionIndex + 1;
    //     document.querySelector("#changingTxt").textContent = questionArr[questionIndex].q;
    //     console.log(questionArr[questionIndex].q)
    // }

    for (var i=0; i < questionArr.length; i++) {
        document.querySelector("#changingTxt").textContent = questionArr[i].q;
        console.log(questionArr[i].q)
    }
     
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






// Quiz starts to run when Start Quiz Button is clicked
startBtn.addEventListener("click",runQuiz)