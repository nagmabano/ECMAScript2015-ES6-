// Class Inheritance

// ES5

/*
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 2);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/


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
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){    // super keyword to point parent
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 2);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();


// Map

const question = new Map();
question.set('question','Latest JS?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true, 'correct answer');
question.set(false,'please try again');

console.log(question.get('question'));

for( let [key,value] of question.entries()){                        // maps key can be of any type and here retreiving a particular type
    if( typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
