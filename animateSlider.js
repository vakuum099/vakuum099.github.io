"use strict"

let elementsRatio = {
    start: 0,
    one: 0,
    two:0,
    three:0
};

window.addEventListener("load", () => {
    let element = {
        start: document.querySelector("#start"),
        one: document.querySelector("#one"),
        two: document.querySelector("#two"),
        three: document.querySelector("#three")
    };
    createObserver(element);
}, false)

function createObserver(element) {
    let observer;
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.5, 1]
    }

    observer = new IntersectionObserver(handleIntersect, options);

    for (let el in element) {
        observer.observe(element[el]);
    }
}

function handleIntersect(entries) {
    let sliderElements = {
        start: document.querySelector(".slider ul>li:nth-child(1)"),
        one: document.querySelector(".slider ul>li:nth-child(2)"),
        two: document.querySelector(".slider ul>li:nth-child(3)"),
        three: document.querySelector(".slider ul>li:nth-child(4)")
    };
    entries.forEach(entry => elementsRatio[entry.target.id] = entry.intersectionRatio);
    let maxRatio = nameForMax(elementsRatio);

    if (sliderElements[maxRatio].className !== "sliderBorder active"){
    classReset(sliderElements);
    setActive(sliderElements[maxRatio]);
    };
}

function classReset(sliderElements) {
    for (let el in sliderElements){
        sliderElements[el].className = "sliderBorder";
    }
}

function setActive(element) {
    element.className = "sliderBorder active";
}

function nameForMax(data) {
    let max = 0;
    let name;
    for (let el in data) {
        if (data[el] >= max) {
            max = data[el];
            name = el;
        }
    }
    return name;
}