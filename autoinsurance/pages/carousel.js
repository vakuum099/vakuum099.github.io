"use strict"

let images = [
    ["../images/streetview1.jpg", "Салон шин Авто-Стиль з протилежного боку проспекту імені Героїв Сталінграду."], 
    ["../images/streetview2.jpg", "Салон шин Авто-Стиль з протилежного боку проспекту імені Героїв Сталінграду."],
    ["../images/streetview4.jpg", "Салон шин Авто-Стиль з боку проспекту імені Героїв Сталінграду."],
    ["../images/streetview5.jpg", "Салон шин Авто-Стиль з тротуару"],
    ["../images/streetview8.jpg", "Офіс відділення МСК на Нових домах"],
    ["../images/streetview9.jpg", "Офіс відділення МСК на Нових домах впритул"]
];

let buttonToMap = {
    "button0": 0,
    "button1": 1,
    "button2": 2,
    "button3": 3,
    "button4": 4,
    "button5": 5
};

let currentPicture = 0;
let picture;
let pictureButtons;


window.addEventListener('load', () => {
    picture = document.querySelector("img");
    pictureButtons = document.querySelectorAll(".howtofind > button");
    pictureButtons.forEach(el => el.addEventListener('click', handleClick, false));
    setInterval(nextPicture, 3000);

}, false);

function nextPicture() {
    if (currentPicture < images.length - 1) {
        currentPicture++;
    } else {
        currentPicture = 0;
    }
    changePicture(currentPicture);
}

function changePicture (i) {
    picture.src = images[i][0];
    picture.alt = images[i][1];
    pictureButtons.forEach(el => el.className = null);
    pictureButtons[i].className = "active";
}

function handleClick(e) {
    let targetIndex = buttonToMap[e.target.id];
    changePicture(targetIndex);
    currentPicture = targetIndex;
}