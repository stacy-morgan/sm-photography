const homepageBtn = document.getElementById('h1');

const sd2024Btn = document.getElementById('sd2024');
const event1btn = document.getElementById('event1');
const event2btn = document.getElementById('event2');
const event3btn = document.getElementById('event3');
const event4btn = document.getElementById('event4');
const backBtn = document.getElementById('backBtn');

homepageBtn.addEventListener('click', function() {
    window.location.href = "../../homepage.html";
});

event1btn.addEventListener('click', function() {
    window.location.href = "dest_subpages/sandiego/1wasd.html";
});

event2btn.addEventListener('click', function() {
    window.location.href = "dest_subpages/sandiego/2bp.html";
});

event3btn.addEventListener('click', function() {
    window.location.href = "dest_subpages/sandiego/3idf.html";
});

backBtn.addEventListener('click', function() {
    window.location.href = "../gallery.html";
});