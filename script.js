document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
  
            // Reset the max-height in case of window resizing
            answer.style.maxHeight = null;
  
            question.setAttribute('aria-expanded', !currentExpanded);
            if (!currentExpanded) {
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
  });