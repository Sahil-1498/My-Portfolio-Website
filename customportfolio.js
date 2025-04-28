
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const navOpt = document.querySelector('.nav-opt');

        hamburger.addEventListener('click', function() {
            navOpt.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.hamburger') && !event.target.closest('.nav-opt')) {
                navOpt.classList.remove('active');
            }
        });
    });
