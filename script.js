let currentProgress = 25;
const button = document.getElementById('progress-button');

function progressUp() {
    currentProgress += 25;
    button.setAttribute('aria-label', currentProgress)
}
