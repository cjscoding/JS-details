'use strict';

const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const targetImg = document.querySelector(".targetImg");
const coordinate = document.querySelector(".coordinate");
const targetRect = targetImg.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener("mousemove", event => {
    const x = event.clientX;
    const y = event.clientY;

    //DOM > CSSOM > RenderTree > layer > paint > composition 순서
    //top, left로 설정할 경우 layer와 paint를 계속 갱신해야 하기 때문에 브라우저의 성능이 떨어짐
    //composition만 갱신하는 transform으로 설정해주는 것이 더 효율적이다.
    horizontal.style.transform = `translate(0, ${y}px)`;
    vertical.style.transform = `translate(${x}px, 0)`;
    targetImg.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    coordinate.style.transform = `translate(${x + 20}px, ${y + 20}px)`;

    coordinate.innerHTML = `x : ${x}, y : ${y}`
})