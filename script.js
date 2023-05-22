const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const eightChars = document.querySelector(".eightChars");
const uCase = document.querySelector(".uCase");
const lCase = document.querySelector(".lCase");
const num = document.querySelector(".num");

let password = "";
let hasNumber = /\d/;

function checkPassword() {
    password = passwordInput.value;
    console.log(password);
    console.log(password.length);
    if (password.length >= 8) {
        eightChars.style.color = "lightgreen";
    }
    if (password.toLowerCase() !== password) {
        uCase.style.color = "lightgreen";
    }
    if (password.toUpperCase() !== password) {
        lCase.style.color = "lightgreen";
    }
    if (hasNumber.test(password)) {
        num.style.color = "lightgreen";
    }
}


passwordInput.addEventListener('keyup', checkPassword);