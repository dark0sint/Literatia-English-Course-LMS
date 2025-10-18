// Simple client-side script for interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Example: Handle quiz submission
  const quizForm = document.getElementById('quiz-form');
  if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Quiz submitted! (In a real app, this would be processed.)');
    });
  }
});
