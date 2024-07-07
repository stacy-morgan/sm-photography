// toronto_galleryLoader.js

document.addEventListener("DOMContentLoaded", function () {
    const maxImages = 3;
    let imgNum = 1;
    let index = 0;

    const images = document.querySelectorAll('.imgs img');

    // Display the first image on startup
    images[0].style.display = 'block';

    function refreshImg() {
        images.forEach((image, i) => {
            if (i + 1 === imgNum) {
                image.style.display = 'block';
                index = i; // Update the global index variable
            } else {
                image.style.display = 'none';
            }
        });
    }
    refreshImg();
});