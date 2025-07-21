// Q1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/* Enter your age: 30
You are old enough to drive.
Enter your age:15
You are left with 3 years to drive.*/

let age = Number(prompt("Enter your age:"));
let wait = 18 - age;
if (age >= 18) {
  alert(`You are old enough to drive`);
} else {
  alert(` You are left with ${wait} year(s) to  to drive.`);
}

// Q2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/* Enter your age: 30
You are 5 years older than me.*/

yourAge = Number(prompt("Enter your age:"));
let myAge = 23;
if (yourAge > myAge){
 console.log(`You are ${yourAge - myAge} year(s) older than me.`);
}else if (yourAge < myAge){
    console.log(`I am ${myAge - yourAge} year(s) older than you.`);
}else{
    console.log(`Both are same age.`);
}

// Q3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways.
/*   let a = 4
     let b = 3 */

//  i. using if else
    let a = 4;
    let b = 3;
    if (a>b){
        console.log("a is greater than b");
    }else{
        console.log("a is less than b");
    }

    // ii. ternary operator

 (a > b) 
 ? console.log("a is greater than b")
 : console.log("a is less than b");

//  Q4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number;
number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
  console.log("The number is even.");
}else{
    console.log("The number is odd.");
}

