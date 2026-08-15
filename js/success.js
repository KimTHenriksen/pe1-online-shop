const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector("nav ul");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
