// creating add or remove qunty in selling unit
const addQuntyBtn = document.querySelector(".btn-plus");
const minusQuntyBtn = document.querySelector(".btn-minus");
const quntyLabel = document.querySelector(".input-qunty");
const listItemSellingUnit = document.querySelector(".list-item");
let qunty = 0;

listItemSellingUnit.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-plus")) {
    qunty++;
    quntyLabel.value = qunty;
  }
  if (e.target.classList.contains("btn-minus")) {
    if (qunty > 0) {
      qunty--;
      quntyLabel.value = qunty;
    }
  }
});

// implementing login

const admin = {
  userName: "admin",
  password: "admin",
};

const loginFormLabel = document.querySelector(".login-form");
const loginLabel = document.querySelector(".login");
const loginBtn = document.querySelector(".btn-login");
const userNameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const heroContainer = document.querySelector(".hero");

loginFormLabel.addEventListener("click", function (e) {
  const target = e.target.closest(".form");
  if (target.classList.contains("form")) {
    loginFormLabel.classList.add("hidden");
    loginLabel.classList.remove("hidden");
  }
});

loginBtn.addEventListener("click", function () {
  if (
    userNameInput.value === admin.userName &&
    passwordInput.value === admin.password
  ) {
    loginLabel.classList.add("hidden");
    heroContainer.classList.remove("hidden");
  }
});

heroContainer.addEventListener("click", function (e) {
  const target = e.target.closest(".sec").classList;
  heroContainer.classList.add("hidden");
  document.querySelectorAll(`.${target[1]}`).forEach((sec) => {
    sec.classList.remove("hidden");
  });
});
