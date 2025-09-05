// Set minimum date for booking to today
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    
    // Initialize hero slider
    initializeHeroSlider();
    
    // Initialize gallery slider
    initializeGallerySlider();
    
    // Initialize form validation
    initializeFormValidation();
});

// Hero Slider functionality
let currentHeroSlide = 0;
let heroInterval;

function initializeHeroSlider() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDotsContainer = document.querySelector('.hero-dots');
    
    // Create dots for each slide
    heroSlides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToHeroSlide(i);
        });
        heroDotsContainer.appendChild(dot);
    });
    
    // Add event listeners to navigation buttons
    document.querySelector('.hero-prev').addEventListener('click', () => {
        prevHeroSlide();
    });
    
    document.querySelector('.hero-next').addEventListener('click', () => {
        nextHeroSlide();
    });
    
    // Start auto-sliding
    startHeroAutoSlide();
    
    // P