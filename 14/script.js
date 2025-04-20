'use strict'

// let car = {
//     make : 'Ford',
//     model : 'Mustang',
//     "year-pro" : 1969,
//     details : {
//         colors : ['red','green' , 'black'],
//         wheels : 4
//     }
// }
// console.log(car.make);
// console.log(car.model);

// car.make = 'IranKhodro'; // = car["make"]= 'IranKhodro'
// console.log(car);
// console.log(car["year-pro"])

// car.maxSpeed = 220;

let car = {
    make : 'Ford',
    model : 'Mustang',
    year : 1969,
    details : {
        colors : ['red','green' , 'black'],
        wheels : 4
    },
    run : function() {
        return 'speed up to 220';
    },
    summary : function() {
        return 'car details : ' + this.model + ' , ' + this.year
    }
}

console.log(car.summary())

let car_2 = new Object()
car_2.make = 'Benz'
console.log(car_2.make);
console.log(car_2);

// console.log(car == car_2)

// var car_3 = Object.create()




