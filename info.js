const userId = localStorage.getItem("userId");
const users = JSON.parse(localStorage.getItem("users")) || [];
const userInfoDiv = document.getElementById("user-info");

if (userId) {
  const user = users.find((user) => user.id == userId);
  if (user) {
    userInfoDiv.innerHTML = `<p>Имя пользователя: ${user.username}</p>
    <p>Электронная почта: ${user.email}</p>
  <p>ID: ${user.id}</p>`;
  }
}
