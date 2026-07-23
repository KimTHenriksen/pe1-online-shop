/* API */
const API_URL = "https://v2.api.noroff.dev/auth/register";

/* DOM */
const registerForm = document.querySelector("#registerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const registerMessage = document.querySelector("#registerMessage");
const registerButton = document.querySelector("#registerButton");

registerForm.addEventListener("submit", registerUser);

async function registerUser(event) {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  const user = {
    name: name,
    email: email,
    password: password,
  };

  registerMessage.textContent = "";

  registerButton.disabled = true;
  registerButton.textContent = "Registering..";

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  registerButton.disabled = false;
  registerButton.textContent = "Registering...";

  if (response.ok) {
    window.location.href = "login.html";
  } else {
    const errorMessage = data.errors[0].message;
    registerMessage.textContent = errorMessage;
  }
}
