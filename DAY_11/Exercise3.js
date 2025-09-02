// Q1.Destructure the countries object print name, capital, population and languages of all countries.

const countries = 
[
  { name: "India", 
    capital: "New Delhi", 
    population: 1463865525,
    language:["Hindi", "English", "Odia"] 
  },
  { name: "China", 
    capital: "Beijing", 
    population: 1416096094,
    language:["Chinese", "Korean"] 
  },
  { name: "United States", 
    capital: "Washington", 
    population: 347275807,
    language:["English", "Spanish"] 
  },
  { name: "Russia", 
    capital: "Moscow", 
    population: 143997393,
    language:["Russian", "English"] 
  },
  { name: "Brazil", 
    capital: "Brasília", 
    population: 212812405,
    language:["Portuguese", "German"] 
  },
  { name: "Bangladesh", 
    capital: "Dhaka", 
    population: 175686899,
    language:["Bengali", "Urdu"] 
  },
    { name: "United Kingdom", 
    capital: "London", 
    population: 69600700,
    language:["English", "Polish"] 
  },
  { name: "Australia", 
    capital: "Canberra", 
    population: 28012900,
    language:["English", "Mandarian"] 
  }
];

for (const country of countries) 
{
  console.log('Name:', country.name);
  console.log('Capital:', country.capital);
  console.log('Population:', country.population);
  console.log('Languages:', country.language.join(','));
  console.log("   ");
}

// Q2.A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [studentName, skills, [,  , jsScore, reactScore]] = student;
console.log(studentName, skills, jsScore, reactScore)

// Q3.Write a function called convertArrayToObject which can convert the array to a structure object.
 
const students = 
[
['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(students) 
{
  const structureObject = students.map(student => ({
    name: student[0],
    skills: student[1],
    scores: student[2]
  }));
  return structureObject
}
console.log(convertArrayToObject(students));

// Q4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const Student = 
{
    name: 'David',
    age: 25,
    skills: {
    frontEnd: [
    { skill: 'HTML', level: 10 },
    { skill: 'CSS', level: 8 },
    { skill: 'JS', level: 8 },
    { skill: 'React', level: 9 }
    ],
    backEnd: [
    { skill: 'Node',level: 7 },
    { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
    { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
    }
}
const StudentData = 
{
    name: Student.name,
    age: Student.age,
    skills: {
       frontEnd:
       Student.skills.frontEnd.map(skill => ({...skill})),
       backEnd:
       Student.skills.backEnd.map(skill => ({...skill})),
       dataBase:
       Student.skills.dataBase.map(skill => ({...skill})),
       dataScience:
       [...Student.skills.dataScience]
    }
};
console.log(Student);

// 1.Add Bootstrap with level 8 to the front end skill sets.

StudentData.skills.frontEnd.push({skill: 'Bootstrap', level: 8});

// 2.Add Express with level 9 to the back end skill sets.

StudentData.skills.backEnd.push({skill: 'Express', level: 9});

// 3.Add SQL with level 8 to the data base skill sets.

StudentData.skills.dataBase.push({skill:'SQL', Level: 8});

// 4.Add SQL without level to the data science skill sets.

StudentData.skills.dataScience.push('SQL');

console.log(StudentData);
