"use strict";

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];
for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

const header = document.querySelector("[data-header]");
const goTop = document.querySelector("[data-goTop]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 81) {
    header.classList.add("active");
    goTop.classList.add("active");
  } else {
    header.classList.remove("active");
    goTop.classList.remove("active");
  }
});
