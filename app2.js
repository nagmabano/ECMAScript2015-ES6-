// Arrow function

const years = [1990, 1965, 1987, 1992];


// ES5
var ages5 = years.map(function(el){
    return 2018 - el;
});
console.log(ages5);


// ES6
let ages6 = years.map(el => 2018 - el);             // without parenthesis and curly braces
console.log(ages6);

ages6 = years.map((el,index) => `Age element ${index+1}: ${2018 - el}.`);   // with parenthesis without curly braces --- more than one argument

console.log(ages6);

ages6 = years.map((el, index)=>{                   // with parenthesis and curly braces ---- more than one line and return statement
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index+1}: ${age}.`
});

console.log(ages6);

