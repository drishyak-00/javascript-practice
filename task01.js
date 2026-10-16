// Student Marks Calculator

let studentName = "Ammu";

let english = 80;
let maths = 70;
let science = 90;

// Calculate total marks
let total = english + maths + science;

// Calculate average
let average = total / 3;

// Display student details
console.log("Student Name:", studentName);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Science:", science);

console.log("Total Marks:", total);
console.log("Average:", average);

// Check Pass or Fail
if (english >= 35 && maths >= 35 && science >= 35) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}