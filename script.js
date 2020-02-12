const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // create a var for auto scroll option, if true = function will run, if false function will not run
const intervalTime = 5000; // assigns time
let slideInterval; // tracks current slide

const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // check for next slide
    if(current.nextElementSibling) {
        // add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to start if at the end of slides
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // check for next slide
    if(current.previousElementSibling) {
        // add current to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to last
        slides[slides.length - 1].classList.add('current'); // since you don't know the index number input slides.length -1
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button Events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        // resets the interval back to 5 seconds if user clicks onto the next slide
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
// technically this can be created into a function and passed into the event listeners
if(auto) {
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

// ReadME
// target the slides
// target the buttons
// create a variables for auto scroll and interval time
// essentially this entire project is to create function(s) that add or remove a class name called 'current' to make images appear or disappear if button is clicked and / or when auto scroll is activated "true"
// you have to apply a class that tracks the slides
// resetting the interval prevented the slide /img (if the user clicked before 5 seconds passed) from being shown less than 5 seconds. each click ensures each slide will always have a 5 second interval re-applied upon each button click
// this project has images as background, so the imgs were implemented into the css file

// const nextSlide = function() {

// }