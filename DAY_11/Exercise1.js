// Q1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp. 

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e,pi,gravity, bodyTemp, boilingTemp);

// Q2. Destructure and assign the elements of countries array to fin, est, sw, den, nor.

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let  [fin, est, sw, den, nor] = countries;
console.log(fin,est, sw, den, nor);

// Q3. Destructure the rectangle object by its properties or keys.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
let { width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter);

// ----------------- LEVEL - 2 EXERCISE --------------------

// Q1.Iterate through the users array and get all the keys of the object using destructuring

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
];

for (const user of users) 
{
  const keys = Object.keys(user);
  console.log(keys);
}

// Q2. Find the persons who have less than two skills.

const skillsArray = [];
for (const user of users) 
{
  if (user.skills.length < 2) 
  {
    skillsArray.push(user);
  }
}
console.log(skillsArray);
