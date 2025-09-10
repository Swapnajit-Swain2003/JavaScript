
//  --------- EXERCISE LEVEL - 1 -----------

// Q1. Change skills array to JSON using JSON.stringify().

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const skill = JSON.stringify(skills);
console.log(skill);

// Q2. Stringify the age variable.

let age = 250;
let strAge = JSON.stringify(age);
console.log(strAge);

// Q3. Stringify the isMarried variable.

let isMarried = true
let str = JSON.stringify(isMarried);
console.log(str);

// Q4. Stringify the student object.

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const Student = JSON.stringify(student, undefined, 1);
console.log(Student);



//  ----------  EXERCISE LEVEL - 2 -----------

// Q1. Stringify the students objects with only firstName, lastName and skills properties.

const students = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const Students = JSON.stringify(students, ['firstName', 'lastName', 'skills'], 1)
console.log(Students);




//  --------- EXERCISE LEVEL - 3 -------------

// Q1. Parse the txt JSON to object.

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

const obj = JSON.parse (txt, undefined);
console.log(obj);

// Q2. Find the user who has many skills from the variable stored in txt.
 const users = JSON.parse(txt);
 let maxUser = '';
 let maxCount = 0;

 for( const user in users) {
  const count = users[user].skills.length;
  if(count > maxCount) {
    maxCount = count;
    maxUser = user;
  }
 }
 console.log(`${maxUser} has the most skills, with ${maxCount} skills`);





 
   

