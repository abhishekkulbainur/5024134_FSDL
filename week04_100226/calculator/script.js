// ============================
// VARIABLES
// ============================

let display = document.getElementById("display");
let expression = "";

// ============================
// OBJECT (stores calculator settings)
// ============================

const calculatorConfig = {
    maxLength: 20,
    errorMessage: "Error"
};

// ============================
// CLASS
// ============================

class Calculator {

    constructor() {
        this.history = [];
    }

    // FUNCTION: Add value
    addValue(value) {

        // CONDITION
        if (expression.length >= calculatorConfig.maxLength) {
            alert("Maximum length reached!");
            return;
        }

        expression += value;
        display.value = expression;
    }

    // FUNCTION: Clear display
    clearDisplay() {
        expression = "";
        display.value = "";
    }

    // FUNCTION: Calculate result
    calculate() {
        try {
            let result = eval(expression);

            // LOOP: store history (limit 5 results)
            this.history.push(result);

            if (this.history.length > 5) {
                this.history.shift();
            }

            expression = result.toString();
            display.value = expression;

        } catch (error) {
            display.value = calculatorConfig.errorMessage;
            expression = "";
        }
    }

    // FUNCTION: Show history in console
    showHistory() {
        console.log("Calculation History:");

        // LOOP
        for (let i = 0; i < this.history.length; i++) {
            console.log(this.history[i]);
        }
    }
}

// ============================
// CREATE OBJECT FROM CLASS
// ============================

const calc = new Calculator();

// ============================
// EVENTS
// ============================

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        let value = this.getAttribute("data-value");

        // CONDITIONS
        if (this.id === "equals") {
            calc.calculate();
            calc.showHistory();
        }

        else if (this.id === "clear") {
            calc.clearDisplay();
        }

        else if (value !== null) {
            calc.addValue(value);
        }
    });
});
