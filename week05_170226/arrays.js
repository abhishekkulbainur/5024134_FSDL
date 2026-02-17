// arrays.js

let students = ["","Abhii", "Snehal", "Merin"];

// Add element
students.push("Justin");

// Remove last element
students.pop();

// Loop through array
students.forEach(function(student, index) {
    console.log(index + ":", student);
});

// Find element
let found = students.includes("Snehal");
console.log("Is Snehal present?", found);

// Filter example
let filtered = students.filter(name => name.startsWith("A"));
console.log("Names starting with A:", filtered);