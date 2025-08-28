//Q1.Use the countries information, in the data folder. Sort countries by name, by capital, by population.

const countries = 
[
  { name: "India", capital: "New Delhi", population: 1463865525 },
  { name: "China", capital: "Beijing", population: 1416096094 },
  { name: "United States", capital: "Washington", population: 347275807 },
   { name: "Russia", capital: "Moscow", population: 143997393 },
  { name: "Nigeria", capital: "Abuja", population: 237527782 },
  { name: "Brazil", capital: "Brasília", population: 212812405 },
  { name: "Bangladesh", capital: "Dhaka", population: 175686899 },
  { name: "Ethiopia", capital: "Addis Ababa", population: 135472051 },
  { name: "Egypt", capital: "Cairo", population: 112716599 },
  { name: "Mexico", capital: "Mexico City", population: 129875529 }, 
  { name: "DR Congo", capital: "Kinshasa", population: 104899933 }, 
  { name: "Philippines", capital: "Manila", population: 113914943 }, 
  { name: "Vietnam", capital: "Hanoi", population: 100208408 },   
  { name: "Indonesia", capital: "Jakarta", population: 285721236 },
   { name: "Pakistan", capital: "Islamabad", population: 255219554 },    
];
console.log(countries);
countries.sort((a,b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0 
})
console.log(countries);

countries.sort((a,b) => {
    if (a.population > b.population) return -1  
    if (a.population < b.population) return 1  
})
console.log(countries);

countries.sort((a,b) => {
    if (a.capital < b.capital) return -1  
    if (a.capital > b.capital) return 1  
})
console.log(countries);

// Q2. Find the 10 most spoken languages:



function mostSpokenLanguages(Countries, n)
{

}

// Q3.Use countries_data.js file create a function which create the ten most populated countries.

function mostPopulatedCountries(countries)
{
   countries.sort((a, b) => b.population - a.population);
   return countries.slice(0, 10);
}
console.log(mostPopulatedCountries(countries));

// Q4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
