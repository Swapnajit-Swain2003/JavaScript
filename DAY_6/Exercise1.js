// Q1. Iterate 0 to 10 using for loop, do the same using while and do while loop.

// loop
for(let i = 0; i <= 10; i++)
{
  console.log(i)
}

// while
let i = 1;
while(i <= 10 )
{
    console.log(i);
    i++;
}

// do while loop
let j = 0
do {
  console.log(j)
  j++
} while (j <= 10)

// Q2. Iterate 10 to 0 using for loop, do the same using while and do while loop.

// loop
for(let i = 10; i >= 0; i--)
{
  console.log(i)
}

// while
 i = 10;
while(i >= 0 )
{
    console.log(i);
    i--;
}

// do while loop
 j = 10;
do {
  console.log(j)
  j--
} while (j >= 0)

 // Q3. Iterate 0 to n using for loop.
 let n = 7;
 for(let i = 0; i <= n; i++)
{
  console.log(i)
}

// Q4. Write a loop that makes the following pattern using console.log():
/* 
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */
 let m = 7;
 for(let i = 0; i <= m; i++)
{
  console.log('#'.repeat(i));
}

// Q5. Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for(i = 0; i<=10; i++)
{
    console.log(`${i}*${i} = ${i*i}`);
}

// Q6. Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
console.log(`i\t i^2\t i^3\t`);
for(i = 0; i<=10; i++)
{
    console.log(`${i}\t ${i*i}\t ${i*i*i}\t`);
}

// Q7. Use for loop to iterate from 0 to 100 and print only even numbers.
for(i = 0; i<=100; i++)
{
    if(i % 2 == 0) 
    {
     console.log(i);
    }
}

// Q8. Use for loop to iterate from 0 to 100 and print only odd numbers.
for(i = 0; i<=100;i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}

// Q9. Use for loop to iterate from 0 to 100 and print only prime numbers.
for (i = 2; i <= 100; i++) {
  let prime = 0;
  for ( j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = 1;
      break;
    }
  }
  if (prime == 0) {
    console.log(i);
  }
}

// Q10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.

let sum = 0;
for(i = 0; i<=100;i++)
{
    sum = sum+i;
}
console.log(`The Sum of all numbers from 0 to 100 is ${sum}`);

// Q11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let oddSum = 0;
let evenSum = 0;
for(i = 0; i<=100;i++)
{
    if(i % 2 == 0)
    {
        evenSum = evenSum+i;
    }
    else
    {
       oddSum = oddSum+i;
    }
}   
console.log(`The Sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`);

// Q12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array.
//   [2550, 2500]

const Arr = [evenSum,oddSum];
console.log(Arr);

// Q13. Develop a small script which generate array of 5 random numbers.
let Numbers = [];
for (let i = 0; i < 5; i++) {
  Numbers.push(Math.floor(Math.random() * 100) + 1); 
}
console.log(Numbers);


// Q14. Develop a small script which generate array of 5 random numbers and the numbers must be unique.
let numbers = new Set();
while (numbers.size < 5) {
    let Random = Math.floor(Math.random() * 100) + 1;
    numbers.add(Random);
}
let uniqueArray = [numbers];
console.log(uniqueArray);

// Q15. Develop a small script which generate a six characters random id:
// 5j2khz

const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
let arr = [];
for (let i = 0; i < 6; i++) 
{
  arr.push(char[Math.floor(Math.random() * char.length)]);
}
let id = arr.join('');
console.log(id);

