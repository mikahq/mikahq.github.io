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

document.addEventListener('DOMContentLoaded', () => {
            const sidePanel = document.querySelector('.side-panel');
            const sidePanelContent = document.querySelector('.side-panel-content');
            const closeBtn = document.querySelector('.close-btn');
            const clickableElements = document.querySelectorAll('.clickable-element');

            // Function to open side panel
            function openSidePanel(content) {
                sidePanelContent.innerHTML = content;
                sidePanel.classList.add('open');
            }

            // Function to close side panel
            function closeSidePanel() {
                sidePanel.classList.remove('open');
                sidePanelContent.innerHTML = '';
            }

            // Add click event to all clickable elements
            clickableElements.forEach(element => {
                element.addEventListener('click', () => {
                    // Find the full content associated with this data-text
                    const fullContent = document.querySelector(`span[data-text="${element.getAttribute('data-text')}"]`);
                    
                    if (fullContent) {
                        // If content is an image
                        if (fullContent.querySelector('img')) {
                            openSidePanel(fullContent.querySelector('img').outerHTML);
                        } 
                        // If content is text
                        else if (fullContent.querySelector('p')) {
                            openSidePanel(fullContent.querySelector('p').innerHTML);
                        }
                        // Fallback to text content
                        else {
                            openSidePanel(fullContent.textContent);
                        }
                    }
                });
            });

            // Close button functionality
            closeBtn.addEventListener('click', closeSidePanel);

            // Close side panel when clicking outside
            document.addEventListener('click', (event) => {
                if (!sidePanel.contains(event.target) && 
                    !Array.from(clickableElements).some(el => el.contains(event.target))) {
                    closeSidePanel();
                }
            });
        });

