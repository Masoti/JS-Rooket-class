'use strict'

// --------------------------------------


var car = {
    make : 'sipa',
    model : '111',
    displayDetails : function(year , name) {
        console.log(year , name)
        console.log('Maker : ' + this.make + ' , Model : ' + this.model)
    }
}

var car2 = {
    make : 'sipa',
    model : 'tiba2',
}

car.displayDetails.apply(car2, [2012 , 'hesam'])
// apply

// // call
// displayDetails.call(car2, 2012 , 'hesam')

// // bind
// displayDetails.bind(car2, 2012 , 'hesam')


