// Classes

// ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('john', 1990, 'teacher');

// ES6

class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting(){
        console.log('Hey! there');
    }
}

var john6 = new Person6('john', 1990, 'teacher');
Person6.greeting();                               // cannot call on john6 as static methods are not inherited by called by the instance ofthe class 