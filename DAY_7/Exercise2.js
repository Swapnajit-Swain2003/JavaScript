//  Q1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x, y) {
  LinEquation = a * x + b * y + c;
  return LinEquation;
}
// console.log(solveLinEquation (3, 5, 6, 3, 2));
let value = solveLinEquation(3, 5, 6, 3, 2);
console.log(value);

// Q2.  Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a, b, c, x) {
  QuadEquation = a * x * x + b * x + c;
  return QuadEquation;
}
// console.log(solveQuadEquation (2, 3, 4, 5));
let Value = solveQuadEquation(2, 3, 4, 5);
console.log(Value);

// Q3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) 
{
  for (let i = 0; i < array.length; i++) 
  {
    console.log(array[i]);
  }
}
const Array = [10, 20, 30, 40, 50];
printArray(Array);

// Q4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() 
{
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
console.log(showDateTime());

// Q5. Declare a function name swapValues. This function swaps value of x to y.
/* swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4 */

function swapValues(x, y) 
{
  let temp = x;
  x = y;
  y = temp;
  return [x, y];
}
let a = 10;
let b = 20;
[a, b] = swapValues(a, b);
console.log(a, b);

// Q6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(array) 
{
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) 
  {
    reverse.push(array[i]);
  }
  return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// Q7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let capitalizedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let capitalized = arr[i];
    if (typeof capitalized === "string" && capitalized.length > 0) 
    {
     capitalizedArray.push(capitalized[0].toUpperCase() + capitalized.slice(1).toLowerCase());
    } else {
      capitalized.push(capitalized); // if not a string or empty, just push as is
    }
  }
  return capitalizedArray;
}
const word = ["apple", "BANANA", "Cherry", "mango"];
const capitalizedWord = capitalizeArray(word);
console.log(capitalizedWord);

// Q8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.

let items = [];
function addItem(item) 
{
    items.push(item);
    return items;
}
console.log(addItem('HTML'));
console.log(addItem('CSS'));

// Q9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.

function removeItem(index) 
{
    if (index >= 0 && index < items.length) 
    {
        items.splice(index, 1);
    }
    return items;
}
console.log(removeItem(0));

// Q10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers (number)
{
  let sum = 0;
  for (let i = 1; i<= number; i++)
  {
     sum = sum + i;
  }
  return sum;
}
console.log(sumOfNumbers(7));

// Q11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds (number)
{
  let sum = 0;
  for( let i = 1; i<= number; i++)
  {
    if (i % 2 != 0)
    {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfOdds(10));

// Q12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven (number)
{
  let sum = 0;
  for( let i = 1; i<= number; i++)
  {
    if (i % 2 == 0)
    {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfEven(10));

// Q13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
/* evensAndOdds(100);
The number of odds are 50.
The number of evens are 51. */

function evensAndOdds(positive) 
{
  let even = 0;
  let odd = 0;
  for (let i = 0; i <= positive; i++) {
    if (i % 2 === 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
  }
  console.log("The number of odds are " + odd + ".");
  console.log("The number of evens are " + even + ".");
}
evensAndOdds(100);

// Q14. Write a function which takes any number of arguments and return the sum of the arguments.
/* sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10 */

function sum(...args) 
{
  let total = 0;
  for (let i = 0; i < args.length; i++) 
  {
    total =  total + args[i];
  }
  return total;
}    
console.log(sum(1, 2, 3, 4));    

// Q15. Writ a function which generates a randomUserIp.

function randomUserIp ()
{
  let octet1 = Math.floor (Math.random() * 256);
  let octet2 = Math.floor (Math.random() * 256);
  let octet3 = Math.floor (Math.random() * 256);
  let octet4 = Math.floor (Math.random() * 256);
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}
console.log(randomUserIp());

// Q16. Write a function which generates a randomMacAddress.


// Q17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator ()
{
const hex = [];
for (let i = 0; i < 6; i++)
{
  hex.push(Math.floor(Math.random() * 16).toString(16));
}
let hexNumber = '#' + hex.join('');
return hexNumber;
}
console.log(randomHexaNumberGenerator());

// Q18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator ()
{
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let arr = [];
for ( i = 0; i < 7; i++) 
{
  arr.push(char[Math.floor(Math.random() * char.length)]);
}
let id = arr.join('');
 return id;
}
console.log(userIdGenerator());

