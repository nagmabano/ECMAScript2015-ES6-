// Arrow function 'this'
// Example 1
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){      // we use self variable assigning the this of outer function
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;// this of regular function points to the global object
            alert(str);
        });
    }
}

box5.clickMe();

// Arrow function provides lexical this keyword

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        
        document.querySelector('.green').addEventListener('click', ()=>{     
            var str = 'This is box number ' + this.position + ' and it is ' + this.color; // this points to the outer object
            alert(str);
        });
    }
}

box5.clickMe();

// Example 2

function Person(name){
    this.name = name;
}
// ES5

Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el; // this points to the window object as it is a regular function
    }.bind(this));                              // work around is to use either a self variable or a bind method pointing to the this of function
    
    console.log(arr);
}

var friends = ['Bob','Jane','Mark'];

new Person('John').myFriends5(friends);


// ES6

Person.prototype.myFriends6 = function(friends){
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);  // lexical this                   
    console.log(arr);
}

var friends = ['Bob','Jane','Mark'];

new Person('John').myFriends6(friends);











