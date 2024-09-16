const question = [
    {
        question : "Which is the Largest Animal in the World",
        answers : [
            {text : "Sharks" , correct : "false"},
            {text : "Blue Whale" , correct : "true"},
            {text : "Elephant" , correct : "false"},
            {text : "Lion" , correct : "false"}
        ]
    },
    {
        question : "Which is the Smallest Country in the World",
        answers : [
            {text : "Vacitan City" , correct : "true"},
            {text : "Bhutan" , correct : "false"},
            {text : "Nepal" , correct : "false"},
            {text : "Sri Lanka" , correct : "false"}
        ]
    },
    {
        question : "Which is the largest Desert in the World",
        answers : [
            {text : "Kalahari" , correct : "false"},
            {text : "Sahara" , correct : "false"},
            {text : "Antarctica" , correct : "true"},
            {text : "Gobi" , correct : "false"}
        ]
    },
    {
        question : "Which is the Smallest Continent in the World",
        answers : [
            {text : "Asia" , correct : "false"},
            {text : "Australia" , correct : "true"},
            {text : "Africa" , correct : "false"},
            {text : "Arctic" , correct : "false"}
        ]
    }
];


const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let curruntQuestionIndex = 0;
let score = 0;

function startQuiz(){
    curruntQuestionIndex =  0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    reset();
    let curruntQuestion = question[curruntQuestionIndex];
    let questionNumber = curruntQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ", " + curruntQuestion.question;

    curruntQuestion.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.append(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });
}

function reset(){
    nextBtn.style.display = "none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}


function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        else{
            button.disabled = true;
        }
    });
    nextBtn.style.display = "block";
}
function showScore(){
    reset();
    questionElement.innerHTML = `Your Score is ${score} out of ${question.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}


function handleNextbtn(){
    curruntQuestionIndex++;
    if(curruntQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{
    if(curruntQuestionIndex < question.length){
        handleNextbtn();
    }
    else{
        startQuiz();
    }
})
startQuiz();
