'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Person6 = function () {
    function Person6(name, yearOfBirth, job) {
        _classCallCheck(this, Person6);

        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    _createClass(Person6, [{
        key: 'calculateAge',
        value: function calculateAge() {
            var age = new Date().getFullYear() - this.yearOfBirth;
            console.log(age);
        }
    }]);

    return Person6;
}();

var Athlete6 = function (_Person) {
    _inherits(Athlete6, _Person);

    function Athlete6(name, yearOfBirth, job, olympicGames, medals) {
        _classCallCheck(this, Athlete6);

        var _this = _possibleConstructorReturn(this, (Athlete6.__proto__ || Object.getPrototypeOf(Athlete6)).call(this, name, yearOfBirth, job)); // super keyword to point parent


        _this.olympicGames = olympicGames;
        _this.medals = medals;
        return _this;
    }

    _createClass(Athlete6, [{
        key: 'wonMedal',
        value: function wonMedal() {
            this.medals++;
            console.log(this.medals);
        }
    }]);

    return Athlete6;
}(Person6);

var johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 2);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();

// Map

var question = new Map();
question.set('question', 'Latest JS?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer');
question.set(false, 'please try again');

console.log(question.get('question'));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = question.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        // maps key can be of any type and here retreiving a particular type
        if (typeof key === 'number') {
            console.log('Answer ' + key + ': ' + value);
        }
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
