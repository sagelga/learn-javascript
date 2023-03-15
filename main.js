// console.log('This is a log');
// console.warn('This is a warning');
// console.error('This is an error');

let age = 30;
const name = 'John';
age = 31;
// console.log(age);

// Concatinate
console.log('My name is ' + name + ' and I am ' + age);
// Template String (ES6)
console.log(`My name is ${name} and I am ${age}`);

const s = 'Hello World!';

// Length of the string
console.log(s.length);
// Change string to UPPERCASE
console.log(s.toUpperCase());
// Select string to length
console.log(s.substring(0, 5));
// Combine multiple methods
console.log(s.substring(0, 5).toUpperCase());

s2 = 'Technology, Computers, IT, Code';

// Separates String to an Array
console.log(s2.split(', '));

// ---------- Arrays
const fruits = ['Apples', 'Oranges', 'Pear'];
fruits[3] = 'grapes';
console.log(fruits);

// Add mangoes to the last index
fruits.push('mangos');
console.log(fruits);

// Add strawberries to the first item
fruits.unshift('strawberries');
console.log(fruits);

// Removes the last element of an array
fruits.pop();
console.log(fruits);

// Check if fruits is an Array
console.log(Array.isArray(fruits));

// Get the index number of the target
console.log(fruits.indexOf('Oranges'));
console.log(fruits);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA',
    },
};

// To get the information from the Object, use dot notation
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.state);

// Add email to object person
person.email = 'john@gmail.com';
console.log(person);

// Deconstruct a value in person to variable firstName, lastName, address
// But this is so ES6.
const {
    firstName,
    lastName,
    address: { city },
} = person;
console.log(firstName);

// Create an array object (it is an array, followed by an object)
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: true,
    },
];

// Convert array object into a JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// Create for loops
for (let i = 0; i < array.length; i++) {
    const element = array[i];
}
