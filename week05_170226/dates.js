// dateMethods.js

let today = new Date();

// 1. Full Date
console.log("Full Date:", today);

// 2. Year
console.log("Year:", today.getFullYear());

// 3. Month (0-11 so +1)
console.log("Month:", today.getMonth() + 1);

// 4. Date
console.log("Day of Month:", today.getDate());

// 5. Day (0=Sunday)
console.log("Day of Week:", today.getDay());

// 6. Hours
console.log("Hours:", today.getHours());

// 7. Minutes
console.log("Minutes:", today.getMinutes());

// 8. Seconds
console.log("Seconds:", today.getSeconds());

// 9. Custom Formatted Date
let formattedDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
console.log("Formatted Date:", formattedDate);

// 10. Add 7 Days
let futureDate = new Date();
futureDate.setDate(today.getDate() + 7);
console.log("After 7 Days:", futureDate);
