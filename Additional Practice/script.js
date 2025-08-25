// 1.Write a function to reverse a string without using the built-in .reverse() method.

let input = "hello";
function reverseString() {
  let reverse = " ";
  for (let i = input.length - 1; i >= 0; i--) {
    reverse = reverse + input[i];
  }
  return `"${reverse} "`;
}
console.log(reverseString(input));

// 2.Check if a given string is a palindrome.

function palindrome(string) {
  let rev = " ";
  for (let i = string.length - 1; i >= 0; i--) {
    rev = rev + string[i]
  }
  if (string == rev) {
    return true;
  }
  else {
    return false;
  }
}
console.log(palindrome("hello"));

// 3.Count the number of vowels in a string.

let sentence = "Javascript";
let number = 0;
let vowels = "aeiouAEIOU"
for (let i = 1; i < sentence.length; i++) {
  if (vowels.includes(sentence[i])) {
    number++;
  }
}
console.log(number);

// 4.Find the first non-repeating character in a string.
function firstChar(string) {
  for (let i = 0; i < string.length; i++) {
    const characterString = string[i];
    if (string.indexOf(characterString) === string.lastIndexOf(characterString)) {
      return characterString;
    }
  }
  return null;
}
console.log(firstChar("swiss"));

// 5. Write a function to check if two strings are anagrams of each other.
let string1 = 'listen';
let string2 = 'silent';


// 6. Convert the first character of each word in a sentence to uppercase.
function capitalizeWord(string) {
  let words = string.split(' ');
  let uppercaseWord = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      uppercaseWord.push(word[0].toUpperCase() + word.slice(1));
    }
    else {
      uppercaseWord.push('');
    }
  }
  return uppercaseWord.join(' ');
}
console.log(capitalizeWord("hello world from javascript"));

// 7. Remove all duplicate characters from a string.

function removeDuplicateChar(string) {
  let original = '';
  for (let i = 0; i < string.length; i++) {
    if (!original.includes(string[i])) {
      original = original + string[i];
    }
  }
  return original;
}
console.log(removeDuplicateChar('programming'));


// 8. Write a function to count the frequency of each character in a string.

function frequencyCount(str) 
{
  const frequency = {};
  for (let i = 0; i < str.length; i++) 
  {
    const char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(frequencyCount("hello"));

// 9. Find the maximum and minimum number in an array.

const array = [3, 7, 2, 9, 1];
let maximum = Math.max(...array);
let minimum = Math.min(...array);
console.log("Max =", maximum);
console.log("Min =", minimum);

// 10.Write a function to remove duplicates from an array.

function removeDuplicates(array) {
  let pure = [];
  for (let i = 0; i < array.length; i++) {
    if (!pure.includes(array[i])) {
      pure.push(array[i])
    }
  }
  return pure;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 11. Find the second largest number in an array.

const numbers = [10, 20, 5, 8, 15]
numbers.sort(function (a, b) {
  return b - a;
})
console.log(numbers);
console.log(numbers[1]);

// 12.Reverse an array without using .reverse().

function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i])
  }
  return reversed;
}
console.log(reverseArray([2, 5, 8, 7, 4, 1]));

// 13.Merge two arrays and remove duplicates.

const a = [1, 2, 3];
const b = [3, 4, 5];
const mergedArray = a.concat(b);
console.log(mergedArray);
const newMergeArray = [];
for (let i = 0; i < mergedArray.length; i++) {
  if (!newMergeArray.includes(mergedArray[i])) {
    newMergeArray.push(mergedArray[i])
  }
}
console.log(newMergeArray);

// 14.Rotate an array by k positions (e.g., [1,2,3,4,5] rotated by 2 → [4,5,1,2,3]).

const rotate = [1, 2, 3, 4, 5];
let k = 2;
for (let i = 1; i <= k; i++) {
  let last = rotate.pop();
  rotate.unshift(last);
}
console.log(rotate);

// 15. Find the intersection of two arrays (common elements).

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6, 7];
const intersection = [];
for (let i = 1; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    intersection.push(array1[i])
  }
}
console.log(intersection);

// 16. Flatten a nested array (e.g., [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]).

const arrays = [1, [2, [3, 4]], 5];
console.log(arrays.flat(Infinity));

// 17.Write a function to calculate the factorial of a number (using recursion).

function factorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));

// 18.Implement a function to generate the Fibonacci sequence up to n terms.

function fibonacciGenerate(number) {
  let a = 0, b = 1;
  const series = [];
  for (let i = 1; i <= number; i++) {
    series.push(a);
    [a, b] = [b, a + b];
  }
  return series;
}
console.log(fibonacciGenerate(5));

// 19.Write a function that takes an array of numbers and returns the sum of only the even numbers.
function sumOfEvenNumber(array) {
  let sum = 0;
  for (let i = 1; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
console.log(sumOfEvenNumber([1, 2, 3, 4, 5, 6]));

//20. Implement a function compose(f, g) that takes two functions f and g and returns a new function h such that h(x) = f(g(x)).