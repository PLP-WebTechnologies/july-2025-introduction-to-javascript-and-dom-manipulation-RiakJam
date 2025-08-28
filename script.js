
// Part 1: Variables & Conditionals
let number = 7;
let message = "";

if (number % 2 === 0) {
  message = number + " is Even";
} else {
  message = number + " is Odd";
}
console.log(message);


// Part 2: Custom Functions

// Function 1: Check if a number is positive, negative, or zero
function checkNumber(num) {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";
}

// Function 2: Sum of an array
function sumArray(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
}

console.log("Check Number (5):", checkNumber(5));
console.log("Sum of [1,2,3,4]:", sumArray([1,2,3,4]));

// Part 3: Loops


// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop iteration:", i);
}

// Loop 2: While loop
let count = 0;
while (count < 3) {
  console.log("While Loop count:", count);
  count++;
}


// Part 4: DOM Interactions


// 1. Changing content dynamically
document.getElementById("status").textContent = "Ready to interact!";

// 2. Add event listener to button for number checking
document.getElementById("checkNumberBtn").addEventListener("click", () => {
  let num = parseInt(prompt("Enter a number:"));
  let result = checkNumber(num);
  document.getElementById("status").textContent = "Result: " + result;
});

// 3. Generate list dynamically with loop
document.getElementById("generateListBtn").addEventListener("click", () => {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
  }
});
