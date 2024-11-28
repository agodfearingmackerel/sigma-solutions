let currentProgress = 0;
const bar = document.getElementById('progress-bar');
const heightSlider = document.getElementById('height-slider');
const sliderValue = document.getElementById('slider-value');

//increase prog bar
function progressUp() {
    currentProgress += 25;
    bar.setAttribute('aria-label', currentProgress);
    bar.style.width = currentProgress + '%'; 
    console.log(currentProgress);
}

//move to content 2 w/ fade
function moveOn() {
    const vContent = document.getElementById('v-content');
    const vContent2 = document.getElementById('v-content2');

    vContent.style.opacity = '0';
    vContent.style.transition = 'opacity 0.5s ease-out';

    setTimeout(() => {
        vContent.style.display = 'none';
        vContent2.style.display = 'block';
        
        setTimeout(() => {
            vContent2.style.opacity = '1'; 
            vContent2.style.transition = 'opacity 0.5s ease-in';
        }, 10); 
    }, 500);

    progressUp();
}

//update the value when the slider changes
heightSlider.addEventListener('input', function() {
    sliderValue.textContent = heightSlider.value;
});