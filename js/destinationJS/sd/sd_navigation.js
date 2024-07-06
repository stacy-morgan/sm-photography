const homepageBtn = document.getElementById('h1');

const t2023Btn = document.getElementById('t2023');
const event1btn = document.getElementById('event1');
const event2btn = document.getElementById('event2');
const event3btn = document.getElementById('event3');
const event4btn = document.getElementById('event4');
const backBtn = document.getElementById('backBtn');

homepageBtn.addEventListener('click', function() {
    window.location.href = "../../homepage.html";
});

event1btn.addEventListener('click', function() {
    window.location.href = "dest_subpages/toronto/1lc.html";
});

event2btn.addEventListener('click', function() {
    window.location.href = "dest_subpages/toronto/2bc.html";
});

event3btn.addEventListener('click', function() {
    window.location.href = "dest_subpages/toronto/3nf.html";
});

backBtn.addEventListener('click', function() {
    window.location.href = "../gallery.html";
});