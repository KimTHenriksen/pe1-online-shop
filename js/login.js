/* API */
const API_URL = "https://v2.api.noroff.dev/auth/login";

/* DOM */
const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

loginForm.addEventListener("submit", loginUser);

async function loginUser(event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const user = {
    email: email,
    password: password,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log(response.status);
  console.log(respons);
}
