// Q5. Calculate the slope, x-intercept and y-intercept of y = 2x -2.

// Given equation: y = 2x - 2
let slope = 2;            // Slope is the coefficient of x

let yIntercept = -2;  // Put x=0 in the given equation (0,-2)

let xIntercept = -yIntercept / slope;  // (1,0)
console.log("Slope:", slope);
console.log("Y-intercept: (0, " + yIntercept + ")");
console.log("X-intercept: (" + xIntercept + ", 0)");
// Q6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const point1 = { x1: 2, y1: 2 };
const point2 = { x2: 6, y2: 10 };

const Slope = (point2.y2 - point1.y1) / (point2.x2 - point1.x1);
console.log("Slope:", Slope);

// Q7. Compare the slope of above two questions.
if (slope === Slope) {
  console.log("Both slopes are equal:");
} else if (slope > Slope) {
  console.log("Slope from Q5 is greater:");
} else {
  console.log("Slope from Q6 is greater:");
}

// Q8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.


// Q9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/* Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */
let hour = parseFloat(prompt("Enter hours:"));
let rate = parseFloat(prompt("Enter rate per hour:"));
let earning = hour*rate;
alert(`Your weekly earning is ${earning}`);

// Q10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let Name = 'Swapnajit';
if (Name.length > 7) {
  console.log(`Your name ${Name} is long.`)
} else {
  console.log(`Your name ${Name} is short.`)
}

// Q11. Compare your first name length and your family name length and you should get this output.
/*let firstName = 'Asabeneh'
let familyName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */
let firstName = 'Swapnajit';
let familyName = 'Swain';
if (firstName.length === familyName.length) {
  console.log("Both lengths are equal:");
} else if (firstName.length > familyName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${familyName}`);
} else {
  console.log(`Your family name, ${familyName} is longer than your first name, ${firstName}`);
}

// Q12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
/*let myAge = 250
let yourAge = 25 
I am 225 years older than you. */

let myAge = 25;
let yourAge = 17;
let difference = myAge - yourAge;
console.log(`I am ${difference} years older than you.`);

// Q13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/* Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/

const birthYear = prompt('Enter birth year:');
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
if(age>=18) {
  alert(`You are ${age}. You are old enough to drive.`);
}else{
   let wait = 18 - age;
  alert(`You are ${age}. You will be allowed to drive after ${wait} years.`);
}
