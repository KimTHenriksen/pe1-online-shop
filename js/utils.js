/* Hamburger Menu */
export function burgerMenu() {
  const burgerButton = document.querySelector(".burger-menu");
  const navMenu = document.querySelector("nav ul");

  burgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

/* Login & Logout*/
export function loginLink() {
  const login = document.querySelector("#login-link");

  if (localStorage.getItem("accessToken")) {
    login.textContent = "Logout";
  }

  login.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  });
}
