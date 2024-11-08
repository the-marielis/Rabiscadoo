let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if (count > 5) {
        count=1;
    }

document.getElementById("radio"+count).checked = true;
}

let currentIndex = 0;
let autoSlideInterval;

function moveCarousel(direction) {
    const images = document.querySelector('.slide');
    const totalImages = images.children.length;
    
    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
}

window.onload = function() {
    const images = document.querySelector('.slider');
    totalImages = images.querySelectorAll('img').length;

    startAutoSlide();

    // Adiciona eventos para parar e reiniciar o autoSlide ao passar o mouse
    const carousel = document.querySelector('.slider');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
};