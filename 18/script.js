'use strict'

// --------------------------------------


// let car = {
//     make : 'sipa',
//     model : '111',
//     displayDetails : function(year , name) {
//         return 'Maker : ' + this.make + ' , Model : ' + this.model
//     }
// }

// let car = {
//     make : 'sipa',
//     model : '111',
//     }
// function displayDetails(make , model) {
//     return 'Maker : ' + make + ' , Model : ' + model
// }
// console.log(displayDetails(car.make , car.model));

// let car = {
//     make : 'sipa',
//     model : '111',
// }
// let car2 = {
//     make : 'sipa',
//     model : 'tiba2',
// }
// function displayDetails (make , model) {
//     return 'Maker : ' + this.make + ' , Model : ' + this.model
// }
// console.log(displayDetails.apply(car2));

// let car = {
//     make : 'sipa',
//     model : '111',
// }
// let car2 = {
//     make : 'sipa',
//     model : 'tiba2',
// }
// function displayDetails (year, name) {
//     console.log(year, name);
//     console.log('Maker : ' + this.make + ' , Model : ' + this.model);
// }
// apply
// displayDetails.apply(car2, [2019, 'Masoud']);

// // call
// displayDetails.call(car2, 2012 , 'Masoud')

// // bind
// displayDetails.bind(car2, 2012 , 'Masoud')
// let a = displayDetails.bind(car2, 2012 , 'Masoud')
// displayDetails.bind(car2, 2012 , 'Masoud')()


let car = {
    make : 'sipa',
    model : '111',
    displayDetails : function(year , name) {
        console.log(year, name);
        console.log('Maker : ' + this.make + ' , Model : ' + this.model, 'Year : ' + year, 'Name : ' + name);
    }
}
let car2 = {
    make : 'sipa',
    model : 'tiba2',
}

car.displayDetails.apply(car2, [2012 , 'Masoud'])

