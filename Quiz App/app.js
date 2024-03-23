const questions = [
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        choices: ["To check the type of a variable", "To create a new variable", "To loop over an array", "To execute a function"],
        correctAnswer: "To check the type of a variable"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["var", "let", "const", "variable"],
        correctAnswer: "var"
    },
    {
        question: "What does the 'NaN' stand for in JavaScript?",
        choices: ["New and Null", "Not a Number", "Negative and Null", "No Assignment Needed"],
        correctAnswer: "Not a Number"
    },
    {
        question: "What is the purpose of 'JSON.stringify()' in JavaScript?",
        choices: ["To parse JSON data", "To convert JavaScript objects to JSON strings", "To convert JSON strings to JavaScript objects", "To stringify JavaScript functions"],
        correctAnswer: "To convert JavaScript objects to JSON strings"
    },
    {
        question: "Which built-in method is used to add elements to the end of an array in JavaScript?",
        choices: [".push()", ".pop()", ".join()", ".concat()"],
        correctAnswer: ".push()"
    },
    {
        question: "What is the purpose of the '=== operator in JavaScript?",
        choices: ["To check if two values are equal in value and data type", "To assign a value to a variable", "To compare if two values are equal in value", "To convert a string to a number"],
        correctAnswer: "To check if two values are equal in value and data type"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseover", "onchange", "onclick", "onsubmit"],
        correctAnswer: "onclick"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        choices: ["It refers to the current function", "It refers to the global object", "It refers to the object it belongs to", "It refers to the previous function"],
        correctAnswer: "It refers to the object it belongs to"
    },
    {
        question: "Which function is used to convert a string to an integer in JavaScript?",
        choices: ["parseInt()", "parseFloat()", "stringToInt()", "toInteger()"],
        correctAnswer: "parseInt()"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        choices: ["//This is a comment", "<!--This is a comment-->", "/*This is a comment*/", "#This is a comment#"],
        correctAnswer: "//This is a comment"
    }
]


let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.textContent = questions[currentQuestionIndex].question;
    choicesElement.innerHTML = '';

    questions[currentQuestionIndex].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });

    const prevButton = document.getElementById('prevButton');
    prevButton.disabled = currentQuestionIndex === 0; // Disable the button if on the first question
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function prevQuestion(){
    currentQuestionIndex--;
    const prevButton = document.getElementById('prevButton');

        displayQuestion();
        document.getElementById('nextButton').disabled = false; // Ensure the next button is enabled

}

function endQuiz() {
    const quizElement = document.getElementById('quiz');
    const endScreenElement = document.getElementById('end-screen');
    const scoreElement = document.getElementById('score');

    quizElement.style.display = 'none';
    endScreenElement.style.display = 'block';
    scoreElement.textContent = `Your score: ${score}/${questions.length}`;
}

displayQuestion();