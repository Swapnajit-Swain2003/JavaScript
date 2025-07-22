// Q1. Declare an empty array.
const arr = [];

// Q2. Declare an array with more than 5 number of elements.
const numbers = [7, 17, 33, 45, 93];

// Q3. Find the length of your array.
console.log(numbers.length);

// Q4. Get the first item, the middle item and the last item of the array.
console.log(numbers[0], numbers[2], numbers[4]);

// Q5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5.
const mixedDataTypes = [2, 'HTML',true,[1,2],null,{firstName:"John"}];
console.log(mixedDataTypes.length);

// Q6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

// Q7.Print the array using console.log()
console.log(itCompanies);

// Q8.Print the number of companies in the array.
console.log(itCompanies.length);

// Q9. Print the first company, middle and last company.
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

// Q10.Print out each company.

// Q11. Change each company name to uppercase one by one and print them out
let  index1 = itCompanies[0].toUpperCase();
let  index2 = itCompanies[1].toUpperCase();
let  index3 = itCompanies[2].toUpperCase();
let  index4 = itCompanies[3].toUpperCase();
let  index5 = itCompanies[4].toUpperCase();
let  index6 = itCompanies[5].toUpperCase();
let  index7 = itCompanies[6].toUpperCase();
console.log(index1,index2,index3,index4,index5,index6,index7);

// Q12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = itCompanies.slice(0, 5).join(", ") + " and " + itCompanies.slice(-1) + " are big IT companies.";
console.log(sentence);

// Q13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
let Check =  'Apple';
if(itCompanies.includes(Check)){
    console.log("The company exists.");
}else{
    console.log("Comapny is not found.");
}

// Q14. Filter out companies which have more than one 'o' without the filter method.

// Q15.Sort the array using sort() method.
console.log(itCompanies.sort());

// Q16. Reverse the array using reverse() method.
console.log(itCompanies.reverse());

// Q17. Slice out the first 3 companies from the array.
console.log(itCompanies.slice(0,3));

// Q18. Slice out the last 3 companies from the array.
console.log(itCompanies.slice(4));

// Q19. Slice out the middle IT company or companies from the array.
console.log(itCompanies.slice(3,4));

// Q20. Remove the first IT company from the array.
itCompanies.shift()
console.log(itCompanies);

// Q21. Remove the middle IT company or companies from the array.


// Q22. Remove the last IT company from the array.
itCompanies.pop()
console.log(itCompanies);

// Q23. Remove all IT companies.
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);