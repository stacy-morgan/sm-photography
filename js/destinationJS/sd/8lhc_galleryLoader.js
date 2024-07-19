// 1was_galleryLoader.js

const b_i1btn = document.getElementById("b_i1");
const b_i2btn = document.getElementById("b_i2");

const picture_title_disp = document.getElementById("picture-title")

const picture_titles = [
    "Pigeon Land",
    "Sea Lion Paradise"
]


const maxImages = 2;
let imgNum = 0;
let index = 1;

const images = document.querySelectorAll('.imgs img');

    // Display the first image on startup
images[0].style.display = 'block';

function refreshImg() {
    images.forEach((image, i) => {
        if (i == imgNum) {
            image.style.display = 'block';
            index = i; // Update the global index variable
        } else {
            image.style.display = 'none';
        }
    });
    picture_title_disp.innerHTML = picture_titles[index]; 
}

b_i1btn.addEventListener('click', function() {
    imgNum = 0;
    refreshImg();
});

b_i2btn.addEventListener('click', function() {
    imgNum = 1;
    refreshImg();
});

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "../../sd.html";
});

console.log("Execute");
imgNum = 0;
refreshImg();