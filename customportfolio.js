
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


    document.addEventListener('DOMContentLoaded', function() 
    {
        const projectHolder = document.querySelector('.project-holder');
        const project = document.querySelectorAll('.project');
        const leftArrowScroll = document.querySelector('.left-arow-scroll');
        const rightArrowScroll = document.querySelector('.right-arow-scroll');

        const scrollAmount = 1305;

        rightArrowScroll.addEventListener('click', () => {
            projectHolder.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            }) 
        }) ;

        leftArrowScroll.addEventListener('click', () => {
            projectHolder.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            }) 
        }) ;


        // leftScroll.style.display = 'none';

        projectHolder.addEventListener('scroll', () => {
            const atStart = projectHolder.scrollLeft === 0;
            const atEnd = projectHolder.scrollLeft + projectHolder.clientWidth >= projectHolder.scrollWidth - 1;
            //  leftScroll.style.display = atStart ? 'none' : 'block';
            //  rightScroll.style.display = atStart ? 'none' : 'block';
        }) ;


    });






    document.addEventListener('DOMContentLoaded', function() 
    {
        const exlWrks = document.querySelector('.exl-wrks');
        const exlFrame = document.querySelectorAll('.exl-frame');
        const leftScroll = document.querySelector('.left-scroll');
        const rightScroll = document.querySelector('.right-scroll');

        const scrollAmount = 1105;

        rightScroll.addEventListener('click', () => {
            exlWrks.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            }) 
        }) ;

        leftScroll.addEventListener('click', () => {
            exlWrks.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            }) 
        }) ;


        // leftScroll.style.display = 'none';

        exlWrks.addEventListener('scroll', () => {
            const atStart = exlWrks.scrollLeft === 0;
            const atEnd = exlWrks.scrollLeft + exlWrks.clientWidth >= exlWrks.scrollWidth - 1;
            //  leftScroll.style.display = atStart ? 'none' : 'block';
            //  rightScroll.style.display = atStart ? 'none' : 'block';
        }) ;


    });
