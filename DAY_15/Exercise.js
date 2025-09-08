// ---------- EXERCISE LEVEL - 1 ---------

// Q1. Create an Animal class. The class will have name,age,color,legs prperties and create different methods.

class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

 describeAnimal() 
 {
   const  fullDescribe =  ` ${this.name} is an animal. It is ${this.color} in color, ${this.age} years old, and has ${this.legs} legs`;
    return fullDescribe;
 }
 saySomething() 
 {
    console.log('I am an Animal class');
 }
}
const Animal1 = new Animal('Crow',  3, 'Black', '2');
console.log(Animal1);
console.log(Animal1.describeAnimal());
Animal1.saySomething();

// Q2. Create a Dog and Cat child class from the Animal Class.

//  Dog class 

class Dog extends Animal {
    saySomething() {
        console.log('I am a child class of the animal class.');
    }
}
const Dogs = new Dog ('Dogi', 7, 'White', 4);
console.log(Dogs);
// Dogs.saySomething();
console.log(Dogs.describeAnimal());

// Cat class

class Cat extends Animal {
    saySomething(){
        console.log('I am a child class of the animal class.');
    }
}
const Cats = new Cat ('Billi', 2, 'Brown', 4);
console.log(Cats);
// Cats.saySomething();
console.log(Cats.describeAnimal());


//  ------ EXERCISE LEVEL - 2 ---------

// Q1. Override the method you create in Animal class.


class Tiger extends Animal {
    saySomething() {
        console.log('I am child class of animal class');
    }
}
const Tigers = new Tiger('Mogli', 8, 'yellow', 4)
console.log(Tigers);
Tigers.saySomething();


//  ---------- EXERCISE LEVEL - 3 -------------

// Q1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.


ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];


class Statistics {
  constructor(data) 
  {
    this.data = data.sort((a, b) => a - b);
  }

  count() 
  {
    return this.data.length;
  }

  sum() 
  {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  min() 
  {
    return this.data[0];
  }

  max() 
  {
    return this.data[this.data.length - 1];
  }

  range() 
  {
    return this.max() - this.min();
  }

  mean() 
  {
    return Math.round(this.sum() / this.count());
  }

  median() 
  {
    const mid = Math.floor(this.count() / 2);
    if (this.count() % 2 === 0) {
      return Math.round((this.data[mid - 1] + this.data[mid]) / 2);
    } else {
      return this.data[mid];
    }
  }

  mode() 
  {
    const freq = {};
    this.data.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });

    let maxFreq = 0;
    let modeVal = null;
    for (let val in freq) {
      if (freq[val] > maxFreq) {
        maxFreq = freq[val];
        modeVal = Number(val);
      }
    }
    return { mode: modeVal, count: maxFreq };
  }

  var() 
  {
    const mean = this.mean();
    const squaredDiffs = this.data.map(num => (num - mean) ** 2);
    return Math.round(squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count() * 10) / 10;
  }

  std() 
  {
    return Math.round(Math.sqrt(this.var()) * 10) / 10;
  }

  freqDist() 
  {
    const freq = {};
    this.data.forEach(val => {
      freq[val] = (freq[val] || 0) + 1;
    });

    const dist = [];
    for (let key in freq) {
      const percentage = Math.round((freq[key] / this.count()) * 1000) / 10;
      dist.push([percentage, Number(key)]);
    }

    return dist.sort((a, b) => b[0] - a[0]);
  }

  describe() 
  {
    const modeObj = this.mode();
    console.log('Count:', this.count());
    console.log('Sum: ', this.sum());
    console.log('Min: ', this.min());
    console.log('Max: ', this.max());
    console.log('Range: ', this.range());
    console.log('Mean: ', this.mean());
    console.log('Median: ', this.median());
    console.log('Mode: ', `(${modeObj.mode}, ${modeObj.count})`);
    console.log('Variance: ', this.var());
    console.log('Standard Deviation: ', this.std());
    console.log('Frequency Distribution:', this.freqDist());
  }
}
const statistics =  new Statistics(ages)
statistics.describe();


// Q2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.


class PersonAccount {
    constructor (firstname, lastname)  
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = new Set();
        this.expenses = new Set();
    }
    addIncome(amount, description) 
    {
        this.incomes.add ({amount, description});
    }
    addExpense(amount, description) 
    {
        this.expenses.add ({amount, description});
    }
    totalIncome() 
    {
     let total = 0;
     this.incomes.forEach((income) => {
        total = total + income.amount 
     });
     return total;
    }
     totalExpense() 
     {
     let total = 0;
     this.expenses.forEach((expense) => {
        total = total + expense.amount
     });
     return total;
    }
    accountBalance() 
    {
        const totalBAlance = this.totalIncome() - this.totalExpense();
        return totalBAlance;
    }
    accountInfo() 
    {
        const information =  `
       Account Holder : ${this.firstname} ${this.lastname}
       Total Income : ${this.totalIncome()}
       Total Expense : ${this.totalExpense()}
       Account Balance : ${this.accountBalance()}`
        return information;
    }
}



const person = new PersonAccount("Lidiya", "Tekle");
person.addIncome(17000, "Salary");
person.addIncome(15000, "Bussiness");
person.addExpense(10000, "Rent");
person.addExpense(7000, "Other");


console.log(person.accountInfo());

