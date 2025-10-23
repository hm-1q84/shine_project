/* инициализация карусели отзывов   */
const carousel = document.querySelector('#reviewsCarousel');
const bsCarousel = new bootstrap.Carousel(carousel);

// обработка клика по карточке — листаем вперёд
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('click', () => {
        bsCarousel.next();
    });
});

/* инициализация карусели результатов   */
const resCarousel = document.querySelector('#resultsCarousel');
const bsRCarousel = new bootstrap.Carousel(resCarousel);

// обработка клика по карточке — листаем вперёд
document.querySelectorAll('.results__slider').forEach(card => {
    card.addEventListener('click', () => {
        bsRCarousel.next();
    });
});

// плавный скролл к секции контактов (форме оставления заявки)
function CTAscrollToContacts() {
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
}