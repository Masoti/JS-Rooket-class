'use strict'

var car1 = {
    make : 'Ford',
    model : 'Mustang',
    year : 1969,
}


var car2 = new Object();
car2.make = 'IranKhodro';


Object.prototype.sum = function() {
    return 'sum'
}
// --------------------------------------

function Car(make, model , year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.fun = function() {
    return 'fun';
}

Car.prototype.run = function() {
    return 'run'
}


var car3 = new Car('ford' , 'mustang' , 1969);
var car4 = new Car('Saipa' , '111' , 1800 );

function Person(name) {
    this.name = name;
}

Person.prototype.sum = function() {
    return 'sum + 1'
}

var person1 = new Person('masoud');