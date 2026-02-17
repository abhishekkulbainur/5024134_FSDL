// ===============================
// STUDENT MANAGEMENT SYSTEM
// ===============================

// Array to store registered users
let users = [];


// ===============================
// REGISTRATION FUNCTION
// ===============================
function registerUser() {

    // Getting values from input fields
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("regConfirmPassword").value;

    // Validation
    if (!validateRegistration(name, email, password, confirmPassword)) {
        return;
    }

    try {
        // Store user in array (Object format)
        let user = {
            name: name.toUpperCase(),  // Using string method
            email: email,
            password: password,
            registeredDate: new Date() // Using date method
        };

        users.push(user);

        alert("Registration Successful!");
        console.log("Registered Users:", users);

    } catch (error) {
        console.error("Error during registration:", error.message);
    }
}


// ===============================
// LOGIN FUNCTION
// ===============================
function loginUser() {

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (!validateLogin(email, password)) {
        return;
    }

    try {
        // Check if user exists in array
        let foundUser = users.find(user => 
            user.email === email && user.password === password
        );

        if (foundUser) {

            // Using date method
            let loginTime = new Date();

            alert("Login Successful!\nWelcome " + foundUser.name +
                "\nLogin Time: " + loginTime.toLocaleString());

        } else {
            throw new Error("Invalid Email or Password");
        }

    } catch (error) {
        alert(error.message);
    }
}


// ===============================
// REGISTRATION VALIDATION
// ===============================
function validateRegistration(name, email, password, confirmPassword) {

    let errors = [];

    if (name === "") {
        errors.push("Name is required.");
    }

    // Email pattern check
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
        alert(errors.join("\n"));
        return false;
    }

    return true;
}


// ===============================
// LOGIN VALIDATION
// ===============================
function validateLogin(email, password) {

    if (email === "" || password === "") {
        alert("All fields are required.");
        return false;
    }

    return true;
}


// ===============================
// STRING METHODS EXAMPLE
// ===============================

// Demonstrating string functions
let sampleText = " JavaScript Project ";
console.log("Original:", sampleText);
console.log("Trimmed:", sampleText.trim());
console.log("Uppercase:", sampleText.toUpperCase());
console.log("Contains 'Project':", sampleText.includes("Project"));


// ===============================
// DATE METHODS EXAMPLE
// ===============================

let today = new Date();
console.log("Current Date:", today);
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day:", today.getDate());


// ===============================
// ERROR HANDLING EXAMPLE
// ===============================

function divideNumbers(a, b) {

    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    } catch (error) {
        console.error(error.message);
    }
}

console.log("Division Result:", divideNumbers(10, 2));
console.log("Division Result:", divideNumbers(10, 0));
// Show Register Form
function showRegister() {
    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("registerCard").classList.remove("hidden");
}

// Show Login Form
function showLogin() {
    document.getElementById("registerCard").classList.add("hidden");
    document.getElementById("loginCard").classList.remove("hidden");
}

