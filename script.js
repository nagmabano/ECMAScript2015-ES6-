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
        //console.log(firstName)  // throws error variables are hoisted but we cannot use them before decleration
        let firstName = 'John';
        const yearOfBirth = 1990;
    }
     //console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.'); // gives error as let and const are block scoped
}

driversLicence6(true);

//ES5

var i =23;                    //<---    23                              //0 1 2 3 4 5 

for(var i = 0; i < 5; i++){                    // value of i changes from 23 to 5
    console.log(i);
}

console.log(i);               //<---    5

//ES6

let j = 23;                 //<---- 23

for(let j = 0; j<5; j++){
    console.log(j);                           // 0 1 2 3 4 23
}

console.log(j)             //<---- 23



let k;

console.log(k);