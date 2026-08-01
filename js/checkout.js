const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("submitted");

  localStorage.removeItem("cart");

  window.location.href = "../succes/index.html";
});
