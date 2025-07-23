// Q1. The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// i. Sort the array and find the min and max age.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort()
console.log(ages);
console.log("Min age:", ages[0]);
console.log("Max age:", ages[ages.length-1]);

// ii. Find the median age(one middle item or two middle items divided by two).

const len = ages.length;
let median;
if (len % 2 === 0) {
  median = (ages[len / 2 - 1] + ages[len / 2]) / 2;
} else {
  median = ages[Math.floor(len / 2)];
}
console.log("Median age:", median);

// iii. Find the average age(all items divided by number of items)

let sum = 0;
for (let i = 0; i < len; i++) {
  sum = sum + ages[i];
}
const average = sum / len;
console.log("Average age:", average);

// iv. Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array.

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// Q2. Find the middle country(ies) in the countries array.
const leng = countries.length;
const mid = Math.floor(len / 2);
let middleCountries;
if (leng % 2 === 0) {
  middleCountries = [countries[mid - 1], countries[mid]];
} else {
  middleCountries = [countries[mid]];
}
console.log(middleCountries);

// Q3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const midd = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, mid);
const secondHalf = countries.slice(mid);
console.log(firstHalf);
console.log(secondHalf);
