// Q1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
const price1 = products.map(item => Number(item.price));
const price2 = price1.filter(price => ! isNaN(price) && price > 0);
const totalPrice = price2.reduce((sum, price) => sum + price, 0);
console.log(totalPrice);

// Q2,.Find the sum of price of products using only reduce reduce(callback)).

const Sum = products.reduce((accumulator, product) => {
  const price = Number(product.price);
  return accumulator + (isNaN(price) ? 0 : price);
}, 0);
console.log(Sum); 

// Q3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'India'];
function categorizeCountries()
{
 const patterns = ['land', 'ia', 'island', 'stan'];
 const categorize = countries.filter(country => patterns.some(pattern => country.toLowerCase().includes(pattern))
 );
 return categorize;
}
console.log(categorizeCountries(countries));

// Q4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const letter = countries.reduce((acc, country) => {
const initial = country[0];
acc[initial] = (acc[initial] || 0) + 1;
return acc;
},{});
console.log(letter);

// Q5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const Countries = ['Australia', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'France','Germany', 'Hungary', 'Ireland','India', 'Japan', 'Kenya', 'Lebanon', 'Malaysia', 'Nepal', 'Oman', 'Panama','Qatar', 'Russia', 'Srilanka', 'Tunisia', 'United States', 'Venezuela', 'Yemen','Zimbabwe'];
function getFirstTenCountries()
{
  return Countries.slice(0, 10);
}
console.log(getFirstTenCountries(Countries));

function CountryToUppercase() 
{
 return Countries.map((Country) => Country.toUpperCase());
}
console.log(CountryToUppercase(Countries));

function CountriesEndsByia()
{
  return Countries.filter((Country) => Country.endsWith('ia'));
}
console.log(CountriesEndsByia(Countries));

const result1 = Countries.find((Country) => Country.length === 5);
console.log(result1);

const result2 = Countries.findIndex((Country) => Country.length === 5);
console.log(result2);

// Q6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries()
{
  return Countries.slice(-10);
}
console.log(getLastTenCountries(Countries));

// Q7.Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc).
const initialLetter = Countries.reduce((acc, country) => {
const initial = country[0];
acc[initial] = (acc[initial] || 0) + 1;
return acc;
},{});
console.log(initialLetter);
