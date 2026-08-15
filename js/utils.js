export function burgerMenu() {
  const burgerButton = document.querySelector(".burger-menu");
  const navMenu = document.querySelector("nav ul");

  burgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}
