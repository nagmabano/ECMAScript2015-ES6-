// let and const

//ES5

/*var name5 = 'Jane Smith';
var age5 = 26;
name5 = 'Jane Miller';

console.log(name5);

//ES6

const name6 = 'Jane Smith'; // immutable variable
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6)  // gives error 'Assignment to constant variable'*/

//ES5

function driversLicence5(passedTest){
    
    if(passedTest){
        console.log(firstName)   // outputs undefined because of hoisting
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.'); // works fine as var is function scoped
}

driversLicence5(true);


//ES6

function driversLicence6(passedTest){
    
    if(passedTest){
        console.log(firstName)  // throws error
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
     console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.'); // gives error as let and const are block scoped
}

driversLicence6(true);

//ES5



