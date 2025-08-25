// Q1. Explain the difference between forEach, map, filter, and reduce.

// forEach
// It repeated over each element but does not return a new array.
const number = [1,8,2,7,4,9,3];
let Sum = 0;
number.forEach(element => Sum = Sum + element);
console.log(Sum);

// map
// Return a new array and doesnot modify the original array.
const numberSquare = number.map((num) => num * num);
console.log(numberSquare);

// filter
// Return a new array with only the elemtnts which satisfy the condition.
// It select a susset of elements from original array.
const odd =  number.filter(num => num % 2 != 0);
console.log(odd);

// reduce
// Reduce allows to process an array and 'reduce' it to a single value.
// It return a single value.
const addition = number.reduce((acc, cur) => acc + cur, 0);
console.log(addition);

// Q2.Define a callback function before you use it in forEach, map, filter or reduce.

function double (x)
{
    return x + x;
}
// forEach
 const doubled = [];
 number.forEach(function(element)
 {
    doubled.push (double(element));
 });
console.log(doubled);

// map
const doubles = number.map(double);
console.log(doubles);

// filter
const filter = number.filter(function(element) 
{
  return double(element) > 10;
});
console.log(filter); 

// reduce
const sumation = number.reduce(function(acc, cur)
{
    return acc + cur;
}, 0);
console.log(sumation);

// Q3. Use forEach to console.log each country in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
countries.forEach((country) => console.log(country));

// Q4. Use forEach to console.log each name in the names array.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((name) => console.log(name));

// Q5. Use forEach to console.log each number in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((num) => console.log(num));

// Q6. Use map to create a new array by changing each country to uppercase in the countries array.

const countryToUppercase = countries.map((country) => country.toUpperCase());
console.log(countryToUppercase);

// Q7. Use map to create an array of countries length from countries array.

const countryLength = countries.map((country) => country.length);
console.log(countryLength);

// Q8. Use map to create a new array by changing each number to square in the numbers array.

squareNumber = numbers.map((number) => number * number);
console.log(numbers);
console.log(squareNumber);

// Q9.Use map to change to each name to uppercase in the names array.

const nameToUppercase = names.map((name) => name.toUpperCase());
console.log(nameToUppercase);

// Q10.Use map to map the products array to its corresponding prices.

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
const prices =  products.map(product => product.price);
console.log(prices);

// Q11. Use filter to filter out countries  containing land.

const landCountry = countries.filter((country) => country.includes('land'));
console.log(landCountry);

//Q12.Use filter to filter out countries having six character.

const sixCharacter = countries.filter((country) => country.length === 6);
console.log(sixCharacter); 

// Q13.Use filter to filter out countries containing six letters and more in the country array.

const Longestlength = countries.filter((country) => country.length >= 6 );
console.log(Longestlength);

//Q14. Use filter to filter out country start with 'E'
const countryStart = countries.filter((country) => country.startsWith('E'));
console.log(countryStart);

// Q15. Use filter to filter out only prices with values.

const price = products.filter((product) => product.price);
console.log(price);

//Q16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists (array)
{
  return array.filter(element => typeof element === "string");
}
const newArray = [1,"hello",3.7, "Javascript",2,"Web"];
console.log(getStringLists(newArray));

//Q17.Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// Q18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.

const sentence = countries.reduce((acc, country, index, array) => {
  if (index === 0) {
    acc =  acc + 'Estonia, ';
  }
  if (index === array.length - 1) {
    return acc + 'and ' + country;
  }
  return acc + country + ', ';
}, '') + ' are north European countries.';

console.log(sentence);

// Q19.Explain the difference between some and every

//some
// It checks at least one element in array satisfies the given conditions. It gives answer in the form of boolean(True/false).
const ages = [24,27,32,18,45];
const someAge = ages.some((age) => age < 25);
console.log(someAge);

// every
// It checks all element in the satisifies the given condition. It gives answer in the format of boolean(True/False).
const areAllStr = names.every((name) => typeof name === 'number');
console.log(areAllStr);

//Q20.Use some to check if some names' length greater than seven in names array.

const  lengthSeven = names.some((name) => name.length > 7);
console.log(lengthSeven);

// Q21.Use every to check if all the countries contain the word land

const containLand = countries.every((country) => country.includes('land'));
console.log(containLand);

// Q22.Explain the difference between find and findIndex.
 
//find
// Return the first element which satisfies the satisfies the condition. 
const nums = [24, 22, 25, 32, 35, 18];
const num = nums.find((num) => num > 20);

console.log(num);

// findIndex
// Return the position of the element which satisfies the condition.
const numb = nums.findIndex((numb) => numb > 30);

console.log(numb);

// Q23.Use find to find the first country containing only six letters in the countries array
 
const country =  countries.find((country)=> country.length === 6);
console.log(country);

//Q24.Use findIndex to find the position of the first country containing only six letters in the countries array

const country1 =  countries.findIndex((country1)=> country1.length === 6);
console.log(country1);

// Q25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const index = countries.findIndex(country => country === 'Norway');
console.log(index);

// Q26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const index1 = countries.findIndex(country => country === 'Russia');
console.log(index1);