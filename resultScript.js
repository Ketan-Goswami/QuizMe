document.addEventListener('DOMContentLoaded', () => {
    const scoreSpan = document.getElementById('scoreSpan');
    const retakeBtn = document.getElementById('retakeBtn');
    const homeBtn = document.getElementById('homeBtn');

    // Assuming score and totalQuestions are stored in localStorage or passed somehow
    const score = parseInt(localStorage.getItem('score')) || 0;
    const totalQuestions = parseInt(localStorage.getItem('totalQuestions')) || 0;

    scoreSpan.textContent = `${score} out of ${totalQuestions}`;

    retakeBtn.addEventListener('click', () => {
        // Clear previous quiz data if needed
        localStorage.removeItem('score');
        localStorage.removeItem('totalQuestions');
        // Redirect to topic page to start quiz again
        window.location.href = './topicPage.html';
    });

    homeBtn.addEventListener('click', () => {
        // Redirect to home page
        window.location.href = './index.html';
    });
});
