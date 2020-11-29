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
    "button5": 4,
    "button6": 5
};

let currentPicture = 0;

let picture = document.querySelector("img");

window.addEventListener(onload, setInterval(nextPicture, 3000), false);

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
}