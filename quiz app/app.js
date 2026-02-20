const quizData = [
    {
        question: "Which of the following is an example of integration in a web system?", //1
        a: "Writing only HTML code",
        b: "Using CSS without HTML",
        c: "Connecting a website to a database",
        d: "Typing text in Notepad",
        correct: "c",
    },
    {
        question: "Which tag is used to connect an external CSS file to HTML?", //2
        a: "<style>",
        b: "<script>",
        c: "<link>",
        d: "<css>",
        correct: "c",
    },
    {
        question: "Which part of a webpage is responsible for structure, design, and interactivity (in correct order)?", //3
        a: "CSS → HTML → JavaScript",
        b: "HTML → CSS → JavaScript",
        c: "JavaScript → HTML → CSS",
        d: "CSS → JavaScript → HTML",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?", //4
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which keyword is used to declare a variable?", //5
        a: "var",
        b: "int",
        c: "string",
        d: "dim",
        correct: "a",
    },
    {
        question: "Which skill is MOST important in IPT?", //6
        a: "Memorizing syntax only",
        b: "Using one programming language only",
        c: "Understanding how technologies work together",
        d: "Typing speed",
        correct: "c",
    },
    {
        question: "What is the main goal of Integrative Programming and Technologies (IPT)?", //7
        a: "To memorize programming syntax",
        b: "To combine different technologies to build systems",
        c: "To focus only on hardware",
        d: "To avoid using databases",
        correct: "b",
    },
    {
        question: "Which technology is commonly used to connect web applications to databases?", //8
        a: "API",
        b: "Compiler",
        c: "BIOS",
        d: "Driver",
        correct: "a",
    },
    {
        question: "Which language is commonly used for backend development?", //9
        a: "HTML",
        b: "CSS",
        c: "JavaScript(Node.js)",
        d: "Photoshop",
        correct: "c",
    },
    {
        question: "Which protocol is commonly used for transferring web pages?", //10
        a: "FTP",
        b: "HTTP",
        c: "SMTP",
        d: "TCP",
        correct: "b",
    },
];

const timerEl = document.getElementById('timer')
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let timeLeft = 30
let timer 

let currentQuiz = 0
let score = 0

loadQuiz()

function startTimer() {
    timeLeft = 30
    timerEl.innerText = "Time left: " + timeLeft + "s"

    timer = setInterval(() => {
        timeLeft--
        timerEl.innerText = "Time left: " + timeLeft + "s"

        if(timeLeft === 0){
            clearInterval(timer)
            nextQuestion()
        }
    }, 1000)
}

function loadQuiz() {
    deselectAnswers()
    resetTimer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    startTimer()
}

function resetTimer(){
    clearInterval(timer)
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        clearInterval(timer)

        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        nextQuestion()
    }
})
    function nextQuestion(){

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
