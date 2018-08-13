// Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2018 - year;
}



// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 template literals using backtics and ${ name }
// we can directly put entire expression instead of using just variable name

console.log(`This is ${ firstName } ${ lastName }. He was born  in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old. `); 

// few new methods with string

const name = `${firstName} ${lastName}`;
console.log(name.startsWith('J'));    // true         start of the string
console.log(name.startsWith('j'));    // false
console.log(name.endsWith('h'));      // true         end of the string
console.log(name.endsWith('k'));      // false
console.log(name.includes('hn'));     // true         middle of the string
console.log(name.includes('itl'));    // false
console.log(name.repeat(3));
