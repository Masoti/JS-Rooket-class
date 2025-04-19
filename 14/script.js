'use strict'

var car = {
    make : 'Ford',
    model : 'Mustang',
    "year" : 1969,
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

var car_2 = Object.create()

console.log(car == car_2)


// console.log(car.summary())


