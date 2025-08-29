// Q1.create an empty set.

const set = new Set()
console.log(set); 
console.log(set.size);

// Q2. Create a set containing 0 to 10 using loop.

const setOfNumber = new Set()
for(let i = 0; i<= 10; i++)
{
 setOfNumber.add(i);
}
console.log(setOfNumber);

// Q3. Remove an element from a set.

for (const number of setOfNumber) {
  setOfNumber.delete(0)
}
console.log(setOfNumber);

// Q4.Clear a set.

for (const number of setOfNumber) {
  setOfNumber.delete(number)
}
console.log(setOfNumber);

// Q5.Create a set of 5 string elements from array

const array = ['HTML', 'CSS', 'JS', 'SQL', 'REACT'];

const newArray =  new Set(array)
console.log(newArray);

// Q6. Create a map of countries and number of characters of a country.

countries = ['India', 'England', 'Australia', 'Japan', 'Srilanka', 'Newzealand', 'Germany', 'United States Of America', 'Russia'];
const mapOfCountries = new Map();
for(let country of countries)
{
  countriesMap.set(country, country.length);
}
for(let [country, length] of countriesMap)
{
  console.log(`${country} = ${length} characters`);
}
