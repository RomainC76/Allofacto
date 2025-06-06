document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.categorie img');
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    document.body.appendChild(overlay);

    const overlayImg = document.createElement('img');
    overlay.appendChild(overlayImg);

    images.forEach((img) => {
        img.addEventListener('click', () => {
            overlayImg.src = img.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});
