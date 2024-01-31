const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");

// show menu
hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.add("show-hamburger-menu");
});

// hide menu
crossIcon.addEventListener("click", function () {
    hamburgerMenu.classList.remove("show-hamburger-menu");
});
