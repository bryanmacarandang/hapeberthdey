/**
 * Navigation between the 3 Crystal Pages
 */
function nextPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    const dots = document.querySelectorAll('.dot');

    pages.forEach((page, index) => {
        const id = index + 1;
        page.classList.remove('active', 'hidden', 'upcoming');

        if (id < pageNum) {
            page.classList.add('hidden');
        } else if (id === pageNum) {
            page.classList.add('active');
        } else {
            page.classList.add('upcoming');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', (index + 1) === pageNum);
    });
}

/**
 * Confetti "Shatter" Effect
 */
document.getElementById('confettiBtn').addEventListener('click', function() {
    // Colors: Crystal Blue, Nailong Yellow, Pure White
    const colors = ['#00e5ff', '#ffeb3b', '#ffffff'];
    
    // Initial big burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        scalar: 1.2
    });

    // Continuous sparkles for 3 seconds
    const end = Date.now() + (3 * 1000);

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    this.innerText = "HAPPY BIRTHDAY! ✨";
    this.style.pointerEvents = "none";
});