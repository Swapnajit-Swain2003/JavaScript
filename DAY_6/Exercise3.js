// Q1. Copy countries array(Avoid mutation)
const country = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
const copy = [];
for (let i = 0; i < country.length; i++) 
{
  copy[i] = country[i];
}
console.log(copy);

// Q2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries.


// Q3. Sort the webTechs array and mernStack array.
// let array1 = [5, 2, 9, 1];
// let array2 = [8, 3, 6, 4];

// // Sort array1
// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array1.length - i - 1; j++) {
//     if (array1[j] > array1[j + 1]) {
//       let temp = array1[j];
//       array1[j] = array1[j + 1];
//       array1[j + 1] = temp;
//     }
//   }
// }

// // Sort array2
// for (let i = 0; i < array2.length; i++) {
//   for (let j = 0; j < array2.length - i - 1; j++) {
//     if (array2[j] > array2[j + 1]) {
//       let temp = array2[j];
//       array2[j] = array2[j + 1];
//       array2[j + 1] = temp;
//     }
//   }
// }

// console.log("Sorted Array 1:", array1);
// console.log("Sorted Array 2:", array2);

//  Q4. Extract all the countries contain the word 'land' from the countries array and print it as array.
const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Central African Republic','Chad','Chile','China','Colombi','Comoros','Congo (Brazzaville)','Congo','Costa Rica',"Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor Timur)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia, The','Georgia','Germany', 'Ghana','Greece','Grenada','Guatemala', 'Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan', 'Kenya','Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos','Latvia','Lebanon','Lesotho','Liberia','Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon' ,'Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']
const landCountries = [];
for(let i = 0; i < countries.length; i++)
{
  if(countries[i].toLowerCase().includes('land'))
  {
    landCountries.push (countries[i])
  }
}

  console.log(landCountries);

//   Q5. Find the country containing the hightest number of characters in the countries array.

let highest = " ";
for (let i = 0; i < countries.length; i++) 
{
  if (countries[i].length > highest.length) 
  {
    highest = countries[i];
  }
}
console.log(highest);

//  Q6. Extract all the countries containing only four characters from the countries array and print it as array.
const charFour = [];
for (let i = 0; i < countries.length; i++) 
{
  if (countries[i].length === 4) 
  {
    charFour.push (countries[i]);
  }
}
console.log(charFour);

// Q7. Extract all the countries containing two or more words from the countries array and print it as array.
const twoWord = [];
for (let i = 0; i < countries.length; i++) 
{
  if (countries[i].trim().split(/\s+/).length >= 2) 
  {
    twoWord.push(countries[i]);
  }
}
console.log(twoWord);

// Q8. Reverse the countries array and capitalize each country and stored it as an array.
const reverse = [];
for(let i = countries.length - 1; i >= 0; i--)
{
    reverse.push(countries[i].toUpperCase());
}
console.log(reverse);

