/*
Reference Types:
1. Objects
2. Arrays
3. Functions
*/

// Objects

let person = {
    name: 'Machel',
    age: 32
};


// Dot Notation
person.name = 'John';

// Bracet Notation
person['name'] = 'Mary';

let selection = 'name';
person[selection] = 'Tonie';

console.log(person);
console.log(person.name);

