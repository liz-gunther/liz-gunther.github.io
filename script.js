let registerPassword = document.getElementById("registerPassword");
let registerPasswordConfirm = document.getElementById("registerPasswordConfirm");
let registerAgreeTerms = document.getElementById("agreeTerms");
let registerForm = document.getElementById("registerForm");
let loginUsername = document.getElementById("loginUsername");
let loginPassword = document.getElementById("loginPassword");
let loginForm = document.getElementById("loginForm");
let bigButton = document.getElementById("big-button")

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

function showDiv() {
    var x = document.getElementById("small-buttons");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } return true;
}
bigButton.addEventListener("click", showDiv());