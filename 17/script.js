'use strict'

// --------------------------------------

function Car(make, model , year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.run = function() {
    return 'run'
}


let car3 = new Car('ford' , 'mustang' , 1969);
car3.color = 'red';

let car4 = Object.create(car3);
car4.makeASmile = function() {
    console.log(':)')
}

let car5 = Object.create(car4);
car5.color = 'Yellow';
car5.year = 2010;
car5.makeASmile = function() {
    console.log(':(')
}
