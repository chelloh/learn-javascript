// A Function is a set of statements that performs a task or calculates a value
// Performs a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Peter', 'John');

// Types Of Functions
// Calculating a value
function square(number) {
    return number * number;
}

// call the square function
square(2);
// print the result in the console
console.log(square(2));

// use the value to initialize a variable
let number = square(2);
// print the result in the console
console.log(number);