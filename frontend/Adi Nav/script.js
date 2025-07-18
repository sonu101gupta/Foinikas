document.addEventListener('DOMContentLoaded', () => {
    const progressCircle = document.querySelector('.progress-ring-circle');
    const islandContainer = document.querySelector('.island-container');
    const navLinks = document.querySelector('.nav-links');
    let scrollTimeout;
    let animationFrame;
    let lastScrollTop = 0;
    const progressFill = document.querySelector('.progress-fill');
    const sections = document.querySelectorAll('.section');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Set up the progress circle
    const radius = progressCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;

    // Smooth scroll animation function
    function updateProgress() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight);
        const offset = circumference - (scrollProgress * circumference);
        
        // Only update if there's a significant change
        if (Math.abs(scrollTop - lastScrollTop) > 1) {
            progressCircle.style.strokeDashoffset = offset;
            lastScrollTop = scrollTop;
        }
        
        animationFrame = requestAnimationFrame(updateProgress);
    }

    // Start the animation
    updateProgress();

    // Clean up on scroll end
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            cancelAnimationFrame(animationFrame);
            updateProgress();
        }, 100);
    });

    // Handle hover effects
    islandContainer.addEventListener('mouseenter', () => {
        islandContainer.style.padding = '8px 24px';
        navLinks.style.opacity = '1';
        navLinks.style.width = 'auto';
    });

    islandContainer.addEventListener('mouseleave', () => {
        islandContainer.style.padding = '8px 16px';
        navLinks.style.opacity = '0';
        navLinks.style.width = '0';
    });

    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / totalHeight) * 100;
        progressFill.style.width = `${scrollPercentage}%`;
    });
}); 