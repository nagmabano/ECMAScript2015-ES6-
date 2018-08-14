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
//console.log(question.size);

/*if(question.has(4)){
  //question.delete(4);  
  //console.log('answer is here')
}*/

//question.clear();

// maps are iterable
/*question.forEach((value,key)=>{
    console.log(`This is ${key}, and its value is ${value}`);  
})*/


/*
for( let [key,value] of question.entries()){                       // for of loof with destructuring for iterating map
    console.log(`This is ${key}, and its set to value ${value}`);
}
*/

for( let [key,value] of question.entries()){                        // maps key can be of any type and here retreiving a particular type
    if( typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));



