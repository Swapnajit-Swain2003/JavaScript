// Q1. Develop a small script which generate any number of characters random id:
/*        fe3jo1gl124g
    xkqci4utda1lmbelpkm03rba 
*/
// let length = Number(prompt("Enter the length"));
let length = 15;
const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
let arr = [];
for ( i = 0; i < length; i++) 
{
  arr.push(char[Math.floor(Math.random() * char.length)]);
}
let id = arr.join('');
console.log(id);

// Q2. Write a script which generates a random hexadecimal number.
// '#ee33df'

const hex = [];
for (let i = 0; i < 6; i++)
{
  hex.push(Math.floor(Math.random() * 16).toString(16));
}
let hexNumber = '#' + hex.join('');
console.log(hexNumber);

// Q3. Write a script which generates a random rgb color number.
for (let i = 0; i < 1; i++) 
{
    let r = Math.floor(Math.random() * 256);
    let  g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log(rgb);
}

// Q4.Using the above countries array, create the following new array.
/* ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]*/

const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Central African Republic','Chad','Chile','China','Colombi','Comoros','Congo (Brazzaville)','Congo','Costa Rica',"Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor Timur)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia, The','Georgia','Germany', 'Ghana','Greece','Grenada','Guatemala', 'Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan', 'Kenya','Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos','Latvia','Lebanon','Lesotho','Liberia','Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon' ,'Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']

const country = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const array = [];
for (let i = 0; i < countries.length; i++)
{
  if (country.includes(countries[i])) 
 {
    array.push(countries[i].toUpperCase());
 }
}
console.log(array);

// Q5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
 
let countryLength = [];
for (let i = 0; i< country.length; i++)
{
    countryLength.push(country[i].length);
}
console.log(countryLength);

// Q6. Use the countries array to create the following array of arrays:
/*
[ ['Albania', 'ALB', 7],['Bolivia', 'BOL', 7],['Canada', 'CAN', 6],['Denmark', 'DEN', 7],['Ethiopia', 'ETH', 8],     ['Finland', 'FIN', 7],['Germany', 'GER', 7], ['Hungary', 'HUN', 7], ['Ireland', 'IRE', 7], ['Iceland', 'ICE', 7],
['Japan', 'JAP', 5],['Kenya', 'KEN', 5] ]
*/

const result = [];
for (let i = 0; i < country.length; i++) 
{
  const newCountry = country[i];
  const big = newCountry.slice(0, 3).toUpperCase();
  const length = newCountry.length;
  result.push([newCountry, big, length]);
}
console.log(result);

// Q7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']

const Array = [];
for(let i = 0; i < country.length; i++)
{
  if(country[i].includes('land'))
  {
    Array.push (country[i])
  }
}
if (Array.length > 0) {
  console.log(Array);
} else
{
  console.log('All these countries are without land');
}

// Q8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

const subSting = [];
for(let i = 0; i< country.length; i++)
{
  if(country[i].endsWith('ia'))
  {
    subSting.push (country[i])
  }
}
  if(subSting.length > 0)
  {
    console.log(subSting);
  }else
  {
    console.log('These are countries ends without ia');
  }

  // Q9. Using the above countries array, find the country containing the biggest number of characters.
let longest = "";
for (let i = 0; i < country.length; i++) 
{
  if (country[i].length > longest.length) 
  {
    longest = country[i];
  }
}
console.log(longest);
// Q10. Using the above countries array, find the country containing only 5 characters.
const countryFive = [];
for (let i = 0; i < country.length; i++) 
{
  if (country[i].length === 5) 
  {
    countryFive.push (country[i]);
  }
}
console.log(countryFive);

// Q11. Find the longest word in the webTechs array.

const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
let longWord = "";
for (let i = 0; i< webTechs.length; i++)
{
  if(webTechs[i].length > longWord.length)
  {
    longWord = webTechs[i];
  }
}
console.log(longWord);

// Q12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const newWeb = [];
for (let i = 0; i < webTechs.length; i++) 
{
  const newArray = webTechs[i];
  const cap = newArray.toUpperCase();
  const length = newArray.length;
  newWeb.push([cap, length]);
}
console.log(newWeb);

// Q13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack.

const mernStack = ['MongoDB','Express','React','Node'];
let acronym = '';
for(let i = 0; i< mernStack.length; i++)
{
 acronym = acronym + mernStack[i] [0];
}
console.log(acronym);


// Q14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

// // for loop
// for(let i = 0; i< tech.length; i++)
// {
//   console.log(tech[i]);
// }

// for of loop
for (const language of tech) {
  console.log(language)
}

//  Q15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruit = ['banana', 'orange', 'mango', 'lemon'];
const reverse = [];

for (let i = fruit.length - 1; i >= 0; i--) 
{
  reverse.push(fruit[i]);
}
console.log(reverse);

// Q16. Print all the elements of array as shown below.
 const fullStack = [
['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
    ];
    for(let i = 0; i< fullStack.length; i++)
    {
      for(let j = 0; j<fullStack[i].length; j++)
      {
        console.log(fullStack[i][j]);
      }
    }
