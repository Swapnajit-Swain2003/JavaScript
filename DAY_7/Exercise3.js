// Q1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

//  function userIdGeneratedByUser() 
// {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let length = prompt('Enter number of characters for the user ID:');
//     let ids = prompt('Enter the number of IDs to generate:');

//     for (let i = 0; i < ids; i++) 
//     {
//         let id = '';
//         for (let j = 0; j < length; j++) 
//         {
//             let randomIndex = Math.floor(Math.random() * chars.length);
//             id = id + chars[randomIndex];
//         }
//         console.log(id);
//     }
// }
// userIdGeneratedByUser();

// Q2.Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator()
{
 for (let i = 0; i<1; i++)
 {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
 }
}
console.log(rgbColorGenerator());

// Q3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(num) 
{
  const hexColors = [];
  for (let i = 0; i < num; i++) 
  {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    hexColors.push(color);
  }
  return hexColors;
}
console.log(arrayOfHexaColors(7));

// Q4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(number)
{
    const rgbColor = [];
    for (let i = 0; i<number; i++)
 {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    rgbColor.push(rgb);
 }
  return rgbColor;
}
console.log(arrayOfRgbColors(5));

// Q5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb (hex)
{
    let r = parseInt(hex.slice(1,3), 16);
    let g = parseInt(hex.slice(3,5), 16);
    let b = parseInt(hex.slice(5,7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}
let hexa = convertHexaToRgb("#f12b3c");
console.log(hexa);
console.log(convertHexaToRgb("#112B3C"));

// Q6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
  );
}
console.log(convertRgbToHexa(255, 140, 70));
console.log(convertRgbToHexa(77, 93, 0));    

// Q7.Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors (type, number)
{
  const Colors = [];
  for (let i = 0; i< number; i++)
  {
    if(type === "hexa")
    {
     const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
     Colors.push(color);
    }else if (type === "rgb")
    {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      Colors.push(rgb);
    }
  }
  return Colors;
}
console.log(generateColors("hexa", 3));
console.log(generateColors("rgb", 5));

// Q8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.

   function shuffleArray(arr) 
{
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) 
  {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}
const originalArray = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(originalArray);
console.log(shuffled);
console.log(shuffleArray([2,4,6,8,10]));

// Q9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number.

function factorial (number)
{
  let fact = 1;
  for(let i = 1; i<= number; i++)
  {
     fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));

// Q10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not.

function isEmpty(parameter) 
{
  if (parameter == null) 
    return true;

  if (typeof parameter === 'string' && parameter.trim() === '') 
    return true;

  if (Array.isArray(parameter) && parameter.length === 0) 
    return true;

  return false;
}
console.log(isEmpty("")); 
console.log(isEmpty(false)); 

// Q11.Call your function sum, it takes any number of arguments and it returns the sum.

function sum (...number)
{
  let Sum = 0 ;
  for(let i = 0; i < number.length; i++)
  {
    Sum = Sum + number[i];
  }
  return Sum;
}
console.log(sum(-3, 5, 9, -8, 7));

// Q12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(array) 
{
    if (!Array.isArray(array)) 
    {
      return "Enter a valid input.";
    }
    if (!array.every(item => typeof item === "number" && !isNaN(item)))
    {
      return "All array items must be valid.";
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) 
    {
        sum =  sum + array[i];
    }
    return sum;
}
console.log(sumOfArrayItems([5, 7, 9, 6])); 

// Q13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function averageOfArrayItems (array)
{
   if (!Array.isArray(array)) 
    {
      return "Enter a valid input.";
    }
    if (array.length === 0) 
    {
        return "Array should not be empty.";
    }
    if (!array.every(item => typeof item === "number" && !isNaN(item)))
    {
      return "All array items must be valid.";
    }
    let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
console.log(averageOfArrayItems([10, 20, 30, 40, 50]));

// Q14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray (array)
{
  if (!Array.isArray(array)) 
    {
      return "Enter a valid input.";
    }
    if(array.length < 5)
    {
      return "Item not found.";
    }
    array [4] = "LEMON";
    return array;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// Q15.Write a function called isPrime, which checks if a number is prime number.

function isPrime (number)
{
  if (number <= 1)
  {
    console.log(number + " is not a prime number");
    return false;
  }
  for(let i = 2; i< number; i++)
  {
    if(number % i === 0)
    {
      console.log(number + " is not a prime number");
      return false;
    }
  }
  console.log(number + " is a prime number");
  return true;
}
isPrime(11);

// Q16.Write a functions which checks if all items are unique in the array.

function unique(array) 
{
   for (let i = 0; i < array.length; i++) 
    {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) 
        {
            return false; 
        }
    }
    return true;
}
console.log(unique([1, 2, 3, 4]));

// Q17.Write a function which checks if all the items of the array are the same data type.

function sameDatatype (array)
{
  if (!Array.isArray(array))
  {
    return "Enter a valid input.";
  }
  if (array.length === 0)
  {
    return "Array is Empty.";
  }
  let first = typeof array[0];
  for(let i = 1; i < array.length; i++)
  {
   if(typeof array [i] !== first)
   {
    return false;
   }
  }
  return true;
}
console.log(sameDatatype([1, 3, 5, 7, 9]));

// Q18.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.



// Q19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomNumbers()
{
  let number = [];
  while (number.length < 7)
 {
    let randomNumber = Math.floor(Math.random() * 10);
    if (!number.includes(randomNumber)) 
   { 
     number.push (randomNumber);
   }
 }
  return number;
}
console.log(randomNumbers());

// Q20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array.

function reverseCountries(countriesArray) 
{
    if (!Array.isArray(countriesArray)) 
    {
        return "Enter an array.";
    }
    let copiedArray = [...countriesArray];
    let reversedArray = copiedArray.reverse();
    return reversedArray;
}
const countriesList = ["India", "USA", "Japan", "Germany", "Brazil"];
console.log(reverseCountries(countriesList)); 
