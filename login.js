let registerPassword = document.getElementById("registerPassword");
let registerPasswordConfirm = document.getElementById("registerPasswordConfirm");
let registerAgreeTerms = document.getElementById("agreeTerms");
let registerForm = document.getElementById("register-form");
let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");
let loginForm = document.getElementById("loginForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (registerPassword.value === registerPasswordConfirm.value && registerAgreeTerms.checked) {
        alert("You successfully registered for an account!");
    } else {
        if (!registerAgreeTerms.checked) {
            alert("Please agree to the terms.");
        } else {
            alert("Passwords do not match.")
        }
    }
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (loginUsername.value === "admin" && loginPassword.value === "pass123") {
        alert("You've successfully logged in!");
    } else {
        alert("Wrong username/password.")
    }
});
