document.addEventListener('DOMContentLoaded', function () {
    // Nouveau slider avec la classe que je vise
    const swiper = new Swiper(".mon-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 2000
        }
    });

    // Correction du code du menu
    var menu_toggle = document.querySelector('.menu_toggle');
    var menu = document.querySelector('.menu');
    var menu_toggle_span = document.querySelector('.menu_toggle span');

    menu_toggle.onclick = function () {
        menu_toggle.classList.toggle('active');
        menu_toggle_span.classList.toggle('active');
        menu.classList.toggle('responsive');
        
        let interrupteur = 0;
        function backgroundC() {
            let body = document.querySelector('body');
            if (interrupteur == 0) {
                body.style.background = 'black';
                body.style.color = 'white';
                interrupteur = 1;
            }
        }
    };

    
    backgroundC();
});