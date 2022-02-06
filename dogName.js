//Ask the user for a dog breed
//If the answer is one of the breeds inside the object
//Return the name of the dog

/*
let prompt = require('readline-sync');
let breed = prompt.question("What breed is your dog?");

let dogs = {
  terrier:  'Suzy',
  husky: 'Sir Sniffybums III',
  pug: 'Notorious P.U.G'
};

console.log("Your dog's name is " + dogs[breed] + "? How fascinating");
*/

//Questions and answers from book

/* 1) In programming, increasing or decreasing a value of a variable is a common thing to do.
You can use double ++ to increment and double -- to decrement.

This variable dont work, it dont increment but output a zero

let num = 0;
num = num++;
console.log(num);

*/

//Answer - The variable dont increment because you can't increment or decrement if you assign a variable
let num = 1;
num++;
console.log(num); // 2

num--;
console.log(num); // 1

/* 2) Adding two numbers together is not working properly 

Javascript can do something called type coercion. This means if javascript see a operation on something that 
don't make sense, it will try to do the performing. This is type coercion, the concept of performing a operation
on two different data types.

let numOne = 10;
let numTwo = "2";
console.log(numOne + numTwo);
*/

//Answer - Use the right data type

let numOne = 10;
let numTwo = 2;
console.log(numOne + numTwo);

/* 3) Try to access the name "Max" in the object dogs by declaring a variable with the key for "Max"

You can use dot notation and bracket notation to access a object. In the case of dot notation, javascript
will try and access the object as a string. But declaring a variable and try to access the object with this
variable will fail because the variable name is not the key you want to use, which is the value of the variable

let dogs = {
  pug: 'Max',
  terrier: 'Appa'
};

let dogType = "pug";
console.log(dogs.dogType);
*/

// Use brackets around the name, because you need to use brackets to access the value in a variable 
let dogs = {
  pug: 'Max',
  terrier: 'Appa'
}

let dogType = "pug";
console.log(dogs[dogType]);

/* 4) An attempt to access the last entry in the array is outputting undefined

The first entry in an array start at zero 0. And number three don't exist in the array so you cant access it

let meanPeople = ['Layna', 'Layna again', 'Layna one more time']; 
*/
let meanPeople = ['Layna', 'Layna again', 'Layna one more time'];
console.log(meanPeople[2]);

/* 5) When running this code we get a fatal error on run time

Using a quote inside a string makes javascript think the string ends there. Use an escape character, double quotes or a string
literal.

console.log('Layna's' favorite hobby is being mean to Andrew');
*/

console.log('Layna\'s favorite hobby is being mean to Andrew');

