const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const eightChars = document.querySelector(".eightChars");
const uCase = document.querySelector(".uCase");
const lCase = document.querySelector(".lCase");
const num = document.querySelector(".num");
const passwordMessage = document.querySelector(".error");
const submit = document.querySelector(".submit");
const signUp = document.querySelector(".sign-up-form");
const signUpComplete = document.querySelector(".sign-up-complete");
const inputs = document.getElementsByTagName("input");

let password = "";
let passwordConfirm = "";
let hasNumber = /\d/;

function checkPassword() {
    password = passwordInput.value;
    eightChars.style.color = (password.length >= 8) ? "lightgreen" : "#eb4e33";
    uCase.style.color = (password.toLowerCase() !== password) ? "lightgreen" : "#eb4e33";
    lCase.style.color = (password.toUpperCase() !== password) ? "lightgreen" : "#eb4e33";
    num.style.color = (hasNumber.test(password)) ? "lightgreen" : "#eb4e33";
}

function checkPasswordMatch() {
    passwordConfirm = confirmPassword.value;
    if (passwordConfirm === password) {
        passwordMessage.textContent = "Passwords Match"
        passwordMessage.style.color = "lightgreen";
    }
}

function completedSignUp() {
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            return;
        }
    };
    if (inputs[5].value != inputs[4].value) {
        inputs[5].style.borderColor = "red";
        return;
    };

    signUp.classList.add("hidden");
    signUpComplete.classList.remove("hidden");
}

passwordInput.addEventListener('keyup', checkPassword);
confirmPassword.addEventListener('keyup', checkPasswordMatch);
submit.addEventListener('click', (e) => {
    Array.from(inputs).forEach((input) => {
        console.log(input);
        input.style.borderColor = (input.value == "") ? "red" : "#b5a999"
    }); 
    e.preventDefault();
    completedSignUp();
})