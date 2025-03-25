// chatGPT Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to apply random hover colors
function applyHoverColors() {
    const spans = document.querySelectorAll('.number-container span');
    spans.forEach((span, index) => {
        const hoverColor = getRandomColor();
        span.addEventListener('mouseenter', () => {
            span.style.backgroundColor = hoverColor;
        });
        span.addEventListener('mouseleave', () => {
            span.style.backgroundColor = '';  // Reset to original color
        });
    });
}

// Apply the hover colors once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyHoverColors);




// Select the hover text display element
const hoverTextDisplay = document.getElementById('hover-text');

// Select all the span elements inside the number container
const numberSpans = document.querySelectorAll('.number-container span');

// Loop over each span and attach hover event listeners
numberSpans.forEach(span => {
    // Get the custom text from the data-text attribute of the span
    const text = span.getAttribute('data-text');

    // When mouse enters the span (hover), update the hover text display
    span.addEventListener('mouseenter', () => {
        hoverTextDisplay.textContent = text; // Set the hover text content
    });

    // When mouse leaves the span, reset the hover text display
    span.addEventListener('mouseleave', () => {
        hoverTextDisplay.textContent = "You've lived many places before today..."; // Reset text
    });
});

