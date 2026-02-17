// stringMethods.js

let text = "  Hello Friends,I'm Abhishek Kulbainur  ";

// 1. Length
console.log("Length:", text.length);

// 2. Trim (remove extra spaces)
let trimmedText = text.trim();
console.log("Trimmed:", trimmedText);

// 3. Uppercase
console.log("Uppercase:", trimmedText.toUpperCase());

// 4. Lowercase
console.log("Lowercase:", trimmedText.toLowerCase());

// 5. Substring
console.log("Substring (0-7):", trimmedText.substring(0, 7));

// 6. Replace
console.log("Replace JavaScript with JS:",
    trimmedText.replace("JavaScript", "JS")
);

// 7. Includes
console.log("Contains 'World'?",
    trimmedText.includes("World")
);

// 8. Split
let words = trimmedText.split(" ");
console.log("Split into words:", words);

// 9. StartsWith
console.log("Starts with 'Hello'?",
    trimmedText.startsWith("Hello")
);

// 10. EndsWith
console.log("Ends with 'World'?",
    trimmedText.endsWith("World")
);
