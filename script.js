document.getElementById("form-step1").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("Address").value;
    const phone = document.getElementById("Phone").value;
    const formStep1 = document.getElementById("form-step1");



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
        formStep1.style.display = "none";
        formStep2.style.display = "block";
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
const formStep1 = document.getElementById("form-step1");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmMessage = document.getElementById("message");
const dropdownError = document.getElementById("dropdown-error");
const checkboxError = document.getElementById("checkbox-error");
const radioError = document.getElementById("error-msg");
const formStep2 = document.getElementById("form-step2");
const backBtn = document.getElementById("backBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dropdown = document.getElementById("dropdown");
const checkbox = document.getElementById("remember-Me");
const usernamePattern = /^[A-Za-z0-9_.]+$/;

// STEP 2 validation

formStep2.addEventListener("submit", function (e) {
    e.preventDefault();
    let isvalid = true;

    if (!usernamePattern.test(username.value.trim())) {
        usernameError.style.opacity = "1";
        isvalid = false;
    } else {
        usernameError.style.opacity = "0";
    }

    if (password.value.length < 8) {
        passwordError.style.opacity = "1";
        isvalid = false;
    } else {
        passwordError.style.opacity = "0";
    }

    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        confirmMessage.textContent = "Passwords do not match ❌";
        confirmMessage.style.color = "red";
        isvalid = false;
    } else {
        confirmMessage.textContent = "Password matches ✅";
        confirmMessage.style.color = "green";
    }

    const radioChecked = formStep2.querySelector('input[name="choice"]:checked');
    if (!radioChecked) {
        radioError.textContent = "Please select an option.";
        isvalid = false;
    } else {
        radioError.textContent = "";
    }

    if (dropdown.value === "") {
        dropdownError.textContent = "Please select a valid option.";
        isvalid = false;
    } else {
        dropdownError.textContent = "";
    }

    if (!checkbox.checked) {
        checkboxError.style.opacity = "1";
        isvalid = false;
    } else {
        checkboxError.style.opacity = "0";
    }

    if (isvalid) {
        alert("Form submitted successfully ✅");
        formStep2.reset();
        formStep1.reset();
        formStep2.style.display = "none";
        formStep1.style.display = "block";
    }
    else {
        alert(" Correct the Missing fields");
    }
});

// Back button
backBtn.addEventListener("click", function () {
    formStep2.style.display = "none";
    formStep1.style.display = "block";
});
