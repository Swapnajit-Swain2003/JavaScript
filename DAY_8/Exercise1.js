// Q1.Create an empty object called dog.

const Dog = {};

// Q2.Print the the dog object on the console.

console.log(Dog);

// Q3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.

let dog = 
{
  name: "Rocky",
  legs: 4,
  color: "Black",
  age: 5,
  bark: function() 
  {
    return "woof woof";
  }
};

// Q4.Get name, legs, color, age and bark value from the dog object.

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark()); 

// Q5.Set new properties the dog object: breed, getDogInfo.

dog.breed = "Kombai";

dog.getDogInfo = function ()
{
    return ` Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed} `;
}
console.log(dog.getDogInfo());