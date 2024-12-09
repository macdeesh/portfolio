const links = document.querySelectorAll('.projects a');
const paragraphs = document.querySelectorAll('.col3 p');

// Function to handle hover effect
links.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        // Show the <p> for the hovered link
        if (paragraphs[index]) {
            paragraphs[index].classList.add('on');
            paragraphs[index].style.opacity = '1';
        }

        // Make other links and paragraphs less visible (opacity 0.2)
        links.forEach((otherLink, otherIndex) => {
            if (otherIndex !== index) {
                otherLink.style.opacity = '0.2'; // Reduce opacity of other links
            }
        });
    });

    link.addEventListener('mouseleave', () => {
        // Hide the <p> when hover ends
        if (paragraphs[index]) {
            paragraphs[index].classList.remove('on');
            paragraphs[index].style.opacity = '0'; // Make paragraph invisible
        }

        // Reset the opacity of all links and paragraphs to full visibility
        links.forEach((otherLink) => {
            otherLink.style.opacity = '1'; // Reset opacity of all links
        });

        paragraphs.forEach((p) => {
            p.style.opacity = '1'; // Reset opacity of all paragraphs
        });
    });
});
