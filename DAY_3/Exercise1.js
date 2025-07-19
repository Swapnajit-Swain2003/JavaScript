// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Swapnajit';
let lastName = 'Swain';
let country = 'India';
let city = 'Jajpur';
let age = 23;
let isMarried = true;
let year= 2003;

console.log("firstName:", typeof firstName);
console.log("lastName:", typeof lastName);
console.log("country:",typeof country);
console.log("city:", typeof city);
console.log("age:", typeof age);
console.log("isMarried:", typeof isMarried);
console.log("year:", typeof year);

// 2. Check if type of '10' is equal to 10.
console.log(typeof('10')=== 10);

// 3. Check if parseInt('9.8') is equal to 10.
console.log(parseInt('9.8')=== 10);

// 4.Boolean value is either true or false.
 // i. Write three JavaScript statement which provide truthy value.  
console.log(Boolean(42));          
console.log(Boolean("hello"));     
console.log(Boolean(4>3));
//  ii. Write three JavaScript statement which provide falsy value.
console.log(Boolean(0));        
console.log(Boolean(""));       
console.log(Boolean(null));  

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()   
//  i. 4 > 3
console.log(4>3);
// ii. 4 >= 3
console.log(4>=3);
// iii. 4 < 3
console.log(4 < 3);
// iv. 4 <= 3
console.log(4 <= 3);
// v. 4 == 4
console.log(4 == 4);
// vi. 4 === 4
console.log(4 === 4);
// vii. 4 != 4
console.log(4 != 4);
// viii. 4 !== 4
console.log(4 !== 4);
// ix. 4 != '4'
console.log(4 != '4');
// x. 4 == '4'
console.log(4 == '4');
// xi. 4 === '4'
console.log(4 === '4');
// xii. Find the length of python and jargon and make a falsy comparison statement.
let word1 = "python";
let word2 = "jargon";

console.log( word1.length);
console.log( word2.length);

console.log(word1.length !== word2.length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//  i. 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12);
// ii. 4 > 3 && 10 > 12
console.log(4 > 3 && 10 > 12);
// iii. 4 > 3 || 10 < 12
console.log(4 > 3 || 10 < 12); 
// iv. 4 > 3 || 10 > 12
console.log(4 > 3 || 10 > 12);
// v. !(4 > 3)
console.log(!(4 > 3));
// vi. !(4 < 3)
console.log(!(4 < 3));
// vii. !(false)
console.log(!(false));
// viii. !(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12));
// ix. !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12));
// x. !(4 === '4')
console.log(!(4 === '4'));
// xi. There is no 'on' in both dragon and python.
let str1 = 'dragon';
let str2 = 'python';
console.log(str1.includes('on'));
console.log(str2.includes('on'));

console.log(!(str1.includes("on") && str2.includes("on"))); 

// 7. Use the Date object to do the following activities
// i. What is the year today?
const crYear = new Date();
console.log(crYear.getFullYear());
// ii. What is the month today as a number?
const crMonth = new Date();
console.log(crMonth.getMonth());
// iii. What is the date today?
const crDate = new Date();
console.log(crDate.getDate());
// iv. What is the day today as a number?
const crDay = new Date();
console.log(crDay.getDay());
// v. What is the hours now?
const crHours = new Date();
console.log(crHours.getHours());
// vi. What is the minutes now?
const crMinutes = new Date();
console.log(crMinutes.getMinutes());
// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const allSeconds = Date.now() //
console.log(allSeconds) 

