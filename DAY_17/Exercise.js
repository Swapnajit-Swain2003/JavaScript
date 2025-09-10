// ---------- EXERCISE LEVEL - 1 ------------
 
// Q.1 Store your First name, last name, age, country, city in your browser localStroage.
localStorage.clear();

localStorage.setItem('firstName', 'Swapnajit');
localStorage.setItem('lastName', 'Swain');
localStorage.setItem('age', 23);
localStorage.setItem('country', 'India');
localStorage.setItem('city', 'Jajpur');

console.log(localStorage);


//  ---------- EXERCISE LEVEL - 2 -----------

// Q1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
 firstName: 'Swapnajit',
 lastName: 'Swain',
 age: 23,
 skills: ['HTML', 'CSS', 'JS'],
 country: 'India',
 enrolled: {
    Java: 2021,
    Python: 2023
 }
}

const studentData = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentData);

console.log(studentData);


//  ---------- EXERCISE LEVEL - 3 -----------

// Q1.Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: 'Rahul',
    lastName: 'Sharma',
    incomes: [],
    expenses: [],

    totalIncome: function() {
        return this.incomes.reduce((income, item) => income + item.amount, 0);
    },

    totalExpense: function() {
        return this.expenses.reduce((expense, item) => expense + item.amount, 0);
    },

    addIncome: function(amount, description) {
       this.incomes.push({amount, description});
    },

    addExpense: function(amount, description) {
        this.expenses.push({amount, description});
    },
    

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    },
    accountInfo: function() {
        return `
            Name:  ${this.firstName} ${this.lastName}
            Total Income:  ${this.totalIncome()}
            Total Expense: ${this.totalExpense()}
            Account Balance: ${this.accountBalance()}
            `;
    }
}

const personAccountInfo = JSON.stringify(personAccount, undefined, 4);
localStorage.setItem('personAccount', personAccountInfo);

personAccount.addIncome(50000, "Salary");
personAccount.addIncome(10000, "Bussiness");
personAccount.addExpense(15000, "Rent");
personAccount.addExpense(7000, "Other");

console.log(personAccount.accountInfo());

