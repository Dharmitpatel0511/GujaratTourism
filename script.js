function scrollLeft() {
    document.querySelector('.spots-wrapper').scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    document.querySelector('.spots-wrapper').scrollBy({ left: 300, behavior: 'smooth' });
}