// 13gct_galleryLoader.js

const b_i1btn = document.getElementById("b_i1");
const b_i2btn = document.getElementById("b_i2");
const b_i3btn = document.getElementById("b_i3");
const b_i4btn = document.getElementById("b_i4");
const b_i5btn = document.getElementById("b_i5");
const b_i6btn = document.getElementById("b_i6");
const b_i7btn = document.getElementById("b_i7");
const b_i8btn = document.getElementById("b_i8");
const b_i9btn = document.getElementById("b_i9");
const b_i10btn = document.getElementById("b_i10");

const picture_title_disp = document.getElementById("picture-title")

const picture_titles = [
    "Grand Central Station",
    "Inside the Terminal",
    "Departures",
    "Inside the Terminal 2",
    "Overexposed Train Platform",
    "Departures 2",
    "Civil Engineering Landmark Plaque",
    "Inside the Terminal 3",
    "Chandeliers in the Terminal"
]

const maxImages = 10;
let imgNum = 0;
let index = 1;

const images = document.querySelectorAll('.imgs img');

// Display the first image on startup
images[0].style.display = 'block';

function refreshImg() {
    images.forEach((image, i) => {
        if (i === imgNum) {
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

b_i3btn.addEventListener('click', function() {
    imgNum = 2;
    refreshImg();
});

b_i4btn.addEventListener('click', function() {
    imgNum = 3;
    refreshImg();
});

b_i5btn.addEventListener('click', function() {
    imgNum = 4;
    refreshImg();
});

b_i6btn.addEventListener('click', function() {
    imgNum = 5;
    refreshImg();
});

b_i7btn.addEventListener('click', function() {
    imgNum = 6;
    refreshImg();
});

b_i8btn.addEventListener('click', function() {
    imgNum = 7;
    refreshImg();
});

b_i9btn.addEventListener('click', function() {
    imgNum = 8;
    refreshImg();
});

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "../../../gallery/ny_c.html";
});

console.log("Execute");
imgNum = 0;
refreshImg();
