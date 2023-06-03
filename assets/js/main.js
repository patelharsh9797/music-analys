// TODO: Variables
const header = document.querySelector(".header");
// ? For sidebar navigation on small width
const hamburgerBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list-m");

// TODO: Eventlistener

window.addEventListener("scroll", function () {
  window.scrollY > 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// ? For sidebar navigation on small width
hamburgerBtn.addEventListener("click", () => {
  if (!hamburgerBtn.classList.contains("is-active")) {
    hamburgerBtn.classList.add("is-active");
    mobileMenu.classList.add("active");
  } else {
    hamburgerBtn.classList.remove("is-active");
    mobileMenu.classList.remove("active");
  }
});
