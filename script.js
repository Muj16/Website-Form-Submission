document.getElementById("form-step1").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("Address").value;
    const phone = document.getElementById("Phone").value;



    const firstNameError = document.getElementById("error-text");
    const lastNameError = document.getElementById("lastName-error");
    const addressError = document.getElementById("Address-error");
    const phoneError = document.getElementById("phone-error");
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const confirmMessage = document.getElementById("message");
    const dropdownError = document.getElementById("dropdown-error");
    const checkboxError = document.getElementById("checkbox-error");
    const radioError = document.getElementById("error-msg");

    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^\+92\d{10}$/;
    let isValid = true;


    if (!nameRegex.test(firstName)) {
        firstNameError.style.opacity = "1";
        isValid = false;
    } else {
        firstNameError.style.opacity = "0";
    }
    if (!nameRegex.test(lastName)) {
        lastNameError.style.opacity = "1";
        isValid = false;
    } else {
        lastNameError.style.opacity = "0";
    }

    if (address === "") {
        addressError.style.opacity = "1";
        isValid = false;
    } else {
        addressError.style.opacity = "0";
    }
    if (!phoneRegex.test(phone)) {
        phoneError.style.opacity = "1";
        isValid = false;
    } else {
        phoneError.style.opacity = "0";
    }
    if (isValid) {
        alert("✅ Form is valid! Moving to next step...");
    }
    else {
        alert("Please Match the required fields")
    }
});
const phoneInput = document.getElementById("Phone");
phoneInput.addEventListener("keydown", function (e) {
    if (this.selectionStart <= 3 && (e.key === "Backspace" || e.key === "Delete")) {
        e.preventDefault();
    }
})

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmMessage = document.getElementById("message");
const dropdownError = document.getElementById("dropdown-error");
const checkboxError = document.getElementById("checkbox-error");
const radioError = document.getElementById("error-msg");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dropdown = document.getElementById("dropdown");
const checkbox = document.getElementById("remember-Me");
formStep2.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

})