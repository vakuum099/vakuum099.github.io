"use strict"

let images = [
    ["../media/01.jpg", "Салон шин Авто-Стиль з протилежного боку проспекту імені Героїв Сталінграду."], 
    ["../media/02.jpg", "Салон шин Авто-Стиль з протилежного боку проспекту імені Героїв Сталінграду."], 
    ["../media/03.jpg", "Салон шин Авто-Стиль з боку проспекту імені Героїв Сталінграду"],
    ["../media/04.jpg", "Салон шин Авто-Стиль з тротуару"],
    ["../media/05.jpg", "Офіс відділення МСК на Нових домах"],
    ["../media/06.jpg", "Офіс відділення МСК на Нових домах впритул"],
    ["../media/07.jpg", "Салон шин Авто-Стиль з тротуару"],
    ["../media/08.jpg", "Офіс відділення МСК на Нових домах"],
    ["../media/09.jpg", "Офіс відділення МСК на Нових домах впритул"],
];

let buttonToMap = {
    "button0": 0,
    "button1": 1,
    "button2": 2,
    "button3": 3,
    "button4": 4,
    "button5": 5,
    "button6": 6,
    "button7": 7,
    "button8": 8
};

let currentPicture = 0;
let picture;
let pictureButtons;
let carousel = setInterval(nextPicture, 2000);


window.addEventListener('load', () => {
    picture = document.querySelector("img.photo");
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

