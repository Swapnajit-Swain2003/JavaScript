// Q1. Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};
let mostSkilledUser = '';
let maxSkills = 0;

for (let user in users) 
{
  let skillCount = users[user].skills.length;
  if (skillCount > maxSkills) 
 {
    maxSkills = skillCount;
    mostSkilledUser = user;
  }
}

console.log(` ${mostSkilledUser} has the most skills (${maxSkills} skills).`);

// Q2.Count logged in users, count users having greater than equal to 50 points from the following object.

let loggedInCount = 0;
let pointsCount = 0;

for (let user of Object.values(users)) 
{
  if (user.isLoggedIn) 
  {
    loggedInCount++;
  }
  if (user.points >= 50) 
  {
    pointsCount++;
  }
}
console.log("Logged-in users:", loggedInCount);
console.log("Users with greater than equal to 50 points:", pointsCount);

// Q3. Find people who are MERN stack developer from the users object.

const mernStack = [];
for (let user in users)
{
    const skills = users[user].skills;
    if
    (
        skills.includes("MongoDB") &&
        skills.includes("Express") &&
        skills.includes("React")  &&
        skills.includes("Node") 
    )
    {
        mernStack.push(user);
    }
}
console.log("MERN Stack Developers:-", mernStack);

// Q4.Set your name in the users object without modifying the original users object.

const newUsers = Object.assign({}, users, {
  Swapnajit: {
    email: 'swapnajitswain@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 22,
    isLoggedIn: true,
    points: 100
  }
});
console.log(users);
console.log(newUsers);

// Q5.Get all keys or properties of users object.

const keys = Object.keys(users);
console.log(keys);

// Q6.Get all the values of users object.

const values = Object.values(users);
console.log(values);

// Q7.Use the countries object to print a country name, capital, populations and languages.

const countries = 
{
  India: 
  {
    capital: 'New Delhi',
    population: 1465000000,
    languages: ['Hindi', 'English', 'Odia']
  }
};
for (const country in countries)
{
  const value = countries[country];
  console.log(`Country: ${country}`);
  console.log(`Capital: ${value.capital}`);
  console.log(`Population: ${value.population}`);
  console.log(`Languages: ${value.languages.join(', ')}`);
}
