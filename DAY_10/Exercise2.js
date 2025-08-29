// Q1. Find a union b

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b]

const A = new Set(a);
const B = new Set(b);
const C = new Set(c);

console.log(A);
console.log(B);
console.log(C);

// Q2.Find a intersection b.

const d = a.filter((num) => B.has(num));
const D = new Set(d);
console.log(D);

// Q3. Find a with b.
 
const e = a.filter((num) => ! B.has(num));
const E = new Set(e);
console.log(E);

// LEVEL-3
// Q1. How many languages are there in the countries object file.

 const countries =
[
 {country: 'English', count: 91},
 {country: 'French', count: 45}, 
 {country: 'Arabic', count: 25}, 
 {country: 'Spanish', count: 24}, 
 {country: 'Russian', count: 9}, 
 {country: 'Portuguese', count: 9}, 
 {country: 'Dutch', count: 8}, 
 {country: 'German', count: 7},
 {country: 'Hindi', count: 7}, 
 {country: 'Chinese', count: 5}, 
 {country: 'Swahili', count: 4}, 
 {country: 'Italian', count: 4}, 
 {country: 'Turkish', count: 2}, 
 {country: 'Greek', count: 2}, 
 {country: 'Malay', count: 3} 
];
const countrySet = new Set(countries.map(item => item.country));
const countSet = new Set(countries.map(item => item.count));
console.log(`There are ${countrySet.size} languages are in the countries objects.`);

// Q2. Use the countries data to find the most spoken languages:

function mostSpokenLanguages(array, n)
{
    const sortedArray = array.sort((a, b) => b.count - a.count);
    const languages = sortedArray.slice(0, n).map(item => ({ [item.country]: item.count }));
    return languages;
}
   console.log(mostSpokenLanguages(countries, 10))
   


