const starRatingContainer = document.getElementById('starRating');
const feedbackInput = document.getElementById('feedbackInput'); // Corrected the ID to match your HTML
const submitButton = document.getElementById('submitFeedback');

let selectedRating = 0;

function createStar(i) {
    const star = document.createElement('i');
    star.setAttribute('data-star', i);
    star.className = 'fas fa-star';
    star.style.fontSize = '32px';
    star.style.color = '#ffc107';
    star.style.cursor = 'pointer';
    star.addEventListener('mouseover', () => highlightStars(i));
    star.addEventListener('mouseout', () => highlightStars(selectedRating));
    star.addEventListener('click', () => setRating(i));
    return star;
}

function highlightStars(num) {
    const stars = starRatingContainer.children;
    for (let i = 0; i < num; i++) {
        stars[i].style.color = '#ffac33';
    }
    for (let i = num; i < stars.length; i++) {
        stars[i].style.color = '#FDFD96';
    }
}

function setRating(num) {
    selectedRating = num;
    // Update the feedbackInput value to include the rating
    feedbackInput.value = `Rated ${num} stars!\n${feedbackInput.value}`;
}

function showAlert(message) {
    // You can replace this with a custom modal or alert for a better user experience
    alert(message);
}

// Create 5 stars and append them to the starRatingContainer
for (let i = 1; i <= 5; i++) {
    const star = createStar(i);
    starRatingContainer.appendChild(star);
}

// Event listener for the submit button
submitButton.addEventListener('click', function () {
    // Show a custom modal or alert with the appreciation message
    const appreciationMessage = `Thank you for your feedback!\nYou rated us ${selectedRating} stars.\n\nComment: ${feedbackInput.value}`;
    showAlert(appreciationMessage);

    // Redirect to homepage after the user acknowledges the message
    window.location.href = 'index.html'; // Replace with your actual homepage URL
});
