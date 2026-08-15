const paymentForm = document.getElementById("payment-form");
const message = document.querySelector(".message");
const paypal = document.getElementById("paypal");
const googlePay = document.getElementById("google-pay");
const creditCard = document.getElementById("credit-card");
const loginLink = document.querySelector("#login-link");
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector("nav ul");

burgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

if (localStorage.getItem("accessToken")) {
  loginLink.textContent = "Logout";
}

loginLink.addEventListener("click", () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
});

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!paypal.checked && !googlePay.checked && !creditCard.checked) {
    message.textContent = "Select a payment method";
    return;
  }

  localStorage.removeItem("cart");

  window.location.href = "../success/index.html";
});
