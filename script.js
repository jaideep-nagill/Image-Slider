"use strict";

const btnSlideRight = document.querySelector(".slider_btn-right");
const btnSlideLeft = document.querySelector(".slider_btn-left");
const slides = document.querySelectorAll(".slide");
const dotTraverse = document.querySelector(".dots");
const dots = document.querySelectorAll(".dots_dot");
let j = 0;

dots[0].classList.add("dots_dot-active");
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const leftTraverse = function () {
	j++;
	j = j % slides.length;
	slides.forEach(
		(s, i) => (s.style.transform = `translateX(${100 * (i - j)}%)`)
	);
	dots.forEach((dot) => dot.classList.remove("dots_dot-active"));
	dots[j].classList.add("dots_dot-active");
};

const rightTraverse = function () {
	j--;
	if (j <= -1) j = 3;
	j = j % slides.length;
	slides.forEach(
		(s, i) => (s.style.transform = `translateX(${100 * (i - j)}%)`)
	);
	dots.forEach((dot) => dot.classList.remove("dots_dot-active"));
	dots[j].classList.add("dots_dot-active");
};
btnSlideRight.addEventListener("click", leftTraverse);
btnSlideLeft.addEventListener("click", rightTraverse);

dotTraverse.addEventListener("click", (e) => {
	if (!e.target.classList.contains("dots_dot")) return;
	const index = parseInt(e.target.dataset.slide);
	j = index - 1;
	slides.forEach(
		(s, i) => (s.style.transform = `translateX(${100 * (i + 1 - index)}%)`)
	);
	dots.forEach((dot) => dot.classList.remove("dots_dot-active"));
	dots[j].classList.add("dots_dot-active");
});
