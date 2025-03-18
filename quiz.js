document.getElementById('submitBtn').addEventListener('click', function(event) {
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
                    score += 20; // Make green color brighter
                    input.parentElement.style.color = 'lime'; // Bright green color
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
    if (!allAnswered) {
        alert('Please answer all questions before submitting.');
        event.preventDefault();
    } else {
        scoreDisplay.textContent = `Total Score: ${score} / 60`;
        scoreDisplay.style.display = 'block';
    }
});
