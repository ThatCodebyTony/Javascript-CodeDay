// Comment
console.log('Log hello world');

let name = ' Mosh';
console.log(name);

let firstName = "John"
let lastName = "Smith"

// const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let age = 30;

let isApproved = true;
let firstN = undefined
let lastN = null;
let selectedColor = null;
// let selectedColor = 'red';

let person = {
    name: 'John',
    age: 30
};

// Dot notation
person.name = 'Mary';

// Bracket notation
let selection = 'name';
person[selection] = 'Harry';


console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

function greet(name, lastName) {
    console.log('Hello function');
}

greet()

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary');

function square(number) {
    return number * number;
}

let number = square(3);

console.log(number + " is the square of 3");

// this is a test