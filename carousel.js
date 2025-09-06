document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((carousel) => {
        let slideIndex = 1;
        const slides = carousel.querySelectorAll('.carousel-slide img');
        const prev = carousel.querySelector('.prev');
        const next = carousel.querySelector('.next');

        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        if (prev && next) {
            prev.onclick = function() {
                plusSlides(-1);
            }
            next.onclick = function() {
                plusSlides(1);
            }
        }

        function autoSlides() {
            plusSlides(1);
        }

        showSlides(slideIndex);
        setInterval(autoSlides, 4000);
    });
});