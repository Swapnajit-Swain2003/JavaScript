// ------- EXERCISE LEVEL-1 --------
// Q1.Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’


const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
const salary = text.match(/\d+/g).map(Number);
console.log(salary);

const annualSalary = salary[0] * 12;
const annualBonus = salary[1];
const annualCourseIncome = salary[2] * 12;
const totalSalary = annualSalary + annualBonus + annualCourseIncome;

console.log('Total Annual Income:',totalSalary);

// Q2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.


const position = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
const points = position.match(/-?\d/g).map(Number);
console.log(points);
const sortedPoints = points.sort((a, b) => a - b);
console.log(sortedPoints);

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log(' Distance between the furthest particles is :',distance);

// Q3. Write a pattern which identify if a string  is a valid JavaScript variable.


function is_valid_variable(string)
{
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(string);
}

console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));



// -------- EXERCISE LEVEL-2 ---------
// Q1.Write a function called tenMostFrequentWords which get the ten most frequent word from a string?


const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'

function tenMostFrequentWords(string)
{
 const para = paragraph.toLowerCase().match(/\w+/g)

 const counts = para.reduce((counts, word) => {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
 }, {});

 const sortedWords = Object.entries(counts).sort((a, b) => b[1] - a[1]);
 const frequentWord = sortedWords.slice(0, 10).map(([word, count]) => ({word,count}));
 return frequentWord;
}

console.log(tenMostFrequentWords(paragraph))



// ----------- EXERCISE LEVEL-3 -----------
// Q1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(string)
{
  const matches = string.replace(/[%@#$&;,.!?]/g, '').replace(/\s{2,}/g, ' ').trim();
  return matches
}
console.log(cleanText(sentence));

function threeMostFrequentWords(string)
{
 const words = cleanText(string).toLowerCase().match(/\w+/g)

  const counts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
 }, {});

 const sortedWord = Object.entries(counts).sort((a, b) => b[1] - a[1]);
 const mostFrequentWords = sortedWord.slice(0, 3).map(([word, count]) => ({word, count}));
 return mostFrequentWords;
}

console.log(threeMostFrequentWords(sentence));



