// 9sol_galleryLoader.js

const b_i1btn = document.getElementById("b_i1");
const b_i2btn = document.getElementById("b_i2");
const b_i3btn = document.getElementById("b_i3");

const picture_title_disp = document.getElementById("picture-title")
const picture_data_disp = document.getElementById("picture-data")

const picture_titles = [
    "Maid of the Mist",
    "Waterfall of Light",
    "Traffic Jam with a Cutoff",
    "Mini Farmland",
    "Festival",
]

/*"IMG_000.JPG<br>Aperture: f/0.0<br>Shutter speed: 0/0<br>FileSize: 0 MB",*/
const picture_data = [
    "IMG_0379.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/80<br>File Size: 7 MB",
    "IMG_0380.JPGg<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 8.4 MB",
    "IMG_0392.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/125<br>File Size: 7.7 MB",
    "IMG_0401.JPG<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 8 MB",
    "IMG_0404.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/125<br>File Size: 9 MB",
]

const maxImages = 3;
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

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "../../../destinations/ny_c.html";
});

refreshImg();
