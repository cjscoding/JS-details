'use strict';

const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const targetImg = document.querySelector(".targetImg");
const coordinate = document.querySelector(".coordinate");

document.addEventListener("mousemove", event => {
    const x = event.clientX;
    const y = event.clientY;

    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
    targetImg.style.top = `${y}px`;
    targetImg.style.left = `${x}px`;
    coordinate.style.top = `${y}px`;
    coordinate.style.left = `${x}px`;

    coordinate.innerHTML = `${x}, ${y}`
})