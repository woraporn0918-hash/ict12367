const images = document.querySelectorAll('.img-container img');
const modal = document.querySelector('.modal');
const fullImage = document.querySelector('.full-image');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('open');

        
        const imgSrc = img.src.replace('small/s_', 'full/');
        fullImage.src = imgSrc;
    });
});


modal.addEventListener('click', () => {
    modal.classList.remove('open');
});