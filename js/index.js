// Event 1 - Change background of text-content
const textContent = document.querySelector("div.text-content");

textContent.addEventListener("mouseover", changeTextColor => {
    changeTextColor.target.style.color = "#4f4f4f";
});
textContent.addEventListener("mouseout", changeTextColor => {
    changeTextColor.target.style.color = "";
});

// Event 2 - Change font size of nav link
const navContent = document.querySelector("a.nav-link");

navContent.addEventListener("mouseover", changeTextSize => {
    navContent.style.fontSize = '3rem';
});

// Event 3 - Change images to circle on click
const imageRound = document.querySelector('.img-fluid');

imageRound.addEventListener('click', event => {
    imageRound.style.borderRadius = '50%';
});

// Event 4 - Change back on double click
const imageReset = document.querySelector('.img-fluid');

imageReset.addEventListener('dblclick', event => {
    imageReset.style.borderRadius = '';
});

// Event 5 - Change background color on focus
const destinationImage = document.querySelector('.content-destination');

destinationImage.addEventListener('focus', event => {
    destinationImage.style.backgroundColor = 'red';
});

// Event 6 - 


// Event 7 - 


// Event 8 - 


// Event 9 - 


// Event 10  - 

