// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// User Feedback Alert
const feedbackButton = document.querySelector("a[href='#feedback']");
if (feedbackButton) {
    feedbackButton.addEventListener("click", function(event) {
        event.preventDefault();
        let feedback = prompt("Please provide your feedback for LPU Food Stalls:");
        
        if (feedback) {
            alert("Thank you for your feedback!");
        } else {
            alert("No feedback entered.");
        }
    });
}
