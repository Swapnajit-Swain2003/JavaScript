// Q1. Declare a function fullName and it print out your full name.

function fullName ()
{
    let name = 'Swapnajit Swain';
    console.log(name);
}
fullName();

//  Q2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function nameFull(firstName, lastName) 
{
    let Fullname = firstName + ' ' + lastName;
    return Fullname;
}
let Value = nameFull('Swapnajit', 'Swain');
console.log(Value); 

//  Q3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(numberOne, numberTwo)
{
    sum =  numberOne + numberTwo;
    return sum;
}
let value = addNumbers(7, 8);
console.log(value);

// Q4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle (length, width)
{
 area = length * width;
 return area;
}
let rectangle = areaOfRectangle(25, 15);
console.log(rectangle);

// Q5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle (length, width)
{
 perimeter = 2 * (length + width);
 return perimeter;
}
// console.log(perimeterOfRectangle(25, 15));
let PerimeterRectangle = perimeterOfRectangle(25, 15);
console.log(PerimeterRectangle);

// Q6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism (length, width, height)
{
 volume = length * width * height;
 return volume;
}
// console.log(volumeOfRectPrism(10,20,30));
let prism = volumeOfRectPrism(10,20,30);
console.log(prism);

// Q7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.

function areaOfCircle (r)
{
 area = 3.14 * r * r ;
 return area;
}
// console.log(areaOfCircle( 10));
let circle = areaOfCircle( 10);
console.log(circle);

// Q8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.

function circumOfCircle (r)
{
    circumference = 2 *3.14 * r ;
    return circumference;
}
// console.log(circumOfCircle(5));
let Circle = circumOfCircle(5);
console.log(Circle);

// Q9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityOfSubstance (mass, volume)
{
 density = mass/volume;
 return density;
}
// console.log(densityOfSubstance(50,10));
let Result = densityOfSubstance(50,10);
console.log(Result);

// Q10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateSpeed(distance, time) 
{
  speed = distance / time;
  return speed;
}
 let object = calculateSpeed(20, 2);
console.log(`Speed = ${object} meters/second`);

// Q11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. 

function calculateWeight (mass)
{
  weight = mass * 9.81 ;
  return weight;
}
// console.log(calculateWeight(25));
let substance = calculateWeight(25);
console.log(substance);

// Q12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit (oC )  // Temperature in Celsius
{
    oF = (oC * 9/5) + 32;
    return oF;
}
// console.log(convertCelsiusToFahrenheit(37));
let Temperature = convertCelsiusToFahrenheit(37);
console.log(Temperature);

// Q13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function calculateBMI(weight, height) // weight in kilograms, height in meters
{
  const bmi = weight / (height * height);
  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }
  return { bmi, category };
}
const result = calculateBMI(70, 1.6);
console.log(`BMI = ${result.bmi}, Category: ${result.category}`);

// Q14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) 
{
  month = month.toLowerCase();
  if (['july','august','september'].includes(month)) 
  {
    return 'Autumn';
  } else if (['october','november','december'].includes(month)) 
  {
    return 'Winter';
  } else if (['january','february','march'].includes(month)) 
  {
    return 'Spring';
  } else if (['april','may','june'].includes(month)) 
  {
    return 'Summer';
  } else 
  {
    return 'Invalid month';
  }
}
console.log(checkSeason('APRIL'));  

// Q15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) 
{
  return Math.max(num1, num2, num3);
}
const maxNumber = findMax(10, 25, 15);
console.log("Maximum number is:", maxNumber);

