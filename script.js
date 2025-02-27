// Add smooth scrolling to all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add any click animations or tracking here
        const button = this;
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
}); 