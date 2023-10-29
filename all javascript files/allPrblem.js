//  PROBLEM NO 1 solved by chatGpt

function findLongestWordLength(sentence) {
  const words = sentence.split(" ");
  let longestLength = 0;

  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "");
    longestLength = Math.max(longestLength, cleanedWord.length);
  }

  return longestLength;
}
const sentence = "I love JavaScript programming";
// console.log(findLongestWordLength(sentence)); // Output: 11 (length of the word "programming")

// PROBLEM NO 2 Problem: Check Palindrome

const cheaking = (stringCheak) =>
  stringCheak.toLowerCase() === stringCheak.split("").reverse().join(",");
const cheakedRseult = cheaking("las");
// console.log(cheakedRseult);

// PROBLEM NO 3 Problem:Problem: Sum of Array Elements
// let sumNum = [1, 2, 3, 4, 5];
// let sum = sumNum.reduce((add, add2) => {
//   return add + add2;
// });
// console.log(sum);

// 4. Problem: Count the Occurrences of a Specific Element in an Array (hint taken from chatgpt)
function countCheak(input, target) {
  let sum = 0;
  for (let Element of input) {
    if (Element === target) {
      sum++;
    }
  }
  return sum;
}
let numArr = [
  1,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  3,
  3,
  5,
  5,
  5,
  5,
  "s",
  5,
  6,
  6,
  6,
  6,
  7,
  4,
];
let target = 2;
// console.log(numArr[numArr.indexOf(target)]);

// 5 problem. Reverse a String

let name = "Javascript";
let eg = "";
for (let i = name.length - 1; i >= 0; i--) eg += name[i];
// console.log(eg + "");
// console.log("type of name is", typeof eg);

// Medium Problems:

// 1. Problem: Find the First Non-Repeated Character
// skip
// 2. Problem: Flattening Nested Arrays
const Input = [1, 2, [3, [4, [5], 6], 7], 8];
const inputAns = Input.flat(99);
// console.log(inputAns);
// 3. Problem: Find the Missing Number in an Array
// SKIP
// 4. Problem: Calculate the Factorial of a Number
let factorial = 1;
let num = 5;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
// console.log(factorial);
