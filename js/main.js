//main.js
const homeBtn = document.getElementById('homeBtn');
const galleryBtn = document.getElementById('galleryBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const EMT = document.getElementById('4_---');

const click1 = document.getElementById('click1');

homeBtn.addEventListener('click', function() {
    window.location.href = 'homepage.html';
});

galleryBtn.addEventListener('click', function() {
    window.location.href = 'gallery.html';
});

aboutBtn.addEventListener('click', function() {
    window.location.href = 'about.html';
});

contactBtn.addEventListener('click', function() {
    window.location.href = 'contact.html';
});

EMT.addEventListener('click', function() {
    alert("EMT");
});