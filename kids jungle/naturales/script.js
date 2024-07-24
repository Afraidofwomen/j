const questions = [
    {
        question: "que animal es de granja?",
        options: ["vaca", "leon", "tucan"],
        correct: "vaca"
    },
    // Agrega más preguntas aquí
    {
        question: "",
        options: ["", "", "", ""],
        correct: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        correct: ""
    }
];

function loadQuiz() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <div class="question">
            <p>${question.question}</p>
        </div>
        <ul class="options">
            ${question.options.map(option => `
                <li><label><input type="radio" name="answer" value="${option}"> ${option}</label></li>
            `).join('')}
        </ul>
    `;
}

// Cargar una pregunta al inicio
loadQuiz();