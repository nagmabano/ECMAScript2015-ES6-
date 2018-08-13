// Spread Operator

function addFourAges (a, b, c, d){
    return a + b + c + d ;
}

var sum1 = addFourAges(18, 30, 12, 21);    // we can call the function with the arguments but if our argument is in the form of a array
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

// ES6

const sum3 = addFourAges(...ages);
console.log(sum3);


// spread operator to join two arrays

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith,...familyMiller];
console.log(bigFamily);

// spread operator on node list 

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.backgroundColor = 'lightgreen');