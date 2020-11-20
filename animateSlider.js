"use strict"

let element;
let ratioStart;
let ratioOne;
let ratioTwo;
let ratioThree;

window.addEventListener("load", () => {

    element = {
        start: document.querySelector("#start"),
        one: document.querySelector("#one"),
        two: document.querySelector("#two"),
        three: document.querySelector("#three")
    }
    
    createObserver(element);
}, false)

function createObserver(element) {
    let observer;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
    }

    observer = new IntersectionObserver(handleIntersect, options);

    for (let el in element) {
        observer.observe(element[el]);
    }
}

function handleIntersect(entries, observer) {

    
    let sliderStart = document.querySelector(".slider ul>li:nth-child(1)");
    let sliderOne = document.querySelector(".slider ul>li:nth-child(2)");
    let sliderTwo = document.querySelector(".slider ul>li:nth-child(3)");
    let sliderThree = document.querySelector(".slider ul>li:nth-child(4)");

    entries.forEach(entry => {
        if (entry.target.id == "start"){
            ratioStart = entry.intersectionRatio;
        } else if (entry.target.id == "one") {
            ratioOne = entry.intersectionRatio;
        } else if (entry.target.id == "two") {
            ratioTwo = entry.intersectionRatio;
        } else if (entry.target.id == "three"){
            ratioThree = entry.intersectionRatio;
        }
    });

    if (ratioStart > 0 && ratioStart >= ratioOne) {
        if (sliderStart.className !== "sliderBorder active"){
            [sliderOne, sliderTwo, sliderThree].forEach(el => classReset(el));
            setActive(sliderStart);
        }
    } else if (ratioOne > 0 && ratioOne >= ratioTwo) {
        if (sliderOne.className !== "sliderBorder active"){
            [sliderStart, sliderTwo, sliderThree].forEach(el => classReset(el));
            setActive(sliderOne);
        }
    } else if (ratioTwo > 0 && ratioTwo >= ratioThree) {
        if (sliderTwo.className !== "sliderBorder active"){
            [sliderStart, sliderOne, sliderThree].forEach(el => classReset(el));
            setActive(sliderTwo);
        }
    } else if (ratioThree > ratioTwo) {
        if (sliderThree.className !== "sliderBorder active"){
            [sliderStart, sliderOne, sliderTwo].forEach(el => classReset(el));
            setActive(sliderThree);
        }
    }

}

function classReset(element) {
    element.className = "sliderBorder";
}
function setActive(element) {
    element.className = "sliderBorder active";
}