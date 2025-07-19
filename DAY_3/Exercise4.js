// Q14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.
/* Enter number of years you live: 100
You lived 3153600000 seconds. */

let years =parseFloat(prompt("Enter number of years you live:"));
let seconds = years * 365 * 24 * 60 * 60;
if((years != 0) && (years != null))
{
 alert(`You lived ${seconds} seconds.`);
}else
{
    alert(`Invalid input.`)
}

// Q15. Create a human readable time format using the Date time object
// i.YYYY-MM-DD HH:mm
const Now = new Date();
const Year = Now.getFullYear();
const Month = Now.getMonth() + 1;
const date = Now.getDate();
const hours = Now.getHours();
const minutes = Now.getMinutes();
console.log(`${Year}-${Month}-${date} ${hours}:${minutes}`);

// ii.DD-MM-YYYY HH:mm
console.log(`${date}-${Month}-${Year} ${hours}:${minutes}`);

// iii.DD/MM/YYYY HH:mm
console.log(`${date}/${Month}/${Year} ${hours}:${minutes}`);

// Q1(Level-3) Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// i.YYYY-MM-DD HH:mm eg. 2020-01-02 07:05
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');
const minute = String(now.getMinutes()).padStart(2, '0');

const formatted = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(formatted); // e.g., 2025-07-19 22:35