let mobileMenu = document.querySelector("#mobile-menu");
let navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle('active') 
})