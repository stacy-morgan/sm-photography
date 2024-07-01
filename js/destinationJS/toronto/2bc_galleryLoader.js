// gallery_imgLoader.js

const captionText = document.getElementById('caption');

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
const b_i11btn = document.getElementById("b_i11");
const b_i12btn = document.getElementById("b_i12");
const b_i13btn = document.getElementById("b_i13");
const b_i14btn = document.getElementById("b_i14");
const b_i15btn = document.getElementById("b_i15");
const b_i16btn = document.getElementById("b_i16");

const picture_title_disp = document.getElementById("picture-title")
const picture_data_disp = document.getElementById("picture-data")

const picture_titles = [
    "Three Butterflies",
    "Butterly & Purple Flowers",
    "Yellow Striped Butterfly",
]

/*"IMG_000.JPG<br>Aperture: f/0.0<br>Shutter speed: 0/0<br>FileSize: 0 MB",*/
const picture_data = [
    "IMG_0664.JPG<br>Aperture: f/8.0<br>Shutter speed: 1/125<br>File Size: 6.3 MB",
    "IMG_0666.JPG<br>Aperture: f/7.1<br>Shutter speed: 1/100<br>File Size: 6.6 MB",
    "IMG_0676.JPG<br>Aperture: f/9.0<br>Shutter speed: 1/160<br>File Size: 7.1 MB",
    "IMG_0677.JPG<br>Aperture: f/7.1<br>Shutter speed: 1/160<br>File Size: 8.4 MB",
    "IMG_0683.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/200<br>File Size: 4.4 MB",
]

const captions = [
    "I think this is a monarch butterfly, but I don't know.",
    "Another (probably) monarch butterfly!",
    "Butterfly resting on a patch of pretty pink flowers.",
    "Three butterflies!",
    "Resting on a metal bar.",
    "Butterfly resting on a phone!",
    "Butterfly on my hand!",
    "Probably about to fly away.",
    "Getting ready to fly...",
    "The butterfly flew away :(",
    "Beautiful (possibly) grayling butterfly?",
    "Butterfly on the sign!",
    "Probably drinking some nectar or something...",
    "Trying to hide behind a leaf, perhaps?",
    "Tall butterfly!",
    "Black spotted butterfly landed on my arm!"
]
const maxImages = 16;
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
    captionText.textContent = captions[index];
    picture_data_disp.innerHTML = picture_data[index];
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

b_i10btn.addEventListener('click', function() {
    imgNum = 9;
    refreshImg();
});

b_i11btn.addEventListener('click', function() {
    imgNum = 10;
    refreshImg();
});

b_i12btn.addEventListener('click', function() {
    imgNum = 11;
    refreshImg();
});

b_i13btn.addEventListener('click', function() {
    imgNum = 12;
    refreshImg();
});

b_i14btn.addEventListener('click', function() {
    imgNum = 13;
    refreshImg();
});

b_i15btn.addEventListener('click', function() {
    imgNum = 14;
    refreshImg();
});

b_i16btn.addEventListener('click', function() {
    imgNum = 15;
    refreshImg();
});

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "toronto.html";
});

refreshImg();