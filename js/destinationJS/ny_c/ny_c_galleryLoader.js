// ny_c_galleryLoader.js

const captionText = document.getElementById('caption');
document.addEventListener("DOMContentLoaded", function () {

    const captions = [
        "View from the 69th floor of the Empire State Building",
        "New York skyline from Liberty Island",
        "The Statue of Liberty",
        "Stonewall National Monument",
        "New York architecture",
        "Grand Central Terminal",
        "Chicago River"
    ]
    const maxImages = 7;
    let imgNum = 1;
    let index = 0;

    const images = document.querySelectorAll('.imgs img');

    // Display the first image on startup
    images[0].style.display = 'block';

    const leftArrowBtn = document.getElementById('arrow-l');
    const rightArrowBtn = document.getElementById('arrow-r');

    leftArrowBtn.addEventListener('click', function () {
        if (imgNum > 1 && images[imgNum - 1]) {
            imgNum--;
        }
        refreshImg();
    });

    rightArrowBtn.addEventListener('click', function () {
        if (imgNum < maxImages) {
            imgNum++;
        }
        refreshImg();
    });

    function refreshImg() {
        images.forEach((image, i) => {
            if (i + 1 === imgNum) {
                image.style.display = 'block';
                index = i; // Update the global index variable
            } else {
                image.style.display = 'none';
            }
        });
        captionText.textContent = captions[index];
    }
    refreshImg();
});