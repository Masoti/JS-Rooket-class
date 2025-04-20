'use strict'

let car1 = {
    make : 'Ford',
    model : 'Mustang',
    year : 1969,
}


let car2 = new Object();
car2.make = 'IranKhodro';

// --------------------------------------

function Car(make, model , year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.run = function() {
        return 'speed up to 200';
    }
}


let car3 = new Car('ford' , 'mustang' , 1969);
let car4 = new Car('Saipa' , '111' , 1800 );


