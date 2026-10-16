
// Task 02: Simple Calculator

let num1 = 20;
let num2 = 10;
let operator = "+";

if (operator === "+") {
    console.log("Addition:", num1 + num2);
} 
else if (operator === "-") {
    console.log("Subtraction:", num1 - num2);
} 
else if (operator === "*") {
    console.log("Multiplication:", num1 * num2);
} 
else if (operator === "/") {
    if (num2 !== 0) {
        console.log("Division:", num1 / num2);
    } else {
        console.log("Cannot divide by zero");
    }
} 
else {
    console.log("Invalid operator");
}

