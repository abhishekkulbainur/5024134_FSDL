// validationLogin.js

function validateLogin(email, password) {

    if (email.trim() === "" || password.trim() === "") {
        console.log("Email and Password are required.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        console.log("Invalid email format.");
        return false;
    }

    if (password.length < 6) {
        console.log("Password must be at least 6 characters.");
        return false;
    }

    console.log("Login Successful!");
    return true;
}

// Example
validateLogin("test@gmail.com", "123456");
