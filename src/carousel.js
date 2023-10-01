const slider = document.querySelector(".slider");
const dots = document.querySelector(".dots_wrap");
const slide = document.querySelector(".slide");

let allDots;
let interval = 3000;
let slideWidth = slide.offsetWidth;
let sliderInterval;
let translateX = slideWidth + 40;

function genareteDots() {
  for (let i = 0; i < slider.children.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
  }
  allDots = document.querySelectorAll(".dot");
  allDots[0].classList.add("dot_active");
}

function setTranslateXWidth() {
  if (window.innerWidth > 1531) {
    translateX = Math.round(slider.offsetWidth / slider.children.length) + 60;
  } else if (window.innerWidth > 1509) {
    translateX = slideWidth + 90;
  } else {
    translateX = slideWidth + 40;
  }
}

function startSlider() {
  sliderInterval = setInterval(() => {
    slider.style.transform = `translateX(-${translateX}px)`;
    slider.style.transition = "transform 0.9s ease-in-out";
  }, interval);
}

function changeActiveDot() {
  const currentDot = document.querySelector(".dot_active");
  const nextDot = currentDot.nextElementSibling;
  const targetDot = nextDot || allDots[0];
  currentDot.classList.remove("dot_active");
  targetDot.classList.add("dot_active");
}

function handleTransitionEnd(e) {
  if (e.propertyName === "transform") {
    slider.appendChild(slider.firstElementChild);
    slider.style.transition = "none";
    slider.style.transform = "translateX(0)";
    changeActiveDot();
  }
}

function main() {
  genareteDots();
  setTranslateXWidth();
  startSlider();
  slider.addEventListener("transitionend", handleTransitionEnd);
  window.addEventListener("resize", setTranslateXWidth);
}

window.onload = main;
