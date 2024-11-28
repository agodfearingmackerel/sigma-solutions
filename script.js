let currentProgress = 0;
const bar = document.getElementById('progress-bar');
const iframe = document.querySelector('iframe');

function progressUp() {
    currentProgress += 25;
    bar.setAttribute('aria-label', currentProgress);
    bar.style.width = currentProgress + '%'; 
    console.log(currentProgress);
}

function moveOn() {
    document.getElementById('video-column').style.display = 'none';
    document.getElementById('summary-column').style.display = 'none';
}