// 1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. 
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a ='10';
let b =10;
console.log(typeof(a) == typeof(b));

a = Number(a);
console.log(typeof(a) == typeof(b));

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = parseFloat('9.8')
console.log(num == 10);

num = Math.round(parseFloat('9.8'));
console.log(num);

// 5. Check if 'on' is found in both python and jargon.
let python = 'python';
console.log(python.includes('on'));

let jargon = 'jargon';
console.log(jargon.includes('on'));

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.
const number = Math.floor(Math.random () * 101);
console.log(number);

// 8. Generate a random number between 50 and 100 inclusively.
const randomNumber = Math.floor(Math.random () * 51)+50;
console.log(randomNumber);

// 9. Generate a random number between 0 and 255 inclusively.
const newNumber = Math.floor(Math.random () * 256);
console.log(newNumber);

// 10. Access the 'JavaScript' string characters using a random number.
const str = "JavaScript";
const randomIndex = Math.floor(Math.random() * 10);
const randomChar = str[randomIndex];

console.log(`Random character: ${randomChar}`);

/* 11. Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let statement = "You cannot end a sentence with because because because is a conjunction";
console.log(statement.indexOf('because'));
console.log(statement.lastIndexOf('because'));
console.log(statement.slice(31,54));
