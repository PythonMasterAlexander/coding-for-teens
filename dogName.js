//Ask the user for a dog breed
//If the answer is one of the breeds inside the object
//Return the name of the dog

let prompt = require('readline-sync');
let breed = prompt.question("What breed is your dog?");

let dogs = {
  terrier:  'Suzy',
  husky: 'Sir Sniffybums III',
  pug: 'Notorious P.U.G'
};

console.log("Your dog's name is " + dogs[breed] + "? How fascinating");

