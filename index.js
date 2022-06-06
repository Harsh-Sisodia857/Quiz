var quizdata = [
    {
        question : "Which Framework is related to Javascript ?",
        a : ".net",
        b : "flask",
        c : "React",
        d : "django",
        correct : 'a'
    },
    {
        question : "Which is not a Programming language ?",
        a : "Python",
        b : "Java",
        c : "HTML",
        d : "Javascript",
        correct : 'c'
    },
    {
        question : "Which is not a Framework?",
        a : "angular",
        b : "Java",
        c : "React",
        d : "django",
        correct : 'b'
    },
    {
        question : "CSS stands for ?",
        a : "Cascading Style State",
        b : "Cascading Style Sheet",
        c : "Cascading Style Of State",
        d : "None of the above",
        correct : 'b'
    }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a-value')
var option_b = document.getElementById('b-value')
var option_c = document.getElementById('c-value')
var option_d = document.getElementById('d-value')

var submit_btn = document.getElementById('submit')

var currentQuestion = 0;
var quizScore = 0;
loadQuiz()

function loadQuiz()
{   
    
    deselect()
    question.innerHTML = quizdata[currentQuestion].question;
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d


}
function deselect()
{
    answer.forEach(answer=>answer.checked = false)
}
submit_btn.addEventListener('click',()=>{
    var selectedOption;
    answer.forEach(ans => {
        if(ans.checked)
        {
            selectedOption = ans.id;
        }
    })
    if(selectedOption == quizdata[currentQuestion].correct){
        quizScore = quizScore + 1;
    }
    currentQuestion = currentQuestion + 1;
    if(currentQuestion == quizdata.length)
    {
        document.getElementById('quiz').innerHTML = `<h1>Your Score is ${quizScore} out of ${currentQuestion}</h1>`
    }
    else{

        loadQuiz()
    }
})