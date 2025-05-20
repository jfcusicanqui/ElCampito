const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

// Update active slide
function updateCarousel(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
    });
}

// Move to the next slide
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel(currentSlide);
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel(currentSlide);
});

// Click on indicators
indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.dataset.index);
        updateCarousel(currentSlide);
    });
});