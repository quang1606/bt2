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
const quizItems = document.querySelectorAll(".quiz-item");
const random = (length) => Math.floor(Math.random() * length);
const render = () => {
    quizItems.forEach((quizItem, index) => {
        const radioInputs = quizItem.querySelectorAll(".quiz-answer-item input[type='radio']");
        if (radioInputs.length > 0) {
            radioInputs[random(radioInputs.length)].checked = true; 
        }
    });
};
btn.addEventListener("click", render);