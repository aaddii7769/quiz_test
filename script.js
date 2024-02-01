// const quizData = [
//     // Easy Questions
//     {
//         question: "What does HTML stand for?",
//         options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
//         correctAnswer: "Hyper Text Markup Language",
//         difficulty: "Easy",
//         score: 2,
//         timer: 10
//     },
//     {
//         question: "Which programming language is known as the 'language of the web'?",
//         options: ["Java", "Python", "JavaScript", "C++"],
//         correctAnswer: "JavaScript",
//         difficulty: "Easy",
//         score: 2,
//         timer: 10
//     },
//     {
//         question: "What is the result of 2 + 2?",
//         options: ["3", "4", "5", "6"],
//         correctAnswer: "4",
//         difficulty: "Easy",
//         score: 2,
//         timer: 10
//     },

//     // Medium Questions
//     {
//         question: "In JavaScript, what is a closure?",
//         options: ["A way to close a webpage", "A function that has access to variables in its lexical scope, even when the function is outside that scope", "A special tag in HTML", "A type of loop"],
//         correctAnswer: "A function that has access to variables in its lexical scope, even when the function is outside that scope",
//         difficulty: "Medium",
//         score: 3,
//         timer: 15
//     },
//     {
//         question: "What does CSS stand for?",
//         options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
//         correctAnswer: "Cascading Style Sheets",
//         difficulty: "Medium",
//         score: 3,
//         timer: 15
//     },
//     {
//         question: "Which method is used to change the text of an HTML element using JavaScript?",
//         options: ["setText()", "changeText()", "innerHTML()", "replaceText()"],
//         correctAnswer: "innerHTML()",
//         difficulty: "Medium",
//         score: 3,
//         timer: 15
//     },

//     // Hard Questions
//     {
//         question: "What is the purpose of the 'localStorage' in web development?",
//         options: ["To store data for the duration of a page session", "To store data permanently", "To store data on the server", "To store temporary variables"],
//         correctAnswer: "To store data permanently",
//         difficulty: "Hard",
//         score: 5,
//         timer: 20
//     },
//     {
//         question: "What is the 'event loop' in JavaScript?",
//         options: ["A way to loop through events", "A loop that handles asynchronous callbacks", "A loop that handles user inputs", "A loop for handling CSS animations"],
//         correctAnswer: "A loop that handles asynchronous callbacks",
//         difficulty: "Hard",
//         score: 5,
//         timer: 20
//     },
//     {
//         question: "What is the purpose of the 'bind()' method in JavaScript?",
//         options: ["To create a new array", "To attach an event handler to an element", "To bind functions with a specific context", "To concatenate two strings"],
//         correctAnswer: "To bind functions with a specific context",
//         difficulty: "Hard",
//         score: 5,
//         timer: 20
//     },

    
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// let timer;

// function startQuiz() {
//     displayQuestion();
//     startTimer();

//     document.querySelector("#options").addEventListener("click", handleOptionClick);
// }

// function displayQuestion() {
//     const currentQuestion = quizData[currentQuestionIndex];

//     document.querySelector("#question").innerText = currentQuestion.question;

//     document.querySelector("#questionType").innerText = `Type: ${currentQuestion.difficulty}`;
//     document.querySelector("#marksWeightage").innerText = `Marks: ${currentQuestion.score}`;

//     const optionsContainer = document.querySelector("#options");
//     optionsContainer.innerHTML = "";

//     currentQuestion.options.forEach(option => {
//         const optionElement = document.createElement("div");
//         optionElement.classList.add("option");
//         optionElement.innerText = option;
//         optionsContainer.appendChild(optionElement);
//     });

//     document.querySelector("#score").innerText = `Score: ${score}`;
// }

// function startTimer() {
//     let secondsLeft = quizData[currentQuestionIndex].timer;

//     timer = setInterval(function () {
//         document.querySelector("#timer").innerText = `Time Left: ${secondsLeft} seconds`;

//         if (secondsLeft === 0) {
//             handleTimeout();
//         }

//         secondsLeft--;
//     }, 1000);
// }

// // function handleOptionClick(event) {
// //     clearInterval(timer);

// //     const selectedOption = event.target.innerText;
// //     const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

// //     if (selectedOption === correctAnswer) {
// //         score += quizData[currentQuestionIndex].score;
// //     } else {
// //         displayWrongAnswer();
// //     }

// //     currentQuestionIndex++;

// //     if (currentQuestionIndex < quizData.length) {
// //         setTimeout(function () {
// //             startQuiz();
// //         }, 1000);
// //     } else {
// //         displayResult();
// //     }
// // }
// function handleOptionClick(event) {
//     clearInterval(timer);

//     const selectedOption = event.target.innerText;
//     const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

//     const optionsContainer = document.querySelector("#options");

//     if (selectedOption === correctAnswer) {
//         score += quizData[currentQuestionIndex].score;
//         const correctAnswerMessage = document.createElement("div");
//         correctAnswerMessage.classList.add("correct-answer");
//         correctAnswerMessage.innerText = "Correct Answer!";
//         correctAnswerMessage.style.color = "green"; // Set text color to green
//         optionsContainer.appendChild(correctAnswerMessage);
//     } else {
//         displayWrongAnswer();
//     }

//     currentQuestionIndex++;

//     if (currentQuestionIndex < quizData.length) {
//         setTimeout(function () {
//             startQuiz();
//         }, 1000);
//     } else {
//         displayResult();
//     }
// }



// function displayWrongAnswer() {
//     const wrongAnswerMessage = document.createElement("div");
//     wrongAnswerMessage.classList.add("wrong-answer");
//     wrongAnswerMessage.innerText = "Sorry, wrong answer!";
//     wrongAnswerMessage.style.color = "red";
//     document.querySelector("#options").appendChild(wrongAnswerMessage);
// }

// function handleTimeout() {
//     clearInterval(timer);

//     const timeOutMessage = document.createElement("div");
//     timeOutMessage.classList.add("time-out");
//     timeOutMessage.innerText = "Time Out!";
//     document.querySelector("#options").appendChild(timeOutMessage);

//     currentQuestionIndex++;

//     if (currentQuestionIndex < quizData.length) {
//         setTimeout(function () {
//             startQuiz();
//         }, 1000);
//     } else {
//         displayResult();
//     }
// }

// function displayResult() {
//     document.querySelector("#question").innerText = "";
//     document.querySelector("#questionInfo").innerText = "";
//     document.querySelector("#options").innerHTML = "";
//     document.querySelector("#timer").innerText = "";
//     document.querySelector("#score").innerText = `Final Score: ${score} out of ${calculateMaxScore()}`;
// }

// function calculateMaxScore() {
//     let maxScore = 0;

//     quizData.forEach(question => {
//         maxScore += question.score;
//     });

//     return maxScore;
// }

// // function resetQuiz(event) {
// //      event.preventDefault();
// //     currentQuestionIndex = 0;
// //     score = 0;
// //     startQuiz();
// // }

// function resetQuiz() {
//     location.reload();
//     clearInterval(timer);
//     currentQuestionIndex = 0;
//     score = 0;
//     displayQuestion();
//     startTimer();
//     location.reload();
//      // setTimeout(function () {    
//     //     location.reload();
//     // }, 1000);
// }



// function submitQuiz() {
//     clearInterval(timer);
//     displayResult();
//     currentQuestionIndex = 0;
//     score = 0;
  
//     //location.reload();
//     // setTimeout(function () {
//     //     location.reload();
//     // }, 1000);
// }


// document.getElementById("resetQuiz").addEventListener("click", resetQuiz);
// document.getElementById("submitQuiz").addEventListener("click", submitQuiz);

// startQuiz();



const quizData = [
    // Easy Questions
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
        difficulty: "Easy",
        score: 2,
        timer: 10
    },
    {
        question: "Which programming language is known as the 'language of the web'?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript",
        difficulty: "Easy",
        score: 2,
        timer: 10
    },
    {
        question: "What is the result of 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
        difficulty: "Easy",
        score: 2,
        timer: 10
    },

    // Medium Questions
    {
        question: "In JavaScript, what is a closure?",
        options: ["A way to close a webpage", "A function that has access to variables in its lexical scope, even when the function is outside that scope", "A special tag in HTML", "A type of loop"],
        correctAnswer: "A function that has access to variables in its lexical scope, even when the function is outside that scope",
        difficulty: "Medium",
        score: 3,
        timer: 15
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        difficulty: "Medium",
        score: 3,
        timer: 15
    },
    {
        question: "Which method is used to change the text of an HTML element using JavaScript?",
        options: ["setText()", "changeText()", "innerHTML()", "replaceText()"],
        correctAnswer: "innerHTML()",
        difficulty: "Medium",
        score: 3,
        timer: 15
    },

    // Hard Questions
    {
        question: "What is the purpose of the 'localStorage' in web development?",
        options: ["To store data for the duration of a page session", "To store data permanently", "To store data on the server", "To store temporary variables"],
        correctAnswer: "To store data permanently",
        difficulty: "Hard",
        score: 5,
        timer: 20
    },
    {
        question: "What is the 'event loop' in JavaScript?",
        options: ["A way to loop through events", "A loop that handles asynchronous callbacks", "A loop that handles user inputs", "A loop for handling CSS animations"],
        correctAnswer: "A loop that handles asynchronous callbacks",
        difficulty: "Hard",
        score: 5,
        timer: 20
    },
    {
        question: "What is the purpose of the 'bind()' method in JavaScript?",
        options: ["To create a new array", "To attach an event handler to an element", "To bind functions with a specific context", "To concatenate two strings"],
        correctAnswer: "To bind functions with a specific context",
        difficulty: "Hard",
        score: 5,
        timer: 20
    },

    
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startQuiz() {
    displayQuestion();
    startTimer();

    document.querySelector("#options").addEventListener("click", handleOptionClick);
}

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    document.querySelector("#question").innerText = currentQuestion.question;

    document.querySelector("#questionType").innerText = `Type: ${currentQuestion.difficulty}`;
    document.querySelector("#marksWeightage").innerText = `Marks: ${currentQuestion.score}`;

    const optionsContainer = document.querySelector("#options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionsContainer.appendChild(optionElement);
    });

    document.querySelector("#score").innerText = `Score: ${score}`;
}

function startTimer() {
    let secondsLeft = quizData[currentQuestionIndex].timer;

    timer = setInterval(function () {
        document.querySelector("#timer").innerText = `Time Left: ${secondsLeft} seconds`;

        if (secondsLeft === 0) {
            handleTimeout();
        }

        secondsLeft--;
    }, 1000);
}


function handleOptionClick(event) {
    clearInterval(timer);

    const selectedOption = event.target.innerText;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    const optionsContainer = document.querySelector("#options");

    if (selectedOption === correctAnswer) {
        score += quizData[currentQuestionIndex].score;
        const correctAnswerMessage = document.createElement("div");
        correctAnswerMessage.classList.add("correct-answer");
        correctAnswerMessage.innerText = "Correct Answer!";
        correctAnswerMessage.style.color = "green"; // Set text color to green
        optionsContainer.appendChild(correctAnswerMessage);
    } else {
        displayWrongAnswer();
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(function () {
            startQuiz();
        }, 1000);
    } else {
        displayResult();
    }
}



function displayWrongAnswer() {
    const wrongAnswerMessage = document.createElement("div");
    wrongAnswerMessage.classList.add("wrong-answer");
    wrongAnswerMessage.innerText = "Sorry, wrong answer!";
    wrongAnswerMessage.style.color = "red";
    document.querySelector("#options").appendChild(wrongAnswerMessage);
}

function handleTimeout() {
    clearInterval(timer);

    const timeOutMessage = document.createElement("div");
    timeOutMessage.classList.add("time-out");
    timeOutMessage.innerText = "Time Out!";
    document.querySelector("#options").appendChild(timeOutMessage);

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(function () {
            startQuiz();
        }, 1000);
    } else {
        displayResult();
    }
}

function displayResult() {
    document.querySelector("#question").innerText = "";
    document.querySelector("#questionInfo").innerText = "";
    document.querySelector("#options").innerHTML = "";
    document.querySelector("#timer").innerText = "";
    document.querySelector("#score").innerText = `Final Score: ${score} out of ${calculateMaxScore()}`;
}

function calculateMaxScore() {
    let maxScore = 0;

    quizData.forEach(question => {
        maxScore += question.score;
    });

    return maxScore;
}



function resetQuiz() {
    location.reload();
    // startQuiz();
    clearInterval(timer);
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    startTimer();
    
    
}



function submitQuiz() {
    clearInterval(timer);
    displayResult();
    currentQuestionIndex = 0;
    score = 0;
    
}


document.getElementById("resetQuiz").addEventListener("click", resetQuiz);
document.getElementById("submitQuiz").addEventListener("click", submitQuiz);

startQuiz();