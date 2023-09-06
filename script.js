function validateEmail() {
    var email = document.getElementById('email').value;
    var err2 = document.getElementById('err2');
    var regexp = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;
    if (!regexp.test(email)) {
        err2.innerText = "Enter a valid email";
        err2.style.color='red';
        return false;
    } else {
        err2.innerText = "";
        return true;
    }
}

function validatePhoneNumber() {
    var phone = document.getElementById('phone').value;
    var err1 = document.getElementById('err1');
    var phoneRegex = /^(\d{10}|(\d{3}[-.\s]){2}\d{4})$/;
    if (phoneRegex.test(phone)) {
        err1.innerText = "";
        return true;
    } else {
        err1.innerText = "Invalid phone number";
        err1.style.color = 'red';
        return false;
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var err3 = document.getElementById('err3');
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        err3.innerText = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
        err3.style.color = 'red';
        return "poor";
    } else if (password.length >= 12) {
        err3.innerText = "Password Strength: Strong";
        err3.style.color = 'green';
        return "strong";
    } else {
        err3.innerText = "Password Strength: Medium";
        err3.style.color = 'orange';
        return "medium";
    }
    
}

function validateConfirmPassword() {
    var confirmPassword = document.getElementById('pwd').value;
    var err4 = document.getElementById('err4');
    var password = document.getElementById('password').value;

    if (password === confirmPassword) {
        err4.innerText = "";
        return true;
    } else {
        err4.innerText = "Passwords do not match.";
        err4.style.color = 'red';
        return false;
    }
}

function validation() {
    var isEmailValid = validateEmail();
    var isPhoneValid = validatePhoneNumber();
    var passwordStrength = validatePassword();
    var isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isPhoneValid && passwordStrength !== "poor" && isConfirmPasswordValid) {
        alert("You're are welcome")
        return true; // Form can be submitted
    } else {
        return false; // Form submission is prevented
    }
}