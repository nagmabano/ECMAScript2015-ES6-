// Default Parameters

// ES5

/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
        
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1987, 'Diaz', 'Spanish');
*/



// ES6


function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){
        
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
        
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1987, 'Diaz', 'Spanish');


