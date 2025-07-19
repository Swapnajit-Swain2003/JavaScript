// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/* Enter base: 20
Enter height: 10
The area of the triangle is 100 */

let base = parseFloat(prompt("Enter base:"));
let height = parseFloat(prompt("Enter height:"));

let area = 0.5 * base * height;
alert(`The area of the triangle is ${area}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) 
/*Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */
let a = parseFloat(prompt("Enter side a:"));
let b = parseFloat(prompt("Enter side b:"));
let c = parseFloat(prompt("Enetr side c:"));

let perimeter = a+b+c;
alert(`The perimeter of the triangle is ${perimeter}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = parseFloat(prompt("Enter length:"));
let width = parseFloat(prompt("Enter width:"));
let Area = length*width;
let Perimeter = 2*(length+width);
alert(`Area is ${Area} and Perimeter is ${Perimeter}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = parseFloat(prompt("Enter Radius:"));
let circleArea = 3.14*radius*radius;
let circumference = 2*3.14*radius;
alert(`Area is:${circleArea} and Circumference is:${circumference}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2.
