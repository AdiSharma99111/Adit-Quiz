document.getElementById('submitBtn').addEventListener('click', submitQuiz);
document.getElementById('resetBtn').addEventListener('click', resetQuiz);

let timerDuration = 30; // Timer in seconds
let timerDisplay = document.getElementById('timerDisplay');
let timeLeft = timerDuration;

function startTimer() {
    timerDisplay.style.display = "block";
    let timer = setInterval(function() {
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            submitQuiz(); // Auto-submit on time expiry
        }
    }, 1000);
}

function submitQuiz() {
    const questions = document.querySelectorAll('.question');
    let allAnswered = true;
    let score = 0;

    const answers = {
        q1: 'd',
        q2: 'b',
        q3: 'a'
    };

    questions.forEach(question => {
        const inputs = question.querySelectorAll('input[type="radio"]');
        const questionName = inputs[0].name;
        const correctAnswer = answers[questionName];
        let answered = false;

        inputs.forEach(input => {
            if (input.checked) {
                answered = true;
                if (input.value === correctAnswer) {
                    score += 20;
                    input.parentElement.style.color = 'lime';
                } else {
                    input.parentElement.style.color = 'red';
                }
            }
        });

        if (!answered) {
            allAnswered = false;
            question.style.borderColor = 'red';
        } else {
            question.style.borderColor = 'initial';
        }
    });

    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `Total Score: ${score} / 60`;
    scoreDisplay.style.display = 'block';

    if (!allAnswered) {
        alert('Time's up! Submitting your quiz now.');
    }
}

function resetQuiz() {
    location.reload(); // Refresh the page to reset everything
}

// Start the timer when the page loads
window.onload = startTimer;
