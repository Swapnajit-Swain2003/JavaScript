
//  ---------- EXERCISE LEVEL - 1 ----------

// Q1. Create a closure which has one inner function.

function closure() {
    let name = "Asabeneh";

    function displayName() {
        console.log(name);
    }
    return displayName;
}

const func = closure();
func()


//  ---------- EXERCISE LEVEL - 2 ----------

// Q1. Create a closure which has three inner functions.

function updation() {
    let number = 0;

    function increment() {
        number = number + 1;
        // number++;
        return number;
    }
    function decrement() {
        number = number - 1;
        // number--;
        return number;
    }
    function reset() {
        number = 0;
        return number;
    }
    return {
        Increment: increment,
        Decrement: decrement,
        Reset: reset
    }
}

const update = updation();

console.log(update.Increment());
console.log(update.Increment());
console.log(update.Decrement());
console.log(update.Reset());


//  ---------- EXERCISE LEVEL - 3 ----------

// Q1.Create a personAccount out function. It has firstname,lastname,incomes,expenses inner variables. It has totalIncome,totalExpense,accountInfo,addIncome,addExpense and accountBalance inner functins. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount() {
    let firstname = " Asabeneh";
    let lastname = "Jain";
    let incomes = [];
    let expenses = [];
    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }
    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }
    function totalIncome() {
        return incomes.reduce((sum, income) => sum + income.amount, 0);
    }
    function totalExpense() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }
    function accountBalance() {
        return totalIncome() - totalExpense();
    }
    function accountInfo() {
        return `
        Name:  ${firstname} ${lastname}
        Total Income: ${totalIncome()}
        Total Expense: ${totalExpense()}
        Account Balance: ${accountBalance()}`
    }
    return {
        addIncome,
        addExpense,
        totalIncome,
        totalExpense,
        accountBalance,
        accountInfo
    };
}
const myAccount = personAccount();

myAccount.addIncome(72000, "Salary");
myAccount.addIncome(24000, "Business");
myAccount.addExpense(27000, "Rent & Groceries");
myAccount.addExpense(15000, "Other");

console.log(myAccount.accountInfo());
