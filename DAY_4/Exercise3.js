// Q1. Write a program which tells the number of days in a month.
/*  
 Enter a month: January
January has 31 days.

Enter a month: JANUARY
January has 31 day

Enter a month: February
February has 28 days.

Enter a month: FEbruary
February has 28 days. 
*/

let monthUserInput =prompt("Enter a Month:");
let month = monthUserInput[0].toUpperCase() + monthUserInput.slice(1).toLowerCase();

if(["January","March","May","July","August","October","December"].includes(month)){
    console.log(`${month} has 31 days.`);
}else if (["April","June","September","November"].includes(month)){
    console.log(`${month} has 30 days.`);
}else if("February"){
    console.log(`${month} has 28 days.`);
}else {
    console.log("Enter a valid month.");
}

// Q2. Write a program which tells the number of days in a month, now consider leap year.
// Example: month = 2, year = 2024
let Month = prompt("Enter Month in number format(1-12):")
let year = prompt("Enter year:")
let days;

if ([Month === 1,3,5,8,10,12].includes(Number(Month))) {
    days = 31;
} else if ([Month === 4,6,7,9,11].includes(Number(Month))) {
    days = 30;
} else if (Number(Month)) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29;
    } else {
        days = 28;
    }
} else {
    days = "Invalid month";
}

console.log("Number of days =", days);
