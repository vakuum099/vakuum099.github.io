"use strict"

let images = [
    ["../images/streetview1.jpg", "Салон шин Авто-Стиль з протилежного боку проспекту імені Героїв Сталінграду."], 
    ["../images/streetview1edit_.jpg"],
    ["../images/streetview2.jpg", "Салон шин Авто-Стиль з протилежного боку проспекту імені Героїв Сталінграду."], 
    ["../images/streetview2edit_.jpg"],
    ["../images/streetview4.jpg", "Салон шин Авто-Стиль з боку проспекту імені Героїв Сталінграду"],
    ["../images/streetview4edit_.jpg"],
    ["../images/streetview5.jpg", "Салон шин Авто-Стиль з тротуару"],
    ["../images/streetview5edit_.jpg"],
    ["../images/streetview8.jpg", "Офіс відділення МСК на Нових домах"],
    ["../images/streetview8edit.jpg"],
    ["../images/streetview9.jpg", "Офіс відділення МСК на Нових домах впритул"],
    ["../images/streetview9edit_.jpg"]
];

let buttonToMap = {
    "button0": 0,
    "button1": 2,
    "button2": 4,
    "button3": 6,
    "button4": 8,
    "button5": 10
};

let currentPicture = 0;
let picture;
let pictureButtons;
let carousel = setInterval(nextPicture, 2000);


window.addEventListener('load', () => {
    picture = document.querySelector("img");
    pictureButtons = document.querySelectorAll(".howtofind > button");
    pictureButtons.forEach(el => el.addEventListener('click', handleClick, false));
    changePicture(0);
    carousel;
}, false);

function nextPicture() {
    if (currentPicture < images.length - 2) {
        currentPicture += 2;
    } else {
        currentPicture = 0;
    }
    changePicture(currentPicture);
}

function changePicture (i) {
    picture.src = images[i][0];
    picture.alt = images[i][1];
    pictureButtons.forEach(el => el.className = null);
    pictureButtons[i/2].className = "press";
    setTimeout( () =>picture.src = images[i+1][0], 500)
}

function handleClick(e) {
    let targetIndex = buttonToMap[e.target.id];
    clearInterval(carousel);
    setTimeout(() => {
        carousel = setInterval(nextPicture, 2000);
        carousel;
        console.log("timeout");
    }, 7000);
    changePicture(targetIndex);
    currentPicture = targetIndex;
}