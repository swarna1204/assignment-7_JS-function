// Function to reverse a string without using reverse()
function reverseString(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

// Function to reverse a number
function reverseNumber(num) {
  const reversedString = num.toString().split("").reverse().join("");
  return parseInt(reversedString) * Math.sign(num);
}

// Destructuring an object to get name and age
const person = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};

const { name, info: { age } } = person;

// Destructuring an array to get first, second, and the rest of the elements
const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];

const [first, second, ...rest] = thisArray;

// Optional: Check if a string is a palindrome
function isPalindrome(str) {
  const sanitized = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = sanitized.split("").reverse().join("");
  return sanitized === reversed;
}
