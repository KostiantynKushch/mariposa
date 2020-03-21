const hamburger = document.querySelector(".ba-hamburger");
const navLinks = document.querySelector(".ba-navigation-list");
const links = document.querySelector("ba-navigation-list a");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("ba-open");
	hamburger.classList.toggle("ba-open");
	body.classList.toggle("ba-opened-menu");
});