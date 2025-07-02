document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselCards = document.querySelectorAll('.carousel-card');

    // Clona las tarjetas para un desplazamiento continuo
    // (Esta parte ya está manejada en el HTML duplicando las tarjetas,
    // pero si quisieras hacerlo dinámicamente con JS, sería aquí)
    const originalCardsCount = carouselCards.length / 2; // Si tienes duplicadas en HTML
    for (let i = 0; i < originalCardsCount; i++) {
         const clonedCard = carouselCards[i].cloneNode(true);
         carouselTrack.appendChild(clonedCard);
     }

    // Pausar el carrusel al pasar el mouse
    carouselTrack.addEventListener('mouseenter', () => {
        carouselTrack.style.animationPlayState = 'paused';
    });

    // Reanudar el carrusel al quitar el mouse
    carouselTrack.addEventListener('mouseleave', () => {
        carouselTrack.style.animationPlayState = 'running';
    });
});