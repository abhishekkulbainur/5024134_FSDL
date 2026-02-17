// errorHandling.js

function divideNumbers(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Both inputs must be numbers.");
        }

        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        return a / b;

    } catch (error) {
        console.error("Error:", error.message);
        return null;
    } finally {
        console.log("Operation completed.");
    }
}

// Example
console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));
