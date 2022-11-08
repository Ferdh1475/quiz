


const quizData = [
    {
        question: 'What is CSS',
        a: 'Car station state',
        b: 'Cascading style sheet',
        c: 'Cascading dom sheet',
        d: 'HTML',
        correct: 'b',
    },

    {
        question: 'Which is a programming language',
        a: 'Cascading dom sheet',
        b: 'Strong Putin',
        c: 'Car station state',
        d: 'JavaScript', 
        correct: 'd',
    },

    {
        question: 'What is HTML',
        a: 'HyperText Markup Language', 
        b: 'CSS',
        c: 'Javascript',
        d: 'Dom Bullshit',
        correct: 'a',
    },
]

const quiz = document.querySelector('.quiz-container');

const answerEls = document.querySelectorAll('.answer');

const questionEls = document.querySelector('#question');

const a_text = document.querySelector('#a_text');

const b_text = document.querySelector('#b_text');

const c_text = document.querySelector('#c_text');

const d_text = document.querySelector('#d_text');

const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

function getSelected(){
    let answer = undefined; 
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer;
}

function deselectedAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}


loadQuiz()
function loadQuiz(){
    deselectedAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEls.innerHTML  = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a; 
    b_text.innerHTML = currentQuizData.b; 
    c_text.innerHTML = currentQuizData.c; 
    d_text.innerHTML = currentQuizData.d; 
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    currentQuiz++
    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = `<h2> You answered correctly ${score}/${quizData.length} </h2> <button onclick="location.reload()"> RELOAD </button>`
    }
    }else{
        alert('pick an option')
    }
})