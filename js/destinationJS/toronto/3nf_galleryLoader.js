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

const picture_title_disp = document.getElementById("picture-title")
const picture_data_disp = document.getElementById("picture-data")

const picture_titles = [
    "Maid of the Mist",
    "Waterfall of Light",
    "Traffic Jam with a Cutoff",
    "Mini Farmland",
    "Festival",
    "Night Markets",
    "Gazebo",
    "Miniature Starbucks!"
]

/*"IMG_000.JPG<br>Aperture: f/0.0<br>Shutter speed: 0/0<br>FileSize: 0 MB",*/
const picture_data = [
    "IMG_0379.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/80<br>File Size: 7 MB",
    "IMG_0380.JPGg<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 8.4 MB",
    "IMG_0392.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/125<br>File Size: 7.7 MB",
    "IMG_0401.JPG<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 8 MB",
    "IMG_0404.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/125<br>File Size: 9 MB",
    "IMG_0412.JPG<br>Aperture: f/4.0<br>Shutter speed: 1/50<br>File Size: 8.9 MB",
    "IMG_0419.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/15<br>File Size: 7.9 MB",
    "IMG_0445.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/160<br>File Size: 5.5 MB",
    "IMG_0446.JPG<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 7.2 MB",
    "IMG_0454.JPG<br>Aperture: f/3.5<br>Shutter speed: 1/80<br>File Size: 7.9 MB",
    "IMG_0477.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/20<br>File Size: 8.1 MB",
    "IMG_0498.JPG<br>Aperture: f/7.1<br>Shutter speed: 1/160<br>File Size: 7.2 MB",
    "IMG_0512.JPG<br>Aperture: f/7.1<br>Shutter speed: 1/160<br>File Size: 8.2 MB",
    "IMG_0533.JPG<br>Aperture: f/7.1<br>Shutter speed: 1/160<br>File Size: 6.7 MB",
    "IMG_0537.JPG<br>Aperture: f/4.0<br>Shutter speed: 1/60<br>File Size: 8.7 MB",
    "IMG_0569.JPG<br>Aperture: f/5.0<br>Shutter speed: 1/100<br>File Size: 7.3 MB",
    "IMG_0597.JPG<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 7.9 MB",
    "IMG_0610.JPG<br>Aperture: f/6.3<br>Shutter speed: 1/80<br>File Size: 8.3 MB",
    "IMG_0636.JPG<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 6.7 MB",
    "IMG_0647.JPG<br>Aperture: f/3.5<br>Shutter speed: 1/60<br>File Size: 10.2 MB",
]

const captions = [
    "Beautiful Niagara Falls waterfall!",
    "Big splash of mist from the falls!",
    "Bird silhouette flying close to the water!",
    "There's a cruise going in the water!",
    "Big close-up of a nearby bird.",
    "Even birds can look majestic!",
    "View from hihger up, closer to the falls",
    "The small mini-waterfall, in Niagara Falls!",
    "Closer view of the mini-waterfall.",
]
const maxImages = 9;
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

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "../../../destinations/toronto.html";
});

refreshImg();
