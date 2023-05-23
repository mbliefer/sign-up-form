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
    eightChars.style.color = (password.length >= 8) ? "lightgreen" : "#eb4e33";
    uCase.style.color = (password.toLowerCase() !== password) ? "lightgreen" : "#eb4e33";
    lCase.style.color = (password.toUpperCase() !== password) ? "lightgreen" : "#eb4e33";
    num.style.color = (hasNumber.test(password)) ? "lightgreen" : "#eb4e33";
}


passwordInput.addEventListener('keyup', checkPassword);