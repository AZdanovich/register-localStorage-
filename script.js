let users = [];
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const loginUsernameInput = document.getElementById("login-username");
const loginEmailInput = document.getElementById("login-email");
const registerMessage = document.getElementById("register-message");
const loginMessage = document.getElementById("login-message");

registerBtn.addEventListener("click", () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const email = emailInput.value;
  const existingUser = users.find(
    (user) => user.username === username || user.email === email
  );
  if (existingUser) {
    registerMessage.innerText =
      "Пользователь с таким именем или электронной почтой уже существует.";
  } else {
    const userId = Date.now();
    const newUser = { id: userId, username, email };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    registerMessage.innerText = "Вы успешно зарегистрированы";
  }

  usernameInput.value = "";
  emailInput.value = "";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginUsernameInput.value;
  const email = loginEmailInput.value;
  const user = users.find(
    (user) => user.username === username && user.email === email
  );
  if (user) {
    localStorage.setItem("userId", user.id);
    loginMessage.innerText = "Авторизация успешна!";
    window.location.href = "info.html";
  } else {
    loginMessage.innerText = "Пользователь не найден!";
  }

  loginUsernameInput.value = "";
  loginEmailInput.value = "";
});
