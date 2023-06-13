$(document).ready(function() {
    // Add smooth scrolling on all links inside the navbar
    $(".navbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Use IntersectionObserver API to detect when sections come into view, add fade-in effect
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `fade-in 1s ${entry.target.dataset.delay} forwards ease-out`;
            }
        });
    });

    // Apply observer to all sections
    document.querySelectorAll('section').forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });

    // Fade-in animation css
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0px); }
        }
    `;
    document.head.appendChild(style);
});
