let currentProgress = 0;
const bar = document.getElementById('progress-bar');

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

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const heightSlider = document.getElementById('height-slider');
const sliderValue = document.getElementById('slider-value'); 
const button = document.getElementById('joe-launcher');

const joeImg = new Image();
joeImg.src = 'joestand.jpg'; 

const objectWidth = 200;
const objectHeight = 60;
let squareX = canvas.width / 2 - objectWidth / 2;
let squareY = 0;
let fallHeight = 0;
const gravity = 9.81 / 50;
let velocity = 0; 
let isFalling = false;

heightSlider.addEventListener('input', function() {
  sliderValue.textContent = heightSlider.value;
  fallHeight = parseFloat(heightSlider.value);

  squareY = (10 - fallHeight) * (canvas.height - objectHeight) / 10;
});

button.addEventListener('click', () => {
  if (joeImg.complete) {  
    isFalling = true;
    animateFall();
  } else {
    joeImg.onload = () => {
      isFalling = true;
      animateFall();
    };
  }
});

function animateFall() {
  if (isFalling) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(joeImg, squareX, squareY, objectWidth, objectHeight); 
    velocity += gravity;

    squareY += velocity; 

// Stop falling when it reaches the bottom
if (squareY + objectHeight >= canvas.height) { 
  squareY = canvas.height - objectHeight; // Ensure the top of Joe's image is at the bottom
  velocity = 0; // Stop velocity to prevent overshooting
  isFalling = false; // Stop the fall
} else {
  // Update position with gravity
  squareY += velocity;
  velocity += gravity; // Update velocity due to gravity
}


    requestAnimationFrame(animateFall);
  }
}
