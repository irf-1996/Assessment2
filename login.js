function Validation() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
  
    // Get the error message elements
    var emailError = document.getElementById("err2");
    var passwordError = document.getElementById("err3");
  
    // Reset any previous error messages
    emailError.textContent = "";
    passwordError.textContent = "";
  
    // Define a regular expression pattern for a valid email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Validate the email
    if (!emailInput.value) {
        emailError.textContent = "Email is required";
        emailError.style.color = 'red';
        return false; // Prevent form submission
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email";
        emailError.style.color = 'red';
        return false; 
    }
  
    // Define a regular expression pattern for password validation
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Validate the password
    if (!passwordInput.value) {
        passwordError.textContent = "Password is required";
        passwordError.style.color = 'red';
        return false; 
    } else if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number.";
        passwordError.style.color = 'red';
        return false; // Prevent form submission
    }
    alert("Hello, welcome to kerala Tourism")
  
    return true;
}
