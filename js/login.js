/* API */
const API_URL = "https://v2.api.noroff.dev/auth/login";

/* DOM */
const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginMessage = document.querySelector("#loginMessage");
const loginButton = document.querySelector("#loginButton");

loginForm.addEventListener("submit", loginUser);

async function loginUser(event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const user = {
    email: email,
    password: password,
  };

  loginMessage.textContent = "";
  loginButton.disabled = true;
  loginButton.textContent = "Logging in...";

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  loginButton.disabled = false;
  loginButton.textContent = "Login";

  if (response.ok) {
    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.data));
    window.location.href = "../index.html";
  } else {
    const errorMessage = data.errors[0].message;
    loginMessage.textContent = errorMessage;
  }
}
