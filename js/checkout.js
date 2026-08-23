import { burgerMenu, loginLink } from "./utils.js";

/* DOM */
const paymentForm = document.getElementById("payment-form");
const message = document.querySelector(".message");
const paypal = document.getElementById("paypal");
const googlePay = document.getElementById("google-pay");
const creditCard = document.getElementById("credit-card");

burgerMenu();
loginLink();

/* Payment Form */
paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!paypal.checked && !googlePay.checked && !creditCard.checked) {
    message.textContent = "Select a payment method";
    return;
  }

  localStorage.removeItem("cart");

  window.location.href = "../success/index.html";
});
