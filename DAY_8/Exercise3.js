// Q1.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
 
const personAccount = 
{
   firstName: "Swapnajit",
   lastName: "Swain",
   incomes: [],
   expenses: [],
   addIncome (amount, description) 
   {
    this.incomes.push({amount, description});
   },
   addExpense (amount, description)
   {
    this.expenses.push({amount,description})
   },
   totalIncome () 
   {
    return this.incomes.reduce((sum, incomes) => sum + incomes.amount, 0) ;
   },
   totalExpense ()
   {
    return this.expenses.reduce((sum, expenses) => sum + expenses.amount, 0);
   },
   accountBalance ()
   {
    return this.totalIncome() - this.totalExpense();
   },
   accountInfo()
   {
    return 
    `Account Name: ${this.firstName} ${this.lastName}
    Total Income: ${this.totalIncome()}
    Total Expense: ${this.totalExpense()}
    Account Balance: ${this.accountBalance()}`;
   }
};

personAccount.addIncome(47500, "Salary");
personAccount.addExpense(37570, "Utility");
personAccount.addIncome(13720, "Other Source");
personAccount.addExpense(11950, "Maintaince")
console.log(personAccount.accountBalance());

// Q2.Questions:2 is based on the following two arrays:users and products ()

/* Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application */

    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
    
function signUp(username, email, password) 
{
  const exists = users.find(u => u.username === username || u.email === email);
  if (exists) return 'User already has an account.';
  
  users.push({
    _id: Math.random().toString(36).slice(2, 8),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  });
  return 'User successfully signed up.';
}

function signIn(username, password) 
{
  const user = users.find(u => u.username === username);
  if (!user) return 'No user found.';
  if (user.password !== password) return 'Incorrect password.';
  user.isLoggedIn = true;
  return 'User signed in successfully.';
}

const resultSignUp = signUp('Bob', 'bob@bob.com', 24680);
console.log(resultSignUp); 

console.log(users);

// Q3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product.

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];
 function rateProduct (name, _id, rating)
 {
  const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (product)
  {
    product.ratings.push({_id, rate: rating})
  }
 }

 function averageRating (name)
 {
  const product = products.find(p => p.name.toLowerCase() === name.toLowerCase());
  if(product && product.ratings.length > 0)
  {
    const avg = product.ratings.reduce((sum, r) => sum + r.rate, 0)/product.ratings.length;
    return avg;
  }
  return 0;
 }

 rateProduct("TV", "user111", 4.9);
 console.log(averageRating("TV")); 

// Q4.Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(products, productId, userId) 
{
  const product = products.find(p => p._id === productId);
  if (!product) 
  {
    return 'Product not found';
  }

  const index = product.likes.indexOf(userId);
  if (index === -1) 
  {
    product.likes.push(userId); 
  } else 
  {
    product.likes.splice(index, 1);  
  }

  return product.likes;
}

console.log(likeProduct(products, 'aegfal', 'zwf8md')); 
console.log(likeProduct(products, 'aegfal', 'fg12cy'));  