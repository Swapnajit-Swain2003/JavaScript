// ------- EXERCISE LEVEL-1 --------

// Q1. Display the countries array as a table.


const Countries = ['Australia', 'Bangladesh', 'Canada', 'Denmark', 'Egypt', 'France', 'Germany', 'Hungary', 'India', 'Japan', 'Kenya', 'Lebanon', 'Malaysia', 'Newzealand', 'Oman', 'Portugal', 'Qatar', 'Russia', 'Srilanka', 'Thailand', 'United States', 'Venezuela', 'Yemen','Zimbabwe'];

console.table(Countries);



// Q2. Display the countries object as a table.


const countries = 
[
  { name: "India", 
    capital: "New Delhi", 
    population: 1463865525
  },
  { name: "China", 
    capital: "Beijing", 
    population: 1416096094 
  },
  { name: "United States", 
    capital: "Washington", 
    population: 347275807
  },
  { name: "Russia", 
    capital: "Moscow", 
    population: 143997393
  },
  { name: "Brazil", 
    capital: "Brasília", 
    population: 212812405
  },
  { name: "Bangladesh", 
    capital: "Dhaka", 
    population: 175686899
  },
  { name: "United Kingdom", 
    capital: "London", 
    population: 69600700
  },
  { name: "Australia", 
    capital: "Canberra", 
    population: 28012900
  }
];

console.table(countries);



// Q3. Use console.group() to group logs


const names = ['Asabeneh', 'Brook', 'David', 'John']
const country = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  }
]
//  -- NAMES --
console.group('Names:');
console.log(names);
console.groupEnd();
//  -- COUNTRY -- 
console.group('Country:');
console.log(country);
console.groupEnd();
//  -- USERS --
console.group('Users:');
console.log(user);
console.log(users);
console.groupEnd();



// -------- EXERCISE LEVEL-2 --------

// Q1. 10 > 2 * 10 use console.assert()


console.assert(10 > 2 * 10, '10 is not greater than 2 * 10 ');

//  Q2. Write a warning message using console.warn()


console.warn('This is a warning message');

// Q3. Write an error message using console.error()


console.error('This is an error message');




//  ---------- EXERCISE LEVEL-3 ----------

// Q1. Check the speed difference among the follwing loops. while,for,for of, forEach.

const number = [1, 5, 7]


// for loop
console.time('for loop')
for (let i = 0; i < number.length; i++) 
{
  console.log(number[i])
}
console.timeEnd('for loop')
console.log(' ');


// while
console.time('while');
let i = 0;
while (i < number.length) {
  console.log(number[i]);
  i++;
}
console.timeEnd('while');
console.log(' ');


// for of loop
console.time('for of loop')
for (const num of number) 
{  
  console.log(number)
}
console.timeEnd('for of loop')
console.log('');


// forEach loop
console.time('forEach loop')
number.forEach((num) => {
  console.log(num)
})
console.timeEnd('forEach loop')
