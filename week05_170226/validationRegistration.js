// validationRegistration.js

function validateRegistration(name, email, password, confirmPassword) {

    let errors = [];

    if (name.trim() === "") {
        errors.push("Name is required.");
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errors.push("Invalid email format.");
    }

    if (password.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }

    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        console.log("Registration Errors:", errors);
        return false;
    }

    console.log("Registration Successful!");
    return true;
}

// Example
validateRegistration("Abhii", "test@gmail.com", "123456", "123456");
