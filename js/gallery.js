const jp_ny = document.getElementById('jp_ny');
const jp_t = document.getElementById('jp_t');
const homeBtn = document.getElementById('homeBtn')
const galleryBtn = document.getElementById('galleryBtn')
const aboutBtn = document.getElementById('aboutBtn')
const contactBtn = document.getElementById('contactBtn')

homeBtn.addEventListener('click', function() {
    window.location.href = 'homepage.html';
});

galleryBtn.addEventListener('click', function() {
    window.location.href = 'gallery.html';
});

aboutBtn.addEventListener('click', function() {
    window.location.href = 'about.html';
});

jp_ny.addEventListener('click', function() {
    window.location.href = '../site/destinations/ny_c.html'
});

jp_t.addEventListener('click', function() {
    window.location.href = '../site/destinations/ny_c.html';
});