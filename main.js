const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const btn = document.querySelector("#btn");
const quizcontainer = document.querySelector(".quiz-container");

const random = (length) => Math.floor(Math.random() * length);

const render = () => {
    let html = quizes.map(quiz => `
        <div class="quiz-item">
            <h3>Câu hỏi: ${quiz.question}</h3>
            <div class="quiz-answer">
                ${quiz.answers.map(answer => `
                    <div class="quiz-answer-item">
                        <input type="radio" name="quiz-${quiz.id}" value="${answer}">
                        <label>${answer}</label>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");

    quizcontainer.innerHTML = html;  
                };
    
   

render();

btn.addEventListener("click", function(){
    document.querySelectorAll(".quiz-item").forEach((quizItem) => {
        const radioInputs = quizItem.querySelectorAll("input[type='radio']");
        if (radioInputs.length > 0) {
            radioInputs[random(radioInputs.length)].checked = true;
        }
    });
} );
