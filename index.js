const burger = document.querySelector(".burger");
const nav = document.querySelector(".links");

burger.addEventListener("click", function () {
  burger.classList.toggle("close");
  nav.classList.toggle("nav-active");
});
